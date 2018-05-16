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
    assert.strictEqual(actual, 'Jurassic Park'); //strictEqual(), which uses
    //JavaScripts strict equality operator (===). As a general rule of thumb
    //we should use that instead of equal() so that we can be certain that
    //our tests are passing or failing for the right reasons. If we were comparing
    //1 and '1' the test would pass using assertEqual
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
    park.addDinosaur(dinosaur4); //add another dinosaur into the array
    const actual = park.collectionDinosaurs.length; //get the length of the array
    assert.strictEqual(actual, 4);

  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.removeDinosaur(); //remove dinosaur from the array. No need to put in a variable, we are not intrested in a particular dinosaur.
    const actual = park.collectionDinosaurs.length; //get the length of the array
    assert.strictEqual(actual, 2);

  });

  it('should be able to find all dinosaurs of a particular species', function () {
    const actual = park.findBySpecies('t-rex').length; //get the length of the array to show the number of t-rex
    assert.strictEqual(actual, 1); //confirms only 1 t-rex in the array
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.removeBySpecies('t-rex'); //remove all the t-rex dinosaurs
    const actual = park.collectionDinosaurs.length; //get the length of the array after removal
    assert.strictEqual(actual, 2); //confirms 2 objects left in the array after and all t-rexs removed
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const actual = park.findDinosaurAttractsMostVisitors(); //using the array sort function which sorts the array first and then returns the max.
    assert.deepStrictEqual(actual, dinosaur1); //dinosaur1 has the most visitors. deepStrictEqual looks at the values contained within the object and use those to determine if the objects are equal


  });

});
