const Park = function (name, ticketPrice, collectionDinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionDinosaurs = collectionDinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionDinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function() {
  this.collectionDinosaurs.pop();
};

Park.prototype.findBySpecies = function(species) {
  const dinosaursFound = [];
  for(dinosaur of this.collectionDinosaurs){
    if(species === dinosaur.species){
      dinosaursFound.push(dinosaur);
    };

  }
  return dinosaursFound;
}

Park.prototype.removeBySpecies = function(species) {

  for (i = 0; i < this.collectionDinosaurs.length; i++) {
  currentDinosaur = this.collectionDinosaurs[i];
  if(species === currentDinosaur.species){
    this.collectionDinosaurs.splice(i, 1);
  }

}

Park.prototype.findDinosaurAttractsMostVisitors = function() {
  this.collectionDinosaurs.sort(function(dino1, dino2){
    return dino2.guestsAttractedPerDay - dino1.guestsAttractedPerDay;
    });

    return this.collectionDinosaurs[0];


}

}

module.exports = Park;
