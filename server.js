require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); 
const app = express();

app.use(cors()); 
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/submit-form', (req, res) => {
    const userName = req.body.name;
    const userPhone = req.body.phone;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `Ви отримали запит на безкоштовну консультацію від: ${userName}`,
        text: `You have received a new lead:\n\nІм'я: ${userName}\nСитуація: ${userPhone}`
    };

    // We wait for the email to send before telling the user anything
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Email Error:", error);
            // Send a 500 (Server Error) status with a clear message
            return res.status(500).send("Не вдалося надіслати повідомлення через збій пошти.");
        }
        
        console.log("Email sent successfully: " + info.response);
        // Send a 200 (OK) status message only on success
        res.status(200).send("Дякуємо! Ваша інформація успішно надіслана.");
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});