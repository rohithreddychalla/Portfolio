const mongoose = require('mongoose')
const msg = require('./msg')

mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true,useCreateIndex: true,useUnifiedTopology: true})
    .then(()=>{
        console.log('db connected')
    })
    .catch(()=>{
        console.log('error')
    })

const seedDB = async()=>{
        const msgs = new msg({email:'r@gmail.com', subject:'hello', message:'hello'})
        // await msgs.save()
    }
    

seedDB().then(()=>{
    mongoose.connection.close()
        })
    