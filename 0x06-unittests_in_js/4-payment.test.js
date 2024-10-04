// 4-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with "SUM", 100, and 20, and log the correct message', () => {
    // Stub Utils.calculateNumber to always return 10
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log to check its output
    const logSpy = sinon.spy(console, 'log');

    // Call the function with test arguments
    sendPaymentRequestToApi(100, 20);

    // Check if Utils.calculateNumber was called with the correct arguments
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    // Check if console.log was called with the correct message
    expect(logSpy.calledOnce).to.be.true;
    expect(logSpy.calledWith('The total is: 10')).to.be.true;

    // Restore the stub and spy after the test
    stub.restore();
    logSpy.restore();
  });
});
