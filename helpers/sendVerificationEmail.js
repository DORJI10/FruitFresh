const nodemailer = require('nodemailer');

const sendverificationEmail = async (email, token) => {
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const url = ${process.env.BASE_URL}/verify-email?token=/${token};

await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify your email',
    html: `<p>Click the link below to verify your email:</p>
           <a href="${url}">Verify Email</a>`
});
}

module.exports = sendVerificationEmail;
const nodemailer = require('nodemailer');

const senderificationEmail = async (email, token) => {
    const transporter = nodemailer.createTransport({
    seconst nodemailer = require('nodemailer');

const senderificationEmail = async (email, token) => {
    const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const url = ${process.env.BASE_URL}/verify-email?token=/${token};

await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify your email',
    html: `<p>Click the link below to verify your email:</p>
           <a href="${url}">Verify Email</a>`
});
}

module.exports = sendVerificationEmail;rvice: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const url = ${process.env.BASE_URL}/verify-email?token=/${token};

await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify your email',
    html: `<p>Click the link below to verify your email:</p>
           <a href="${url}">Verify Email</a>`
});
}

module.exports = sendVerificationEmail;