import supertest from 'supertest';
const request = supertest("https://reqres.in/api/");
import {expect} from 'chai';

class commonMethods {

    validatingId(id) {
        return request.get(`users?page=1&id=${id}`).then(async(res) => {   
            expect(res.body.data.id).to.be.eq(id)
            console.log(res.body.data.id)
        })
    }

}

export default new commonMethods();