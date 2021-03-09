import { post } from 'superagent';
import { StatusCodes } from 'http-status-codes';
import * as chai from 'chai';

const expect = chai.expect;

const url_base = 'http://127.0.0.1:8080'

describe('Create a new customer', () => {

  const new_user = {
    "customerId": 5,
    "name": "Usuario de prueba",
    "address": " Medellin/antioqua",
    "email": "test@test.com",
    "phone": "000 000 000",
    "username": "test3",
    "password": "contrasena",
    "enabled": "true",
    "role": "USER"
  };
  it('Consume POST Service from API', async () => {
    const response = await post(`${url_base}/api/customer/`)
      .set('User-Agent', 'agent')
      .send(new_user);

    expect(response.status).to.equal(StatusCodes.CREATED);
    expect(response.body.customerId).to.equal(new_user.customerId);
  });
});