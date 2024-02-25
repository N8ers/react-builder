class House {
  constructor(hasPool, hasGarden, isOneFloor) {
    this.hasPool = hasPool
    this.hasGarden = hasGarden
    this.isOneFloor = isOneFloor
  }
}

const simpleRanch = new House(false, false, true)
console.log("Simple Ranch: ", simpleRanch)
