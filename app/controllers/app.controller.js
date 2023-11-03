const db = require("../models");
const User = db.user;
const Batch = db.batch;
const Internship = db.internship;

exports.getBatches = (req, res) => {
  Batch.find({}).exec((err, batches) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    else {
      res.status(200).send(batches);
      return;
    }
  });
};

exports.getInternships = (req, res) => {
    Internship.findOne({batch: req.params.year}).exec((err, internships) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      else {
        res.status(200).send(internships.internships);
        return;
      }
    });
  };