//const { expect } = require('chai');
//const calculateNumber = require('./2-calcul_chai.js');
import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when type is SUM and inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when type is SUBTRACT and inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when type is DIVIDE and inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.01);
    });

    it('should return "Error" when type is DIVIDE and b rounds to 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
