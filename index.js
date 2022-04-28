const express = require('express')
const app = express()
const port = 3000
const parcel = require('body-parser')
const mongo = require('mongoose')

//connecting mongodb
mongo.connect("mongodb+srv://Symbiote:cluster0@cluster0.b0xwi.mongodb.net/RIP?retryWrites=true&w=majority")
  .then(() => console.log("DB Connected"))
  .catch((err) => {
    console.log(err)
    console.log("DB Connection Failed");
  });

//defining schema for question and answer key value pair
var listingSchema=mongo.Schema({
q:{type:String,required:true},
ans:{type:String}
});

//defining model name for questions answers insertion in database
var mod = mongo.model('cluster1',listingSchema);

//defining the authorization and features this app can use
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, PUT");
  next();
});

app.use(parcel.urlencoded({ extended: false }));
app.use(parcel.json());

//mongo connection check
app.get('/listings',(req,res) => {
  mod.find().then((x) => {res.status(200).json(x) }).catch((err) => {
    console.log(err)
    console.log("DB Connection Failed");
  });
})
  
//trial
// practice API's
app.get('/list', (req, res) => {
  res.status(200).json({ message: "Hello world" });

})

app.get('/list1', (req, res) => {
  res.status(200).json({ name:"Rohan",address:"SP"});

})

app.post('/create', (req, res) => {
  res.status(200).json({ message: "Hello world" });

})


app.post('/sum', (req, res) => {
  console.log(req.body)
  const num= Number(req.body.num1) + Number(req.body.num2);
  res.status(200).json({ message: num });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/data', (req, res) => {
  var sample= new mod({name:'abc',summary:'xyz'})
  var dummy = [{ name: 'Do you prefer cities or countryside?', summary: 'Countryside' }, { name: 'Do you prefer mountains or beach?', summary: 'Beach' }, { name: 'Do you prefer Hot or Cold weather?', summary: 'Cold' }]
  mod.create(dummy).then((x) => {res.status(200).json(x) }).catch((err) => {
    console.log(err)
    console.log("DB Connection Failed");
  });
})

//trial


//Code for selecting your destination
app.post('/locations', (req, res) => {
  var location="";
  console.log(req.body);
  mod.create(req.body).then((x) => {
    if(req.body[0].ans=="countryside"){
      if(req.body[1].ans=="mountains" && req.body[2].ans=="hot"){
        location="khuri";
      }
      if(req.body[1].ans=="mountains" && req.body[2].ans=="cold"){
        location="lehLadakh";
      }
      if(req.body[1].ans=="sea" && req.body[2].ans=="hot"){
        location="andamanAndNicobar";
      }
      if(req.body[1].ans=="sea" && req.body[2].ans=="cold"){
        location="lakshadweep";
      }
    }
    if(req.body[0].ans=="city"){
      if(req.body[1].ans=="mountains" && req.body[2].ans=="hot"){
        location="wayanad";
      }
      if(req.body[1].ans=="mountains" && req.body[2].ans=="cold"){
        location="sikkim";        
      }
      if(req.body[1].ans=="sea" && req.body[2].ans=="hot"){
        location="goa";        
      }
      if(req.body[1].ans=="sea" && req.body[2].ans=="cold"){
        location="pondicherry";        
      }
    }
    res.status(200).json(location) 
  }).catch((err) => {
    console.log(err)
    console.log("DB Connection Failed");
  });


})
//creating login schema with user and pass key value pair
var loginSchema=mongo.Schema({
  user:{type:String,required:true},
  pass:{type:String,required:true}
  });

//defining model name for login data insertion in database
var mod2 = mongo.model('userlogin',loginSchema);

//login API
app.post('/login',(req,res) => {
  console.log(req.body)
  mod2.create(req.body).then((x) => {res.status(200).json({message:"User Logged In Successfully!"}) }).catch((err) => {
    console.log(err)
    console.log("DB Connection Failed");
  });
})       