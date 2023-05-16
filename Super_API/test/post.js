import supertest from 'supertest';
const request = supertest("https://reqres.in/api/");
import {expect} from 'chai'
import commonMethods from "../Methods/commonMethods"

var newId;

describe('Users', () =>{

    it('Create new user and retrieve newly created ID.', async() => {
        const data = {
            email: `roopa-${(Math.floor(Math.random() * 6666))}@gmail.com`,
            first_name: "test Page",
            last_name: "JK",
            avatar: "https://reqres.in/img/faces/1-image.jpg"
        };
        const res = await request
        .post('posts')
        .send(data)
        .then((res) => {   
        console.log(res.body)
        newId = res.body.id
        expect(res.status).to.equal(201);
        console.log(res.status)
        })   
    })
    it('Validate response code and user details.', async() => {
        const res = await request
        .get(`users?id=${newId}`)
        console.log(res.body);
        const test = `users?id=${newId}` // Just to ensure if correct id is featched
        console.log(test);
    })
    it('Update user information for created user in the previous step',() => {
        const data = {
            first_name: `Roopa${(Math.floor(Math.random() * 6666))}`,
            last_name: "R R"
        };

        return request
        .put(`users/${newId}`)
    })


})