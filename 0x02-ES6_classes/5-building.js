// 5-building.js

export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  // Getter for _sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method placeholder
  evacuationWarningMessage() {
    throw new Error('Method evacuationWarningMessage must be implemented');
  }
}

