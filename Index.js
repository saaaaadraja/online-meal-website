const express = require('express');
const ejs =require('ejs');
const mongoose=require('mongoose');
const morgan=require('morgan');
const Review1=require('./Model/review');
const { result } = require('lodash');
const { find } = require('./Model/review');
const { concatSeries } = require('async');
const Order=require('./Model/order');
const app=new express();
const PORT=process.env.PORT;
const dbuic='mongodb+srv://raja_saad:raja123@node1.qd9xb.mongodb.net/node1?retryWrites=true&w=majority';
mongoose.connect(dbuic,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{
    app.listen(4000 || PORT);
})
.catch((err)=>{
    console.log(err);
})
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(morgan('tiny'));
//get data

// app.get('/Review',(req,res)=>{
//     const review=new Review1({
//         title:'raja saad',
//         content:'iywqtyu jhsdu oiui  98 e'
//     })
//     review.save()
//     .then((result)=>{
//         res.send(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })
app.post('/Review',(req,res)=>{
   const review = new Review1(req.body);
   review.save()
   .then((result)=>{
       res.redirect('/Review');
   })
   .catch((err)=>{
       console.log(err);
   })
})
//routing
app.get('/',(req,res)=>{
   res.render('Index');
})
app.get('/Services',(req,res)=>{
   
    res.render('Services');
})
app.get('/Clients',(req,res)=>{
   
    res.render('Clients');
})
app.get('/Review',(req,res)=>{
    Review1.find()
    .then((result)=>{
      res.render('Review',{data:result});
    })
    .catch((err)=>{
        console.log(err);
    })
})
app.get('/details/:id',(req,res)=>{
    const id=req.params.id;
    Review1.findById(id)
    .then((result)=>{
        res.render('details',{data:result});
    })
    .catch((err)=>{
        console.log(err);
    })
})
app.delete('/details/:id',(req,res)=>{
    const id=req.params.id;
    Review1.findByIdAndDelete(id)
    .then((result)=>{
      res.json({redirect:'/Review'});
    })
    .catch((err)=>{
        console.log(err);
    })
})
app.get('/order',(req,res)=>{
    res.render('order');
})


//order schema
app.post('/order',(req,res)=>{
 const order=new Order(req.body);
 order.save()
 .then((result)=>{
     res.redirect('order');
 })
 .catch((err)=>{
     console.log(err);
 })
})
//details delete

app.use((req,res)=>{
    res.render('404');
})