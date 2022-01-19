const express = require("express")
const route = express.Router()
const services = require('../services/render')

route.get('/',services.homeRoutes)

route.get('/add-user',services.new_user)


route.get('/update-user',services.upt_user)


module.exports = route;