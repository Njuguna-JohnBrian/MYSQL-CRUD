require("dotenv").config();

const express = require('express')
const app = express();

app.get("/api", (req, res) => {
    res.json({
        success:1,
        message:"Hey Champ"
    })
});

app.listen(process.env.APP_PORT, () => {
    console.log("Server Running on: ", process.env.APP_PORT)
})