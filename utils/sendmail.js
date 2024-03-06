import { createTransport } from "nodemailer";

export const sendmail = async(email , subject , text)=>{
    const transport = createTransport({
        //we use mailtrap here for email 
        service: 'gmail',
        host : process.env.SMTP_HOST,
        port : process.env.SMTP_PORT,
        secure: true,
        auth:{
            user:process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
    await transport.sendMail({
        from: process.env.SMTP_USER,
        to :email,
        subject,
        text
    })
}

// For Image upload to backend - 
//         npm i cloudinary
//         npm i express-fileupload
// and for send otp to mail - 
//          nodemailer
//       and open mailtrap
