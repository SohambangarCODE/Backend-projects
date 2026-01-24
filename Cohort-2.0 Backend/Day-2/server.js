const express = require("express")

const app = express(); //server created

app.get('/', (req, res)=>{
    res.send("Hello you are welcome")
})

app.get('/home', (req, res)=>{
    res.send("This is Home page")
})
app.get('/about', (req, res)=>{
    res.send("This is About page")
})
app.get('/product', (req, res)=>{
    res.send("This is Product page")
})

app.listen(3000); //server started