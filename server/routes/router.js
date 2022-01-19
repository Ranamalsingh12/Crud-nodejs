const express = require("express")
const route = express.Router()

route.get('/',(req,res) => {
    res.render('index');
})

route.get('/add-user',(req,res) => {
    res.render('new_user');
})


route.get('/update-user',(req,res) => {
    res.render('upt_user');
})


module.exports = route;