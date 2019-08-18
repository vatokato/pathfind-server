exports.getDistance = function(req, res) {
  let path = {
    x1: req.body.x1 || 0,
    y1: req.body.y1 || 0,
    z1: req.body.z1 || 0,

    x2: req.body.x2 || 0,
    y2: req.body.y2 || 0,
    z2: req.body.z2 || 0
  };

  let scale = Math.abs(req.body.scale) || 1;

  let distance = scale*Math.sqrt((Math.pow(path.x2-path.x1,2)+Math.pow(path.y2-path.y1,2)+Math.pow(path.z2-path.z1,2) ));

  res.send({distance:distance});
}
