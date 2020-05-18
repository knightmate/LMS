const nodemailer=require('nodemailer');


 
  console.log("into nodemailer");
  
  let mail=nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ketandeshpande288@gmail.com',
      pass: 'deshmukh1993'
    }
  });
    

 

  module.exports=mail;