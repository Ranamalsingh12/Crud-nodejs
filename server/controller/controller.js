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
        //   res.send(data)
        res.redirect('/add-user')
      })
      .catch(err => {
          res.status(500).send({
              message: err.message || "Some error occured while creating a operation"
          });
      });
}

//retrive and return all user or same user
exports.find = (req, res) => {
    
    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message : "Not found user with id"})
            }
            else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving the user with id" + id
            });
        });
    }
    else{
        Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating a operation"
            });
        });
    }
    
}

//Update a new identifier user by user id
exports.update = (req, res) => {
    if(!req.body){
        return res.status(400)
        .send({message : "data to update cannot be empty"})
    }
    
    const id = req.params.id
    Userdb.findByIdAndUpdate(id,req.body,{ useFindAndModify : false})
    .then(data => {
        if(!data){
            res.status(404).send({message : `Cannot Update users with ${id}. User not found`})
        }else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Error update user information  "
        });
    });
}

//Delete a user with specified user id
exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message : `Cannot delete with id ${id}, Maybe id is wrong`})
        }
        else{
            res.send({
                message : "User Deleted Successfully!"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete User with id" + id
        });
    });
}