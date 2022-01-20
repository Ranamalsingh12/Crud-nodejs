var Userdb = require('../model/model');

//Create and save new user
exports.create = (req, res) => {
    //validation request
    if(!req.body){
        res.status(400).send({message : "Content cannot be empty"})
        return;
    }

    //new user
    const user = new Userdb({
        name : req.body.name,
        email : req.body.email,
        gender : req.body.gender,
        status : req.body.status
    })

    //save data of user in database
    user
      .save(user)
      .then(data => {
          res.send(data)
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "Some error occured while creating a operation"
          });
      });
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