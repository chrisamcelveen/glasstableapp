'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var messagingCtrlStub = {
  index: 'messagingCtrl.index',
  show: 'messagingCtrl.show',
  create: 'messagingCtrl.create',
  update: 'messagingCtrl.update',
  destroy: 'messagingCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var messagingIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './messaging.controller': messagingCtrlStub
});

describe('Messaging API Router:', function() {

  it('should return an express router instance', function() {
    messagingIndex.should.equal(routerStub);
  });

  describe('GET /messages', function() {

    it('should route to messaging.controller.index', function() {
      routerStub.get
        .withArgs('/', 'messagingCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /messages/:id', function() {

    it('should route to messaging.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'messagingCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /messages', function() {

    it('should route to messaging.controller.create', function() {
      routerStub.post
        .withArgs('/', 'messagingCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /messages/:id', function() {

    it('should route to messaging.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'messagingCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /messages/:id', function() {

    it('should route to messaging.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'messagingCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /messages/:id', function() {

    it('should route to messaging.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'messagingCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
