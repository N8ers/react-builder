class HouseWithPool {}

class HouseWithGarden {}

class HouseWithPoolAndGarden {}

class HouseFactory {
  createHouse(hasPool, hasGarden) {
    if (hasPool && hasGarden) {
      return new HouseWithPoolAndGarden()
    } else if (hasPool) {
      return new HouseWithPool()
    } else if (hasGarden) {
      return new HouseWithGarden()
    }
  }
}

const houseFactor = new HouseFactory()
const houseWithPool = houseFactor.createHouse(false, true)
