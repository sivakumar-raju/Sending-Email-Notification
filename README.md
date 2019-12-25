# Sending-Email-Notification
Notification platform for sending Email to client and receive Confirmation after sending the user

--> Create an account in send grid --> go to settings --> Api keys --> create API key -->Apikey name & restricted Access --> Make mailsend --> set limit to high --> create --> you will receive apikey --> copy

--> open nodejs -->npm install @sendgrid/mail

const sgMail = require('@sendgrid/mail') sgMail.setApiKey('paste your copied api key');
