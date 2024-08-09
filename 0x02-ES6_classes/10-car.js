const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Private method to clone the Car instance
  [cloneSymbol]() {
    // Ensure we create an instance of the same class as this instance
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Public method to access the clone functionality
  cloneCar() {
    return this[cloneSymbol]();
  }
}

