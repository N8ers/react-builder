class HouseBuilder {
  constructor({ hasPool, hasGarden } = {}) {
    this.hasPool = hasPool
    this.hasGarden = hasGarden
  }
}

const house1 = new HouseBuilder({ hasGarden: true })
console.log("house 1 ", house1)
