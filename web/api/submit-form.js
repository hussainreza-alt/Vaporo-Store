import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  const formData = req.body;

  if (!formData || Object.keys(formData).length === 0) {
    return res.status(400).json({
      status: "error",
      message: "Body is empty",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const message = `
New form:

Name: ${formData.name || "N/A"}

Email: ${formData.email || "N/A"}

Message: ${formData.msg || "N/A"}
`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: "New Entry",
      text: message,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: "Response",
      text: "We will contact you shortly",
    });

    return res.status(200).json({
      status: "success",
      message: "We will contact you shortly",
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      status: "error",
      message: "Email failed",
    });
  }
}