var request   = require('supertest');
var app       = require('../server');

describe('Race api', function() {

  var url = 'localhost:8080';

  it('should return json of all races', function(done) {

    request(app)
      .get('/api/races')
      .expect(200, done);
  });

  it('should return a single race', function(done) {

    request(app)
      .get('/api/races/52ebdd082f168100004b83a6')
      .expect(200, done);
  });
});
