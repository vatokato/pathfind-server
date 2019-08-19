exports.getDistance = function(req, res) {
  let name1 = req.body.name1 || '';
  let name2 = req.body.name2 || '';
  let path = {
    x1: parseFloat(req.body.x1) || 0,
    y1: parseFloat(req.body.y1) || 0,
    z1: parseFloat(req.body.z1) || 0,

    name2: req.body.name2 || '',
    x2: parseFloat(req.body.x2) || 0,
    y2: parseFloat(req.body.y2) || 0,
    z2: parseFloat(req.body.z2) || 0
  };

  let scale = Math.abs(req.body.scale) || 1;

  let distance = scale*Math.sqrt((Math.pow(path.x2-path.x1,2)+Math.pow(path.y2-path.y1,2)+Math.pow(path.z2-path.z1,2) ));

  res.send({distance:distance, name1, name2});

}
