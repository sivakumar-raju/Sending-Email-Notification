const express=require('express');
const bodyparser=require('body-parser');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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');

const app=express();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
     res.sendFile(__dirname +"/index.html")
})

app.post('/',(req,res)=>{
    const msg={
        from: req.body.from,
        to:req.body.to,
        subject:req.body.subject,
        html:`<h1>${req.body.text}</h1>`
    }

    sgMail.send(msg, function(error){
        if (error) {
          res.send('<h1 style="text-align: center;color: red;">Email Not Sent</h1>')
        console.log(error);
        } else {
              res.send('<h1 style="text-align: center;color: green;">Email sent Sucessfully</h1>')
        console.log('Email sent: sucessfully');
        confiramation()
    
        }
    });

    confiramation = () =>{
    const messagesentuser={
            from: req.body.to,
            to:req.body.from,
            subject:"Email sent",
            html:"<h1>Email sent to the user</h1>"
        }
    sgMail.send(messagesentuser, function(error){
        if (error) {
          res.send('Email Not sent')
        console.log(error);
        } else {
              res.send('<h1 style="text-align: center;color: green;">Email sent Sucessfully</h1>')
           console.log('Email sent the user');
        }
    });
}
})


app.listen(4000,()=>{
    console.log('Application is running at port 4000');
})





// SG.E7977V2ISIqYmDklfAsFIA.hJLe8iIkOEhLvMyBAGIEMw2Z5-8FLLJ-7qLlXmtwm9M