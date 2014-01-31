var request   = require('supertest');
var express   = require('express');
var app       = express();

describe('GET /api/races', function() {

  var url = 'localhost:8080';

  it('responds with json', function(done) {

    request(url)
      .get('/api/races')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
