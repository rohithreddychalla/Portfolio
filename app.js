const express = require('express');
const app = express();
const path = require('path')
const nodemailer = require('nodemailer')



app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about.ejs')
})

app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})

app.post('/contact',async(req,res)=>{
    const {email,subject,message} = req.body
    const transporter = nodemailer.createTransport({
        service:'hotmail',
        auth:{
            user:'rohithreddychalla313@outlook.com',
            pass:'rohithreddy@313'
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    
    const option = {
        from:'rohithreddychalla313@outlook.com',
        to:email,
        subject:'Rohith Reddy',
        text:message,
        html:`<h1>Thank You! for contacting me. I'll get in touch with you soon.</h1>
              <h3 style="text-align:right">Truly,</h3>
              <p style="text-align:right">Rohith Reddy Challa.</p>`
    }
    
    transporter.sendMail(option,function(err,info){
        if(err){
            console.log(err)
            return;
        }
        console.log('sent: '+ info.response)    
        res.redirect('/contact')
    })
})

app.get('/works',(req,res)=>{
    res.render('works')
})


app.listen(3000,()=>{
    console.log('server started')
})