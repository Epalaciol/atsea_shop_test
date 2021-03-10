import { post, get, put } from 'superagent';
import { StatusCodes } from 'http-status-codes';
import * as chai from 'chai';

const expect = chai.expect;

const url_base = 'http://127.0.0.1:8080'
var id_customer_created; 
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
describe('Create a new customer', () => {

  
  it('Create new user using POST service', async () => {
    const response = await post(`${url_base}/api/customer/`)
      .set('User-Agent', 'agent')
      .send(new_user);

    expect(response.status).to.equal(StatusCodes.CREATED);
    expect(response.body).to.have.property('customerId');
    id_customer_created = response.body.customerId;
  });

  it('Try to create a same user once time again', async () =>{
    await post(`${url_base}/api/customer/`)
      .set('User-Agent', 'agent')
      .send(new_user)
      .catch(error =>{
        expect(error.status).to.equal(StatusCodes.CONFLICT);
      });

  });
  describe('Create an invalid customer', () => {
    const new_user = {
      "customerId": "teste1",
      "name": "Usuario de prueba",
      "address": " Medellin/antioqua",
      "email": "test2@test.com",
      "phone": "000 000 000",
      "username": "test2",
      "password": "contrasena",
      "enabled": "true",
      "role": "USER"
    };
    it('Error return ', async () => {
      await post(`${url_base}/api/customer/`)
      .set('User-Agent', 'agent')
      .send(new_user)
      .catch(error =>{
        expect(error.status).to.equal(StatusCodes.BAD_REQUEST);
      });
    });
  });
});

describe ('Get Customer ', () => {
  it('Request customer by id', async () => {
    const response = await get(`${url_base}/api/customer/${id_customer_created}`)
      .set('User-Agent', 'agent')
      .set('Content-Type', 'application/json');

    expect(response.status).to.equal(StatusCodes.OK);
    expect(response.body.customerIf).to.equal(id_customer_created);
    expect(response.body.username).to.equal(new_user.username);
  });
  it('Request customer by name', async () => {
    const response = await get(`${url_base}/api/customer/name=${new_user.name}`)
      .set('User-Agent', 'agent')
      .set('Content-Type', 'application/json');

    expect(response.status).to.equal(StatusCodes.OK);
    expect(response.body.customerIf).to.equal(id_customer_created);
    expect(response.body.phone).to.equal(new_user.phone);

  });
  it('Request customer by username', async () => {
    const response = await get(`${url_base}/api/customer/username=${new_user.username}`)
      .set('User-Agent', 'agent')
      .set('Content-Type', 'application/json');

    expect(response.status).to.equal(StatusCodes.OK);
    expect(response.body.customerIf).to.equal(id_customer_created);
    expect(response.body.email).to.equal(new_user.email);

  });

});
describe('Update Customer', () => {
  const updated_user = {
    "customerId": 5,
    "name": "Modificado",
    "address": " Medellin/antioqua",
    "email": "testUpdated@test.com",
    "phone": "000 000 000",
    "username": "test3",
    "password": "contrasena1234",
    "enabled": "true",
    "role": "USER"
  };
  it( 'Update an existing user', async ()=> {
    const response = await put(`${url_base}/api/customer/${id_customer_created}` )
      .set('User-Agent', 'agent')
      .send(updated_user);

    expect(response.status).to.equal(StatusCodes.OK);
    expect(response.body.name).to.equal(updated_user.name);
    expect(response.body.email).to.equal(updated_user.email);
  });
  it('Update an unexisting user', async ()=> {
    await put(`${url_base}/api/customer/${id_customer_created*1000}` )
      .set('User-Agent', 'agent')
      .send(updated_user)
      .catch(error =>{
        expect(error.status).to.equal(StatusCodes.NOT_FOUND);
      });

  });
});