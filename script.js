const express = require('express');
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Up and running DEZ 5000");
})

app.get("/about", (req, res) => {
    res.send("About Up and running");
})

app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}...`)
})