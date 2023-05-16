import supertest from 'supertest';
const request = supertest("https://reqres.in/api/");
import {expect} from 'chai'
import commonMethods from "../Methods/commonMethods"

var idValue;

describe('Users', () =>{

    it.only('Filter out list of First name and email of all the Users obtained in GET call.', async() => {

        const res = await request.get('users?page=1')
        console.log(res.body.data.map(user=>user.email));
        console.log(res.body.data.map(user=>user.first_name));
    })

    it('Filter out user details by giving ID', async() => {

        idValue = await commonMethods.validatingId(6)
    })

    it('Validate response code and user details', async() => {

        const res = await request.get(`users?page=1&id=6`)  
        expect(res.status).to.equal(200);
        console.log(res.status)
        expect(res.body.data.id).to.equal(6)
        console.log(res.body.data.id)
        expect(res.body.data.email).to.equal("tracey.ramos@reqres.in")
        console.log(res.body.data.email)
        expect(res.body.data.first_name).to.equal("Tracey")
        expect(res.body.data.last_name).to.equal("Ramos")
        expect(res.body.data.avatar).to.not.be.empty;
    })

    

})