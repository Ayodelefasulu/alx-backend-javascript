// 5-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let logSpy;

  beforeEach(() => {
    // Spy on console.log before each test
    logSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    logSpy.restore();
  });

  it('should log the total as 120 when called with 100 and 20', () => {
    // Stub Utils.calculateNumber to return 120
    const stub = sinon.stub(Utils, 'calculateNumber').returns(120);

    sendPaymentRequestToApi(100, 20);

    // Verify the output and that console.log was called correctly
    expect(logSpy.calledOnce).to.be.true;
    expect(logSpy.calledWith('The total is: 120')).to.be.true;

    // Restore the stub after the test
    stub.restore();
  });

  it('should log the total as 20 when called with 10 and 10', () => {
    // Stub Utils.calculateNumber to return 20
    const stub = sinon.stub(Utils, 'calculateNumber').returns(20);

    sendPaymentRequestToApi(10, 10);

    // Verify the output and that console.log was called correctly
    expect(logSpy.calledOnce).to.be.true;
    expect(logSpy.calledWith('The total is: 20')).to.be.true;

    // Restore the stub after the test
    stub.restore();
  });
});
