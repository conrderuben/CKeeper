"use strict";
const nodemailer = require("nodemailer");
// async..await is not allowed in global scope, must use a wrapper
exports.resetPasswordCode = async (req, res) =>  {
  const mailHtml= "<style>table, td, div, h1, p {font-family: Arial, sans-serif;}</style></head><body style='margin:0;padding:0;'><table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;'><tr><td align='center' style='padding:0;'><table role='presentation' style='width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;'><tr><td align='center' style='padding:40px 0 30px 0;background:#70bbd9;'><img src='../../../cliente/src/assets/Ckeeper.svg' alt='' width='300' style='height:auto;display:block;' /></td></tr><tr><td style='padding:36px 30px 42px 30px;'><table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;'><tr><td style='padding:0 0 36px 0;color:#153643;'><h1 style='font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;'>RESET YOUR PASSWORD</h1><p style='margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;'>Hello, your verification code to reset your password is:  "+"</p><h2>"+req.params.verificationCode+"</h2></td></tr><tr><td style='padding:0;'><table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;'></table></td></tr></table></td></tr><tr><td style='padding:30px;background:#ee4c50;'><table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;'><tr><td style='padding:0;width:50%;' align='left'><p style='margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;'>&reg; Ckeeper ORG, 2022<br/>"+"<a href='http://34.175.231.25:3000' style='color:#ffffff;text-decoration:underline;'>Website</a></p></td><td style='padding:0;width:50%;' align='right'>"+"<a  style='color:#ffffff;'><img src='https://assets.codepen.io/210284/tw_1.png' alt='Twitter' width='38' style='height:auto;display:block;border:0;' /></a></td><td style='padding:0 0 0 10px;width:38px;'><a  style='color:#ffffff;'><img src='https://assets.codepen.io/210284/fb_1.png' alt='Facebook' width='38' style='height:auto;display:block;border:0;' /></a></td></tr></table></td></tr></table></td></tr></table></td></tr></table></body></html>"

  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: "hotmail",
    auth: {
      user: "ckeeperorg@hotmail.com", // generated ethereal user
      pass: "Ckeeper123", // generated ethereal password
    },
    tls: {
        ciphers:'SSLv3'
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "ckeeperorg@hotmail.com", // sender address
    to: "jorge10.lominchar@gmail.com", // list of receivers
    subject: "RESET PASSWORD CKEEPER ✔", // Subject line
    text: "Hello, your verification code is "+req.params.verificationCode, // plain text body
    html: mailHtml, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

