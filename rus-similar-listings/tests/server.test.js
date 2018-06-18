const request = require('supertest');
const app = require('./../server/app.js');

describe('Test the /rooms/:id/ path', () => {
  test('It should respond to the GET request with status code 200', (done) => {
    request(app).get('/rooms/1034/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('It should respond to the GET request with static files', (done) => {
    request(app).get('/rooms/1034').then((response) => {
      expect(response.type).toBe('text/html');
      done();
    });
  });
});

describe('Test the /api/similar-listings/:id/ path', () => {
  test('It should respond to the GET request with status code 200', (done) => {
    request(app).get('/api/similar-listings/1079/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('It should respond to the GET request with a JSON file', (done) => {
    request(app).get('/api/similar-listings/1079').then((response) => {
      expect(response.type).toBe('application/json');
      done();
    });
  });

  test('It should respond to the GET request for a listing with 12 similar listings', (done) => {
    request(app).get('/api/similar-listings/1079').then((response) => {
      expect(response.body.length).toBe(12);
      done();
    });
  });
});
