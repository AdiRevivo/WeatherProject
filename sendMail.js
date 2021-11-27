



var nodemailer = require('nodemailer');
function send(name,email) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'adilupo181@gmail.com',
            pass: '2889039031AL'
        }
    });
    
    var mailOptions = {
        from: 'noreply@gmail.com',
        to: email,
        subject: 'ברוכים הבאים!!!',
        text: `שלום ${name}!!`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}
module.exports={send}