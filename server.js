// 1.) Explore what is nodemailer, how to use it , and create an api to send emails.
// install nodemailer with this command npm  install nodemailer
// install express and require here
const express = require("express")
const app = express()
PORT = process.env.PORT || 8080 
// installl email validator  with this command npm i email-validator
const nodemailer = require("nodemailer");
// meddleware
app.use(express.static("public"))
// change code text to json formate
app.use(express.json())
// get api call for sending msg by api call
app.get("/", function (req, res) {
    res.status(200).sendFile(__dirname + "../public/index.html")
})
app.post("/", function (req, res) {
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: req.body.fmail,
            pass: req.body.fpass
        }
    });
    const mailOptions = {
        from: req.body.fmail,
        to: req.body.secmail,
        subject: req.body.sub,
        text: req.body.mtext
    }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) { 
            console.log(error);
        }
        else {
            console.log("mail hass benn send ", info.response);
            res.send("success")
        }
    })
})
// // server activation
app.listen(process.env.PORT, function () {
    console.log(`server activeted now port number ${PORT}.........`)
})
// ==================================================================================================================
// //  simple send mail by nodemailer using 
// const nodemailer = require("nodemailer");
// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     requireTLS: true,
//     auth: {
//         user: "deepakchawda96969@gmail.com",
//         pass: "..................."
//     }
// });
// const mailOptions = {
//     from: "deepakchawda96969@gmail.com",
//     to: "deepakchawda96969@gmail.com",
//     subject: "............",
//     text: "this is first mail by server send  you i just try to do different it "
// }
// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     }
//     else {
//         console.log("mail has been send ", info.response);
//         res.status(200).send("mail has been send")
//     }
// })

