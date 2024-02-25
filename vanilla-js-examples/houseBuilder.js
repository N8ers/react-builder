class HouseBuilder {
  buildPool() {
    this.pool = true
    return this
  }

  buildGarden() {
    this.garden = true
    return this
  }
}

const homeWithPool = new HouseBuilder()
homeWithPool.buildPool()
console.log(homeWithPool)

const home2 = new HouseBuilder().buildPool().buildGarden()
console.log("home 2 ", home2)
