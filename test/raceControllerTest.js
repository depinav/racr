var request   = require('supertest');
var app       = require('../server');

describe('Race api', function() {

  var url = 'localhost:8080';

  it('should return json of all races', function(done) {

    request(app)
      .get('/api/races')
      .expect(200, done);
  });
});
