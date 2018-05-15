const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let collectionDinosaurs;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 100);
    dinosaur2 = new Dinosaur('stegosauraus', 'herbavore', 70);
    dinosaur3 = new Dinosaur('diplodocus', 'herbavore', 50);
    dinosaur4 = new Dinosaur('rapter', 'carnivore', 90);
    collectionDinosaurs = [dinosaur1, dinosaur2, dinosaur3];
    park = new Park('Jurassic Park', 50, collectionDinosaurs);

  })

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);

  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.collectionDinosaurs.length;
    assert.strictEqual(actual, 3);

  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur4);
    const actual = park.collectionDinosaurs.length;
    assert.strictEqual(actual, 4);

  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur();
    const actual = park.collectionDinosaurs.length;
    assert.strictEqual(actual, 2);

  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = park.findBySpecies('t-rex').length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.removeBySpecies('t-rex');
    const actual = park.collectionDinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.findDinosaurAttractsMostVisitors();
    assert.deepStrictEqual(actual, dinosaur1);


  });

});
