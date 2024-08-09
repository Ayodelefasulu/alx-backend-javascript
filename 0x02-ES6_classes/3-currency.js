// 3-currency.js

export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and Setter for _code
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter and Setter for _name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

