// 6-payment_token.test.js

const { expect } = require('chai'); // Import expect from chai
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a successful response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done(); // Indicate that the test is complete
      })
      .catch(done); // Call done with error if the promise rejects
  });

  it('should not return a response when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((response) => {
        expect(response).to.be.undefined; // Check that it resolves to undefined
        done(); // Call done to indicate the test is complete
      })
      .catch(done); // Call done with error if the promise rejects
  });
});
