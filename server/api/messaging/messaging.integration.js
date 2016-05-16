'use strict';

var app = require('../..');
import request from 'supertest';

var newMessaging;

describe('Messaging API:', function() {

  describe('GET /messages', function() {
    var messagings;

    beforeEach(function(done) {
      request(app)
        .get('/messages')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          messagings = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      messagings.should.be.instanceOf(Array);
    });

  });

  describe('POST /messages', function() {
    beforeEach(function(done) {
      request(app)
        .post('/messages')
        .send({
          name: 'New Messaging',
          info: 'This is the brand new messaging!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newMessaging = res.body;
          done();
        });
    });

    it('should respond with the newly created messaging', function() {
      newMessaging.name.should.equal('New Messaging');
      newMessaging.info.should.equal('This is the brand new messaging!!!');
    });

  });

  describe('GET /messages/:id', function() {
    var messaging;

    beforeEach(function(done) {
      request(app)
        .get('/messages/' + newMessaging._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          messaging = res.body;
          done();
        });
    });

    afterEach(function() {
      messaging = {};
    });

    it('should respond with the requested messaging', function() {
      messaging.name.should.equal('New Messaging');
      messaging.info.should.equal('This is the brand new messaging!!!');
    });

  });

  describe('PUT /messages/:id', function() {
    var updatedMessaging;

    beforeEach(function(done) {
      request(app)
        .put('/messages/' + newMessaging._id)
        .send({
          name: 'Updated Messaging',
          info: 'This is the updated messaging!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedMessaging = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedMessaging = {};
    });

    it('should respond with the updated messaging', function() {
      updatedMessaging.name.should.equal('Updated Messaging');
      updatedMessaging.info.should.equal('This is the updated messaging!!!');
    });

  });

  describe('DELETE /messages/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/messages/' + newMessaging._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when messaging does not exist', function(done) {
      request(app)
        .delete('/messages/' + newMessaging._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
