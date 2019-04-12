/**
 * Classe que modela um Carro
 */
class Car {
    constructor(brand, plate, color, deposit, fuelType) {
        this.brand = brand
        this.plate = plate
        this.color = color
        this.deposit = deposit
        this.fuelType = fuelType
    }

    /**
     * Updates the car with a given color
     * @param {string} newColor the new color
     */
    updateColor(newColor) {
        this.color = newColor
    }

    /**
     * Refuels the car with a given number of liters
     * @param {number} liters the number of liters to refuel
     */
    refuel(liters) {
        this.deposit += liters
    }

    /**
     * Updates the deposit with the number of liters consumed based on given kms
     * @param {number} nkms the number of kilometers to drive 
     */
    drive(nkms) {
        const temp = nkms * 5 /100
        if(temp > this.deposit) {
            console.log("You cannot drive for that destination!")
        } else {
            this.deposit -= nkms * 5 /100
            console.log("Good trip!")
        }        
    }



}