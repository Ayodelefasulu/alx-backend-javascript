// 8-api/api.test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api'); // Ensure to export your app from api.js for testing

chai.use(chaiHttp);
const { expect } = chai;

describe('Index page', () => {
  it('Correct status code?', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('Correct result?', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  it('Other?', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        // You can add more assertions if needed
        expect(res).to.be.a('object');
        done();
      });
  });
});
