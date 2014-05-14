var Race    = require('../models/race');

module.exports = function(app) {

  // Get all races
  app.get('/api/races', function(req, res) {

    Race.find(function(err, races) {

      sendErr(res, err);

      res.json(races);
    });
  });

  // Get single race
  app.get('/api/races/:race_id', function(req, res) {

    Race.find({ _id : req.params.race_id }, function(err, race) {

      sendErr(err);

      res.json(race);
    });
  });

  // Create a new race
  app.post('/api/races', function(req, res) {

    var bdy = req.body;

    Race.create(
    { 
      name : bdy.name,
      type : bdy.type,
      date : bdy.date,
      track: bdy.track
    },
    function(err, race) {

      sendErr(res, err);

      Race.find(function(err, races) {
        
        sendErr(res, err);

        res.json(races);
      });
    });
  });

  // Delete a race
  app.delete('/api/races/:race_id', function(req, res) {

    Race.remove({ _id : req.params.race_id }, function(err, race) {

      sendErr(res, err);

      Race.find(function(err, races) {

        sendErr(err);

        res.json(races);
      });
    });
  });

  app.get('/api/races/drop', function(req, res) {

    Race.collection.drop(function(err) {

      sendErr(err);

      console.log("Collection Dropped");
      res.send('Collection Successfully dropped.');
    });
  });

  // Home route
  app.get('/', function(req, res) {

    res.sendfile('./public/pages/main.html');
  });
}

sendErr = function(res, err) {

  if(err)
    res.send(err);
}
