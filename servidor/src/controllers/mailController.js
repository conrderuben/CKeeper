"use strict";
const nodemailer = require("nodemailer");

exports.resetPasswordCode = async (req, res) =>  {
  const mailHtml= "<style>table, td, div, h1, p {font-family: Arial, sans-serif;}</style></head><body style='margin:0;padding:0;'><table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;'><tr><td align='center' style='padding:0;'><table role='presentation' style='width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;'><tr><td align='center' style='padding:40px 0 30px 0;background:#70bbd9;'><img src='../../../cliente/src/assets/Ckeeper.svg' alt='' width='300' style='height:auto;display:block;' /></td></tr><tr><td style='padding:36px 30px 42px 30px;'><table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;'><tr><td style='padding:0 0 36px 0;color:#153643;'><h1 style='font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;'>RESET YOUR PASSWORD</h1><p style='margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;'>Hello, your verification code to reset your password is:  "+"</p><h2>"+req.params.verificationCode+"</h2></td></tr><tr><td style='padding:0;'><table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;'></table></td></tr></table></td></tr><tr><td style='padding:30px;background:#ee4c50;'><table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;'><tr><td style='padding:0;width:50%;' align='left'><p style='margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;'>&reg; Ckeeper ORG, 2022<br/>"+"<a href='http://34.175.231.25:3000' style='color:#ffffff;text-decoration:underline;'>Website</a></p></td><td style='padding:0;width:50%;' align='right'>"+"<a  style='color:#ffffff;'><img src='https://assets.codepen.io/210284/tw_1.png' alt='Twitter' width='38' style='height:auto;display:block;border:0;' /></a></td><td style='padding:0 0 0 10px;width:38px;'><a  style='color:#ffffff;'><img src='https://assets.codepen.io/210284/fb_1.png' alt='Facebook' width='38' style='height:auto;display:block;border:0;' /></a></td></tr></table></td></tr></table></td></tr></table></td></tr></table></body></html>"

  

  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "ckeeperorg@hotmail.com", // generated ethereal user
      pass: "Ckeeper123", // generated ethereal password
    },
    tls: {
        ciphers:'SSLv3'
    }
  });

  let info = await transporter.sendMail({
    from: "ckeeperorg@hotmail.com", // sender address
    to: "jorge10.lominchar@gmail.com", // list of receivers
    subject: "RESET PASSWORD CKEEPER ✔", // Subject line
    text: "Hello, your verification code is "+req.params.verificationCode, // plain text body
    html: mailHtml, // html body
  });

  console.log("Message sent: %s", info.messageId);
  
}

exports.verifyUser =async (req, res) =>  {
const verifyMail= "<style>table, td, div, h1, p {font-family: Arial, sans-serif;}</style></head><body style='margin:0;padding:0;'><table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;'><tr><td align='center' style='padding:0;'><table role='presentation' style='width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;text-align:left;'><tr><td align='center' style='padding:40px 0 30px 0;background:#70bbd9;'><img src='../../../cliente/src/assets/Ckeeper.svg' alt='' width='300' style='height:auto;display:block;' /></td></tr><tr><td style='padding:36px 30px 42px 30px;'><table role='presentation'"+" style='width:100%;border-collapse:collapse;border:0;border-spacing:0;'><tr><td style='padding:0 0 36px 0;color:#153643;'><h1 style='font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;'>CONFIRM YOUR ACCOUNT</h1><p style='margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;'></p><form action='http://localhost:4000/api/registro/' method='post'>"+"   <input type='text' name='user' value='"+req.body.form.user+"' style='display: none;'   ></input>   <input type='password' value='"+req.body.form.password+"'name='password' style='display: none;'   >"+" </input>   <input type='text' value='"+req.body.form.name+"'name='name' style='display: none;'   ></input>   <input type='text'value='"+req.body.form.surname+"' name='surname' style='display: none;'   ></input>   <input type='date' value='"+req.body.form.bornDate+"' name='bornDate' style='display: none;'   ></input>   <input type='email' value='"+req.body.form.mail+"' style='display: none;' name='mail'   ></input>   <input   style='display: none;' type='tel' name='phone' value='"+req.body.form.phone+"'  ></input>      <button type='submit' className='btn btn-primary' style='color: blue;border:none;border-bottom:1px solid blue; background:none;cursor:pointer'> Hello, click this link to confirm your account   </button> </form>"+"</td></tr><tr><td style='padding:0;'><table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;'></table></td></tr></table></td></tr><tr><td style='padding:30px;background:#ee4c50;'><table role='presentation' style='width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;'>"
  const verifyMail2="<tr><td style='padding:0;width:50%;' align='left'><p style='margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;'>&reg; Ckeeper ORG, 2022<br/>"+"<a href='http://34.175.231.25:3000' style='color:#ffffff;text-decoration:underline;'>Website</a></p></td><td style='padding:0;width:50%;' align='right'>"+"<a  style='color:#ffffff;'><img src='https://assets.codepen.io/210284/tw_1.png' alt='Twitter' width='38' style='height:auto;display:block;border:0;' /></a></td><td style='padding:0 0 0 10px;width:38px;'><a  style='color:#ffffff;'><img src='https://assets.codepen.io/210284/fb_1.png' alt='Facebook' width='38' style='height:auto;display:block;border:0;' /></a></td></tr></table></td></tr></table></td></tr></table></td></tr></table></body></html>"
  

  let transporter = nodemailer.createTransport({
    
    service: "hotmail",
    auth: {
      user: "ckeeperorg@hotmail.com", // generated ethereal user
      pass: "Ckeeper123", // generated ethereal password
    },
    tls: {
        ciphers:'SSLv3'
    }
  });

  let info = await transporter.sendMail({
    from: "ckeeperorg@hotmail.com", // sender address
    to: "jorge10.lominchar@gmail.com", // list of receivers
    subject: "CONFIRM YOUR ACCOUNT IN CKEEPER ✔", // Subject line
    text: "Verify your user", // plain text body
    html: verifyMail+verifyMail2, // html body
    
  });


  console.log("Message sent: %s", info.messageId);


}