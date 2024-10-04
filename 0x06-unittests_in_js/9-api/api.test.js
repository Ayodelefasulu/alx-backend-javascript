// 9-api/api.test.js
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('./api');

describe('API Tests', () => {
  describe('GET /', () => {
    it('should return status 200 and welcome message', async () => {
      const response = await request(app).get('/');
      expect(response.status).to.equal(200);
      expect(response.text).to.equal('Welcome to the payment system');
    });
  });

  describe('GET /cart/:id', () => {
    it('should return status 200 for a valid cart ID (numeric)', async () => {
      const response = await request(app).get('/cart/12');
      expect(response.status).to.equal(200);
      expect(response.text).to.equal('Payment methods for cart 12');
    });

    it('should return status 404 for an invalid cart ID (not a number)', async () => {
      const response = await request(app).get('/cart/hello');
      expect(response.status).to.equal(404);
      expect(response.text).to.equal('Not Found');
    });

    it('should return status 404 for a cart ID that is missing', async () => {
      const response = await request(app).get('/cart/');
      expect(response.status).to.equal(404);
      expect(response.text).to.equal('Not Found');
    });
    
    it('should return status 404 for a negative cart ID', async () => {
      const response = await request(app).get('/cart/-1');
      expect(response.status).to.equal(404);
      expect(response.text).to.equal('Not Found');
    });
    
    it('should return status 404 for a float cart ID', async () => {
      const response = await request(app).get('/cart/12.5');
      expect(response.status).to.equal(404);
      expect(response.text).to.equal('Not Found');
    });
  });
});
