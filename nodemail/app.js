const nodemailer = require("nodemailer");

nodemailer.createTestAccount((err, account) => {

    let transporter = nodemailer.createTransport( {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "dom.pilipu@googlemail.com",
            pass: "!dominic1337!"
        }
    });

    let mailOptions = {
        from: "Dominic <dom.pilipu@gmail.com>",
        to: "Dominic <dom.pilipu@outlook.de>",
        subject: "test",
        text: "hallo dominic"
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    })
   
});