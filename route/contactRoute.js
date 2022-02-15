const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please fill all the Details! " });
  }

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "developershubhamsaxena@gmail.com",
      pass: "Developershubhamsaxena@123",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "developershubhamsaxena@gmail.com",
    subject: `Received one message in Portfolio from ${data.name}`,
    html: `
      <h3>Information of the Sender: </h3>
      <ol>
<li>Sender Name: ${data.name}</li>
<li>Sender E-Mail: ${data.email}</li>
      </ol>

      <h3>Sender's Message:</h3>
      <p>${data.message}</p>
            
      `,
  };

  // smtpTransporter.sendMail(mailOptions, () => {
  //   try {
  //     if (error)
  //       return res.status(400).json({ msg: "Please fill all the Details!" });
  //     res.status(200).json({ msg: "Thank you for contacting Shubham 😊" });
  //   } catch (error) {
  //     if (error) return res.status(500).json({ msg: "Server Error! ❌" });
  //   }
  // });

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please fill all the Details!" });
      res.status(200).json({ msg: "Thank you for contacting Shubham 😊" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "Server Error! ❌" });
    }
  });
});

module.exports = router;
