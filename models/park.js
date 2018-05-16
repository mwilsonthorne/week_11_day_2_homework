const Park = function (name, ticketPrice, collectionDinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionDinosaurs = collectionDinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionDinosaurs.push(dinosaur); //use push method to add to an array.
};

Park.prototype.removeDinosaur = function() {
  this.collectionDinosaurs.pop(); //use pop method to remove from an array.
};

Park.prototype.findBySpecies = function(species) {//we are looking for species so add a parameter.
  const dinosaursFound = []; //create an empty array called dinosaursFound.
  for(dinosaur of this.collectionDinosaurs){ //for loop to loop thorugh each item of the collectionDinosaurs
    if(species === dinosaur.species){ //if the arguement passed in is equal to the species of the dinasaur that is looped to.
      dinosaursFound.push(dinosaur); //then push the dinosaur into our new array.
    };

  }
  return dinosaursFound; //return our dinosaursFound array.
}

Park.prototype.removeBySpecies = function(species) {

  for (i = 0; i < this.collectionDinosaurs.length; i++) { //use the 'long-form' for loop. so
    //starting at index = 0, we loop through while our number is less than the current array length, adding 1 to i at the end of each loop.
  let currentDinosaur = this.collectionDinosaurs[i]; //a variable created which then grabs the dinosaur at position i. i is equal to 0,1,2.
  if(species === currentDinosaur.species){ //if the arguement passed in (species) is equal to the species of the currentDinosaur that is looped to.
    this.collectionDinosaurs.splice(i, 1); //then remove at index i only that object.
    //i--;
  }

}

Park.prototype.findDinosaurAttractsMostVisitors = function() {
  this.collectionDinosaurs.sort(function(dino1, dino2){ //array sort function which passes in two parameters
    return dino2.guestsAttractedPerDay - dino1.guestsAttractedPerDay; //return the largest to the smallest in that order.
    });

    return this.collectionDinosaurs[0]; //so remove the first item in the array whcih is the largest.


}

}

module.exports = Park;
