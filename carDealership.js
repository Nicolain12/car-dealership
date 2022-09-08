let cars = require('./cars')

const carDealership = {
   cars: cars,
   findCar: function(patent){
    let carByPatent = cars.filter(value => value.patent == patent)
    if(carByPatent.length === 1){return carByPatent[0]}
    else{return null}
 },

 sellcar: function(patent){
    let index = cars.indexOf(this.findcar(patent))
    cars[index].soldOut = true
 },
 
 carsForSell: function(){
    let carsForSell = cars.filter(value => value.soldOut == false)
    return carsForSell
 },

newCars: function(){
    let newCarsToSell = this.carsForSell()
    let carsNew = newCarsToSell.filter(value => value.km < 100)
    return carsNew
},

salesList: function(){
      let salesList = cars.filter(value =>value.soldOut == true)
      let list = salesList.map(value => value.price)
      return list
  },
 
  salesTotal: function(){
   return (this.salesList()).reduce((acum, plus)=>acum + plus, 0)
  },
 
  puedeComprar: function(car, person){
   return ((car.price / car.installments) < person.abilityToPayInInstallments) && (car.price < person.fullPaymentCapacity)
  },
  
  carsQuePuedeComprar: function(person){
   let carsToSell = this.carsForSell()
   let carsFilteredOut = carsToSell.filter(value => ((value.price / value.installments) < person.abilityToPayInInstallments) && (value.price < person.fullPaymentCapacity))
   return carsFilteredOut
  }
  

};


