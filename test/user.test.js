const ConnectionDB=require('../config/db');
const User=require('../models/UserModel');
const server  = require('../server');
require('dotenv').config();

let token="";
describe('User API', () => {

  // 1. Get All the Users
  test('Fetch All Users', async () => {
    const response = await fetch(`http://localhost:5000/api/worko/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });

    const data = await response.json();
    console.log("data",data)
    expect(data.code).toBe(200);
    expect(data.message).toBe('Users Fetched Successfully');
}, 10000);

// 2. Get User By Id
test('Fetch User By Id', async () => {
  const response = await fetch(`http://localhost:5000/api/worko/user/667c5469d7e18c5e15f365e2`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
  });

  const data = await response.json();
  console.log("data",data)
  expect(data.code).toBe(200);
  expect(data.message).toBe('User Id By Information Fetched Successfully');
}, 10000);
  

    
    // 3. Register User
    let ramdomEmail = Math.random().toString(36).substring(7) + '@example.com';
    test('Create new User', async () => {
      const response = await fetch(`http://localhost:5000/api/worko/user`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "email": ramdomEmail,
            "name": "John Doe",
            "age": 25,
            "city": "New York",
            "zipCode": "10001"
          })
      });
  
      const data = await response.json();
      console.log("data",data)
      expect(data.code).toBe(200);
      expect(data.message).toBe('User created successfully');
  }, 10000);

   // 4. Update User
   test('User Updation By Put Method', async () => {
    const response = await fetch(`http://localhost:5000/api/worko/user/667c5469d7e18c5e15f365e2`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "name": "John Doe"
        })
    });

    const data = await response.json();
    console.log("data",data)
    expect(data.code).toBe(200);
    expect(data.message).toBe('User updated successfully');
}, 10000);


// 5. Update User
test('User Updation By Patch Method', async () => {
  const response = await fetch(`http://localhost:5000/api/worko/user/667c5469d7e18c5e15f365e2`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: "John Doe",
        city: "New York 2.0",
      })
  });

  const data = await response.json();
  console.log("data",data)
  expect(data.code).toBe(200);
  expect(data.message).toBe('User updated successfully');
}, 10000);
  

// 5. Update User
test('Soft Delete By User Id', async () => {
  const response = await fetch(`http://localhost:5000/api/worko/user/667c5469d7e18c5e15f365e2`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      }
  });
  
  const data = await response.json();
  console.log("data",data)
  expect(data.code).toBe(200);
  expect(data.message).toBe('User soft deleted successfully');
}, 10000);


  

  // // 3. Create User
  // describe('POST /api/worko/user', () => {
  //     it('it should POST a new user', (done) => {
  //         let user = {
  //             email: "johndoe1@example.com",
  //             name: "John Doe",
  //             age: 25,
  //             city: "New York",
  //             zipCode: "10001"
  //         };
  //         chai.request(server)
  //             .post('/api/worko/user')
  //             .set('Authorization', `Bearer ${token}`)
  //             .set('Content-Type', 'application/json')
  //             .send(user)
  //             .end((err, res) => {
  //                 res.should.have.status(201);
  //                 res.body.should.be.a('object');
  //                 res.body.should.have.property('email');
  //                 res.body.should.have.property('name');
  //                 done();
  //             });
  //     });
  // });
});