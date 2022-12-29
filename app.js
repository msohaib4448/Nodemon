const express = require('express');
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("Up and running main website");
})

app.get("/about", (req, res) => {
    res.send("About Up and running");
})

app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}...`)
})