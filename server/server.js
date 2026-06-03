const express = require("express");
const cors = require('cors');
const fs = require("fs");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const validator = require("validator");
require('dotenv').config(); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://vaporo-store.vercel.app', 
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5,
  message: { error: 'Too many messages sent from this IP. Please try again in 15 minutes.' },
  standardHeaders: true, 
  legacyHeaders: false,
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

// function addToFile(newData, callback) {

//     fs.readFile('data.json', 'utf8', (err, data) => {
//         let jsonData = [];
        
//         if (!err && data && data.trim()){
//             try {
//                 jsonData = JSON.parse(data);
//             } catch (parseErr) {
//                 jsonData = [];
//             }
//         }
        
//         jsonData.push(newData);

//         fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (writeErr) => {
//             callback(writeErr);
//         });
//     });
// }

// Handle form submissions
app.post('/submit-form', contactFormLimiter, (req, res) => {
    const formData = req.body;

    if (!formData || Object.keys(formData).length === 0){
        return res.status(400).json({ error: 'Form data is empty' });
    }

    addToFile(formData, (err) => {
        if (err) {
            console.error('File write error:', err);
            return res.status(500).json({ error: 'Failed to save data' });
        }
        
        let cleanName = formData.name ? validator.escape(formData.name.trim()) : 'N/A';
        let cleanMessage = formData.message ? validator.escape(formData.message.trim()) : 'N/A';
        let cleanEmail = formData.email ? formData.email.trim() : 'N/A';

        const emailBody = `New form entry:\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nMessage: ${cleanMessage}`;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: 'New Entry',
            text: emailBody,
        };

        const mailClient = {
            from: process.env.EMAIL_USER,
            to: cleanEmail,
            subject: "Response Recieved",
            text: "Thank you for reaching out. We will contact you shortly.",
        };

        // Fire both emails at the same time and respond once completed
        Promise.all([
            transporter.sendMail(mailOptions),
            transporter.sendMail(mailClient)
        ])
        .then(() => {
            return res.status(200).json({ status: "success", message: "We will contact you shortly" });
        })
        .catch((emailErr) => {
            console.error('Email sending error:', emailErr);
            // Even if email fails, data was saved successfully
            return res.status(500).json({ status: "error", message: "Form saved, but notification email failed to dispatch." });
        });
    });
});

// Start server (Only ONE listener at the bottom)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server successfully running on port ${PORT}`);
});
