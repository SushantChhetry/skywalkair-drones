const nodemailer = require("nodemailer");

const sendEmailHandler = async (res: any, req: any) => {
  const { fullname, email, phoneNumber, service } = res.body;

  const transporter = nodemailer.createTransporter({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: "sushantchhetry@outlook.com",
      pass: "testing1234!",
    },
  });

  const mailOptions = {
    from: "sushantchhetry@outlook.com",
    to: "sushantchhetry@outlook.com",
    subject: `Service Request from ${fullname}`,
    text: `${fullname} (${email}) has requested the following service: ${service}. Their phone number is: ${phoneNumber}.`,
  };

  try {
    const emailRes = await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("There was an error sending the email. Try again later");
    res.status(500).json({ error: "Error sending email" });
  }
};

export default sendEmailHandler;
