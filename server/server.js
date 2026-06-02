const express = require("express");
const cors = require('cors');
const fs = require("fs");
const nodemailer = require("nodemailer");
const { info } = require("console");
require('dotenv').config({ path: './email.env' });

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

app.use(cors({
  origin: 'https://vaporo-store.vercel.app', // or specify your frontend URL
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Setup mail transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
});

// Save form data to data.json
function addToFile(newData, callback) {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            return callback(err);
        }

        let jsonData = [];
        if (!err && data.trim()){
            try {
                jsonData = JSON.parse(data);
            } catch (parseErr) {
                jsonData = [];
                return callback(parseErr);
                
            }
        }
        

        jsonData.push(newData);

        fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (writeErr) => {
            callback(writeErr);
        });
    });
}

// Handle form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    if (!req.body) {
        return res.status(400).send('not getting body');
    } else if(!formData || Object.keys(formData).length === 0){
        return res.status(400).send('its empty');
    }

    addToFile(formData, (err) => {
        if (err) {
            console.error('File write error:', err);
            return res.status(500).send('Failed to save data');
        }

        const message = `
New form :

Name: ${formData.name || 'N/A'}
\n
Email: ${formData.email || 'N/A'}
\n
Message: ${formData.msg || 'N/A'}`;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: 'New entery',
            text: message,
        };
        const mailClient = {
            from: process.env.EMAIL_USER,
            to: formData.email,
            subject: "Response",
            text: "We will contact you shortly",
        }

        transporter.sendMail(mailOptions, (emailErr) => {
            if (emailErr) {
                console.error('Email error:', emailErr);
                return res.status(400).json({ status: "error", message: "Body is empty" });
            }
        });
        transporter.sendMail(mailClient, (emailErr) => {
            if(emailErr){
                console.error("email error:", emailErr);
                return res.status(400).json({ status: "error", message: "Body is empty" });
            }
        });
        return res.json({status: "success", message: "We will contact you shortly"});
    });
});

// Start server
app.listen(PORT, () => {
    console.log(` Server is running at http://localhost:${PORT}`);
});
