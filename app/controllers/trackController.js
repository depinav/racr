var Track   = require('../models/track');

module.exports = function(app) {

    // Get all tracks
    app.get('/api/tracks', function(req, res) {

        Track.find(function(err, tracks) {

            sendErr(res, err);

            res.json(tracks);
        });
    });

    // Get single track
    app.get('/api/tracks/:track_id', function(req, res) {

        Track.find({ _id : req.params.track_id }, function(err, track) {

            sendErr(err);

            res.json(track);
        });
    });

    // Create a new track
    app.post('/api/tracks', function(req, res) {

        var bdy = req.body;

        Track.create(
            {
                name : bdy.name,
                type : bdy.type,
                length : bdy.length
            },
            function(err, track) {

                sendErr(res, err);

                Track.find(function(err, tracks) {

                    sendErr(res, err);

                    res.json(tracks);
                });
            });
    });

    // Delete a track
    app.delete('/api/tracks/:track_id', function(req, res) {

        Track.remove({ _id : req.params.track_id }, function(err, track) {

            sendErr(res, err);

            Track.find(function(err, tracks) {

                sendErr(err);

                res.json(tracks);
            });
        });
    });

    app.get('/api/tracks/drop', function(req, res) {

        Track.collection.drop(function(err) {

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
