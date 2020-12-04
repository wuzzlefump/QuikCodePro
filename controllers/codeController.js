
const db = require("../models");
const { findOneAndUpdate } = require("../models/codes");
// Defining methods for the codeController
module.exports = {
  findAll: function(req, res) {
    db.Codes
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Codes
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //need to research find method and keyword...
//   find: function(req, res) {
//     db.Code
//       .findById(req.params.keywords)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  create: function(req, res) {
    console.log(req.body)
    db.Codes
      .create(req.body, (error,result)=>{
        if(error){
          res.json(error)
        }else{
          console.log(result)
          res.json(result)
        }
      })
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Codes
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  remove: function(req, res) {
    console.log(req.params)
    db.Codes
      .findByIdAndDelete({ _id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  like: function(req, res) {
    db.Codes.findByIdAndUpdate({_id:req.params.id}, {
      $push: { votes:{vote:req.body.votes, id:req.body.userId}  }
    }, {
      new: true
    }, (err, result) => {
      if (err) {
        return res.status(422).json({ error: err })
      }
      else{
        res.json(result)
      }
    }
    )
  }
};
