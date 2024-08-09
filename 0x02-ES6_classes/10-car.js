// Create a symbol to store the clone method
const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the Car instance
  [cloneSymbol]() {
    return new Car(this._brand, this._motor, this._color);
  }

  // Public method to access the clone functionality
  cloneCar() {
    return this[cloneSymbol]();
  }
}
