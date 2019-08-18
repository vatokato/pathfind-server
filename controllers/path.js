const Path = require('../models/path');

exports.getDistance = function(req, res) {
  console.log(req, res);

  let path = {
    x1: req.body.x1 || 0,
    y1: req.body.y1 || 0,
    z1: req.body.z1 || 0,

    x2: req.body.x2 || 0,
    y2: req.body.y2 || 0,
    z2: req.body.z2 || 0
  };

  Path.create(path, function(err, result) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    }
    res.send(path);
  })
}