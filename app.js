const express = require("express");
const path = require("path");
const { error } = require("console");
const mongoose = require('mongoose');
require("dotenv").config();


const COSTUMER = require("./models/costumer.js")
const app = express()
const PORT = process.env.PORT || 8000;



app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// await mongoose.connect(process.env.MONGO_URI);

// main()
//     .then(() => {
//         console.log("connection successfully")
//     })
//     .catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://127.0.0.1:27017/costumerdata');

// }
// mongodb connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));


// routes

app.post("/msg", async (req, res) => {
    const { Cname , Cemail , Cmsg } = req.body;
    let newmsg = new COSTUMER({
        name:Cname,
        email:Cemail,
        msg:Cmsg
    });

    await newmsg.save().then((res) => {
        console.log(res)
    })
        .catch(err => {
            console.log(err)
        })
    res.render("Home",{alert:"Send Successfully"})
})

app.get("/fruits", (req, res) => {
    res.render("fruits.ejs", { alert: null })
})

app.get("/grains", (req, res) => {
    res.render("grains.ejs", { alert: null })
})

app.get("/vegetables", (req, res) => {
    res.render("vegetables.ejs", { alert: null })
})

app.get("/spices", (req, res) => {
    res.render("spices.ejs", { alert: null })
})

app.get("/products", (req, res) => {
    res.render("products.ejs", { alert: null })
})

app.get("/aboutus",(req, res) =>{
    res.render("aboutus.ejs", { alert: null })
})
app.get("/home",(req ,res) => {
    res.redirect("/")
})
app.get("/",(req , res) => {
    res.render("Home.ejs",{alert: null})
})

app.listen(PORT,()=>{
    console.log("server Connected")
})
