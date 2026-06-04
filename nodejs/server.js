// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end("hello from nodejs server")

// })
// server.listen(3000,()=>{
//     console.log("server is running at http://localhost:3000")
// })


// const os = require('os');
// console.log("OS platform",os.platform())

// const math = require('./math');

// console.log(math(2,3));


// const moment = require('moment');
// console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

// const fs = require('fs');
// fs.unlinkSync("students.txt")
// fs.appendFileSync("students.txt","\\nthis is the  newly appended text")
// const output = fs.readFileSync('students.txt','utf8');
// console.log(output)



const nodemailer = require('nodemailer');
// Setup transporter
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'evea64299@gmail.com',
    pass: 'fkfz ugjw omsx dtrx'
  }
});

// Email options
let mailOptions = {
  from: 'evea64299@gmail.com',
  to: 'paidivamsi43@gmail.com',
  subject: 'Node.js Email Example',
  text: 'Hello! This is a test email from Node.js'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error:', error);
  }
  console.log('Email sent:', info.response);
});