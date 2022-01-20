var Userdb = require('../model/model');

//Create and save new user
exports.create = (req, res) => {
    //validation request
    if(!req.body){
        res.status(400).send({message : "Content cannot be empty"})
        return;
    }
}

//retrive and return all user or same user
exports.find = (req, res) => {

}

//Update a new identifier user by user id
exports.update = (req, res) => {

}

//Delete a user with specified user id
exports.delete = (req, res) => {

}