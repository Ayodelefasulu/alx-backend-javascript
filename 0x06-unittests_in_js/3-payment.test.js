// 3-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with "SUM", 100, and 20', () => {
    // Spy on Utils.calculateNumber
    const spy = sinon.spy(Utils, 'calculateNumber');

    // Call the function with test arguments
    sendPaymentRequestToApi(100, 20);

    // Check if Utils.calculateNumber was called with the correct arguments
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('SUM', 100, 20)).to.be.true;

    // Restore the spy after the test
    spy.restore();
  });
});
