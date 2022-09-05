const nodemailer = require('nodemailer');
const path = require('path');

exports.sendConfirmationEmail = function ({
  fromAdmin,
  pass,
  toUserEmail,
  toUser,
  hash,
  domain,
}) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // ..@garbalifeshop.com
      auth: {
        user: fromAdmin,
        pass: pass,
      },
    });

    const message = {
      from: fromAdmin,
      to: toUserEmail,
      // to: process.env.GOOGLE_USER,
      subject: 'Garbalife Shop Admin - Activate Account',
      html: `
        <h3>Hello ${toUser}</h3>
        <p>Welcome to Garbalife Shop. Thank you for your registration request. Just one more step...</p>
        <p>TO activate your account please follow the below link: </p>
        <p class='text-center'><a href="http://${domain}/activate/${hash}" target="_" >Activate Your Account</a></p>
        <p>Thank You</p>
        <p>Admin</p>
        <p>Garbalife Shop</p>
      `,
    };

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
};

exports.sendCongratulationsEmail = function ({
  fromAdmin,
  pass,
  toUserEmail,
  toUser,
  domain,
}) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: fromAdmin,
        pass: pass,
      },
    });

    const message = {
      from: fromAdmin,
      to: toUserEmail,
      // to: process.env.GOOGLE_USER,
      subject: 'CTQ Shop Admin - Congratulations!',
      html: `
        <h3>Hello ${toUser}</h3>
        <p>Congratulations! Your account registration and email verification is successfull.</p>
        <p>You can now Log In.</p>
        <p>To Log In Follow the Link below:</p>
        <p class='text-center'><a href="http://${domain}/login" target="_" >Log In</a></p>
        <p>Thank You and Welcome to CTQ Shop</p>
        <p>Best Wishes,</p>
        <p>Admin</p>
        <p>Garbalife Shop</p>
      `,
    };

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
};

// Password Reset

exports.transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GOOGLE_USER,
    pass: process.env.GOOGLE_PASSWORD,
  },
});

exports.getPasswordResetURL = ({ user, token, domain }) =>
  `http://${domain}/password/reset/${user.userId}/${token}`;

// exports.resetPasswordTemplate = ({fromAdmin,
//   pass,user, url}) => {
//   const from = fromAdmin;
//   // to: toUserEmail,
//   const to = user.email;
//   const subject = '🌻 AABEA Password Reset 🌻';
//   const html = `
//   <p>Hey ${user.name || user.email},</p>
//   <p>We heard that you lost your AABEA password. Sorry about that!</p>
//   <p>But don’t worry! You can use the following link to reset your password:</p>
//   <a href=${url}>${url}</a>
//   <p>If you don’t use this link within 1 hour, it will expire.</p>
//   <p>Do something outside today! </p>
//   <p>–Your friends at AABEA</p>
//   `;

//   return { from, to, subject, html };
// };

exports.sendPasswordResetEmail = function ({
  fromAdmin,
  pass,
  toUserEmail,
  user,
  url,
}) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: fromAdmin,
        pass: pass,
      },
    });

    const message = {
      from: fromAdmin,
      to: toUserEmail,
      // to: process.env.GOOGLE_USER,
      subject: '🌻 CTQ Shop Password Reset 🌻',
      html: `
      <p>Hey ${user.name || user.email},</p>
      <p>We heard that you lost your CTQ shop password. Sorry about that!</p>
      <p>But don’t worry! You can use the following link to reset your password:</p>
      <a href=${url}>${url}</a>
      <p>If you don’t use this link within 1 hour, it will expire.</p>
      <p>Do something outside today! </p>
      <p>–Your friends at CTQ Shop</p>
      <p> 🌻 Happy Shopping 🌻</p>
      `,
    };

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
};

// ////////////////////////Event Registration Confirmation email/////////////////////

exports.sendRegistrationConfirmationEmail = function ({
  fromAdmin,
  pass,
  event,
  guestRegister,
  paymentSummary,
  programs,
  hotels,
  totalAmount,
  subEventFee,
  hotelRent,
  contributionAmount,
}) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: fromAdmin,
        pass: pass,
      },
    });

    let program = '';
    let hotel = '';
    let totalRegistrationfee = '';
    let subEvent = '';
    let hotelFee = '';
    let contribution = '';
    if (programs && programs.length !== 0) {
      program = programs.reduce(function (a, b) {
        return (
          a +
          '<h4>Sub-event Name : ' +
          b.programName +
          '</h4><p>Group Name : ' +
          b.groupName +
          '</p><p>Participant Name : ' +
          b.participantName +
          '</p><p>Age : ' +
          b.age +
          '</p><p>Grade : ' +
          b.grade +
          '</p><p>School : ' +
          b.schoolName +
          '</p><p>Fee : $' +
          b.fee +
          '</p><hr/>'
        );
      }, '');
    }

    if (hotels && hotels.length !== 0) {
      hotel = hotels.reduce(function (a, b) {
        return (
          a +
          '<h4>Hotel Name : ' +
          b.hotelName +
          '</h4><p>Room Type : ' +
          b.roomType +
          '</p><p>Room Description : ' +
          b.roomDescription +
          '</p><p>Accomodation : ' +
          b.accomodation +
          'person/s</p><p>Rent : $' +
          b.rent +
          '</p><p>Number of booking : ' +
          b.qty +
          ' Room/s</p><hr/>'
        );
      }, '');
    }
    if (totalAmount) {
      totalRegistrationfee = '<p>Registration Fee : $' + totalAmount + '</p>';
    }
    if (subEventFee) {
      subEvent = '<p>Sub-event Fee : $' + subEventFee + '</p>';
    }
    if (hotelRent) {
      hotelFee = '<p>Hotel Rent : $' + hotelRent + '</p>';
    }
    if (contributionAmount) {
      contribution = '<p>Extra Contribution : $' + contributionAmount + '</p>';
    }

    const message = {
      from: fromAdmin,
      to: guestRegister.email,
      // to: process.env.GOOGLE_USER,
      subject: `AABEA Team - Event-${event.eventId} Registration Confirmation! `,
      html: `
        <h3>Hello ${guestRegister.firstName}</h3>
        <p>Congratulations! Your event registration successfull.</p>
        <p>Please find below your registration details:</p>
        <br/>
        <hr/>
        <hr/>
        <h4>Event</h4>
        <p>Event Name: ${event.eventName}</p>
        <p>Description: ${event.eventDescription}</p>
        <p>Date: </p>
        <p>Start Date: ${new Date(event.eventDate[0].value)}</p>
        <p>End Date: ${new Date(event.eventDate[1].value)}</p>
        <p>Address: ${event.eventAddress}</p>
        <p>Adult Fee: ${event.adultFee}</p>
        <p>Minor Fee: ${event.minorFee}</p>
        <br/>
        <hr/>
        <hr/>
        <h4>Registration Summary</h4>
        <p>Event registration Id : ${guestRegister.registrationId}</p>
        <p>Reference Member Id : ${guestRegister.memberId}</p>
        <p>Name : ${guestRegister.mInit} ${guestRegister.firstName} ${
        guestRegister.lastName
      }</p>
        <p>Email : ${guestRegister.email}</p>
        <p>Phone : ${guestRegister.phone}</p>
        <p>Number of adults : ${guestRegister.numberOfAdults}</p>
        <p>Number of minors : ${guestRegister.numberOfMinors}</p>
        <br/>
        <hr/>
        <hr/>
         ${program}
        <hr/>
        ${hotel}        
        <hr/>
        
        
        <h4>Payment Summary</h4>
        
        ${totalRegistrationfee}
        ${subEvent}
        ${hotelFee}
        ${contribution}
        <hr/>
        <p>Amount Paid : $${paymentSummary.amount}</p>
        <p>Payer Id : ${paymentSummary.payerId}</p>
        <p>Payment ID : ${paymentSummary.paymentId}</p>
        <p>Payment Status : ${paymentSummary.paymentStatus}</p>
        <p>Payment Time : ${paymentSummary.paymentTime}</p>

        <br/>
        <br/>
        <hr/>
        <p>Best Wishes,</p>
        <p>AABEA TEAM</p>
      `,
    };

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
};

// ////////////////////////Payment Confirmation email/////////////////////

exports.sendPaymentConfirmationEmail = function ({
  fromAdmin,
  pass,
  member,
  payment,
}) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: fromAdmin,
        pass: pass,
      },
    });

    const message = {
      from: fromAdmin,
      to: member.primaryEmail,
      // to: process.env.GOOGLE_USER,
      subject: `AABEA Team - Payment Confirmation! `,
      html: `
        <h3>Hello ${member.firstName}</h3>
        <p>Congratulations! Your payment is successfull.</p>
        <p>Please find below your payment details:</p>
        <br/>
        <hr/>
        <h4>Payment Type : ${payment.paymentType}</h4>
        <p>Member Id: ${member.memberId}</p>
        <p>Name: ${member.mInit} ${member.firstName} ${member.lastName}</p>
        <p>Amount Paid : ${payment.amount}</p>
        <p>Payer Id : ${payment.payerId}</p>
        <p>Payment ID : ${payment.paymentId}</p>
        <p>Payment Status : ${payment.paymentStatus}</p>
        <p>Payment Time : ${payment.paymentTime}</p>

        <br/>
       
        <p>Best Wishes,</p>
        <p>AABEA TEAM</p>
      `,
    };

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
};

// ////////////////////////Donation Confirmation email/////////////////////

exports.sendDonationConfirmationEmail = function ({
  fromAdmin,
  pass,
  member,
  donate,
}) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: fromAdmin,
        pass: pass,
      },
    });

    const message = {
      from: fromAdmin,
      to: member.primaryEmail,
      // to: process.env.GOOGLE_USER,
      subject: `AABEA Team - Donation Confirmation! `,
      html: `
        <h3>Hello ${member.firstName}</h3>
        <p>Congratulations! Your donation is successfull.</p>
        <p>Please find below your donation details:</p>
        <br/>
        <hr/>
        <h4>Payment Type : ${donate.donationType}</h4>
        <p>Member Id: ${member.memberId}</p>
        <p>Name: ${member.mInit} ${member.firstName} ${member.lastName}</p>
        <p>Amount Paid : ${donate.amount}</p>
        <p>Payer Id : ${donate.payerId}</p>
        <p>Payment ID : ${donate.paymentId}</p>
        <p>Payment Status : ${donate.paymentStatus}</p>
        <p>Payment Time : ${donate.paymentTime}</p>

        <br/>
       
        <p>Best Wishes,</p>
        <p>AABEA TEAM</p>
      `,
    };

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
};

// ////////////////////////GUEST Donation Confirmation email/////////////////////

exports.sendGuestDonationConfirmationEmail = function ({
  fromAdmin,
  pass,
  donate,
}) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: fromAdmin,
        pass: pass,
      },
    });

    const message = {
      from: fromAdmin,
      to: donate.email,
      // to: process.env.GOOGLE_USER,
      subject: `AABEA Team - Donation Confirmation! `,
      html: `
        <h3>Hello ${donate.firstName}</h3>
        <p>Congratulations! Your donation is successfull.</p>
        <p>Please find below your donation details:</p>
        <br/>
        <hr/>
        <h4>Payment Type : ${donate.donationType}</h4>
        <p>Name: ${donate.mInit} ${donate.firstName} ${donate.lastName}</p>
        <p>Email : ${donate.email}</p>
        <p>Amount Paid : ${donate.amount}</p>
        <p>Payer Id : ${donate.payerId}</p>
        <p>Payment ID : ${donate.paymentId}</p>
        <p>Payment Status : ${donate.paymentStatus}</p>
        <p>Payment Time : ${donate.paymentTime}</p>

        <br/>
       
        <p>Best Wishes,</p>
        <p>AABEA TEAM</p>
      `,
    };

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
};

// ////////////////////////Send email/////////////////////

exports.sendEmail = function ({
  fromAdmin,
  pass,
  emailReceipent,
  emailTitle,
  emailBody,
  attachments,
  domain,
}) {
  return new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: fromAdmin,
        pass: pass,
      },
    });

    const files = attachments.map((attachment) => {
      // console.log(path.join(`the file path is : ${attachment}`));
      // console.log(path.join(path.resolve(), `${attachment}`));
      // console.log(path.join(path.resolve().split('/backend')[0], `${attachment}`));
      // console.log(`filename: ${attachment.split('/image-')[1]}`);

      return {
        filename: `${attachment.split('/image-')[1]}`,
        path: `/home/aabea/apps/aabea-app${attachment}`,
      };
    });
    // path: `/home/aabea/apps/aabea-app${attachment}`,

    const message = {
      from: fromAdmin,
      to: emailReceipent,
      // to: process.env.GOOGLE_USER,
      subject: `${emailTitle}`,
      html: `
        ${emailBody}
      `,
      attachments: files,
      // {
      //   path: path.join(path.resolve(), `${attachments}`),
      // },
      // {
      //   path: path.join(path.resolve(), `${attachments}`),
      // },

      // [
      //   {
      //     filename: 'text1.txt',
      //     content: 'hello world!',
      //   },
      // ],
    };

    transporter.sendMail(message, function (err, info) {
      if (err) {
        rej(err);
      } else {
        res(info);
      }
    });
  });
};

////////reference for bcc
// const mailData = {
//   from: 'xyz@xyz.com',
//   to: 'recipient@xyz.com',
//   bcc: 'bcc@xyz.com',
//   subject: 'Sample Mail',
//   html: text,
//   envelope: {
//       from: 'xyz@xyz.com',
//       to: 'recipient@xyz.com'
//   }
// }
