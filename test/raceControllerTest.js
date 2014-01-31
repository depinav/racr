var request   = require('supertest');
var express   = require('express');
var mongoose  = require('mongoose');
var database    = require('../config/database');

var app       = express();

describe('Race api methods', function() {

  var url = 'localhost:8080';

  before(function(done) {
    mongoose.connect(database.test);
  });

  it('should return json of all races', function(done) {

    request(url)
      .get('/api/races')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
