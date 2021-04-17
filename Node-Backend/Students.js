const express = require('express');
const app = express();
require("./dbConnection");
const Student = require("./module/StudentSchema.js");
const bc = require('bcryptjs');
const port = 3002;
const multer = require("multer");
const path = "./uploads";
const cors = require("cors");

app.use(express.json());
const Salt = 8;

console.log(cors);
app.use(cors('*'));
app.use(express.static("./uploads/"));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path);
    },
    filename: (req, file, cb) => {
        cb(null, "_" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb("Type file is not access", false);
    }
};

const upload = multer({
    storage,
    fileFilter
});


app.post('/reg',upload.single('profile_pic'),(req, res, next) => {
    try{
        bc.hash(req.body.password, Salt, (err, hash) => {
            var creatUser = new Student({
                username: req.body.username,
                age: req.body.age,
                city: req.body.city,
                password: hash,
                email: req.body.email,
                profile_pic: req.file.filename
            });
            creatUser.save((err, data) => {
                if (err) {
                    err.statusCode = 422;
                    next(err);
                }
                else {
                    res.status(200).send(data);
                }
            });
        });    
    }catch{
        console.log(e);
    }
});

app.get('/allUsers', (req, res) => {
    Student.find({}, (err, user) => {
        res.send(user);
    })
})

app.get('/mydata',(req,res)=>{
    Student.findOne({username:req.query.username},(err,user)=>{
        res.send(`This is ${user.username} my age is ${user.age} my email is ${user.email}`)
    })
})


app.post('/Update/:UserEdit',upload.single('profile_pic'),(req,res)=>{
    Student.updateOne({username:req.params.UserEdit},{username:req.body.username,age:req.body.age,city:req.body.city,email:req.body.email,password:req.body.password,profile_pic:req.file.filename},(err,ress)=>{res.send("Done")})
})

app.post('/delete/:Userdelete',(req,res)=>{
    Student.deleteOne({username:req.params.Userdelete},(err,ress)=>{res.send("Done")})
})


app.listen(port);