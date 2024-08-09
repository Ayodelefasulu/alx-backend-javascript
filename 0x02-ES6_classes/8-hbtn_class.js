// 8-hbtn_class.js

export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Override valueOf for casting to Number
  valueOf() {
    return this._size;
  }

  // Override toString for casting to String
  toString() {
    return this._location;
  }
}

