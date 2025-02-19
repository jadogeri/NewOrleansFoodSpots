import { LocalStorage } from "node-localstorage";
import * as db from "../MongoMemoryServer"
import { registerUserTest } from "./registerUserTest";
import { loginUserTest } from "./loginUserTest";
import { currentUserTest } from "./currentUserTest";
import { logoutUserTest } from "./logoutUserTest";
import { forgotUserTest } from "./forgotUserTest";
import { resetUserTest } from "./resetUserTest";
import {deactivateUserTest } from "./deactivateUserTest";

import {  test } from '@jest/globals';
const request = require('supertest');
import { fileReader } from "../fileReader";
const {BASE_URL}  = require("../constants")

describe('testing user and contact api requests', () => {

    
  beforeAll(async () => {
    
    await db.connect()
  });

  // beforeEach(async () => {
    
  //   await db.connect()
  // });
//   afterEach(async () => {
//     await db.clearDatabase()
//   });
  afterAll(async () => {
    await db.clearDatabase()
    await db.closeDatabase()
  });

    global.localStorage = new LocalStorage('./tests/storage');

    test('registers user Tesing in isolation', async () => {

      console.log(__dirname)
      let path  : string = __dirname + "/../__mocks__/user.json"
      let initUser = fileReader(path)
      console.log("init user ========================",initUser)
      localStorage.setItem("user",initUser);      
  
      let mock = localStorage.getItem("user");
      let mockObj = JSON.parse(mock as string)
      const res = await request(BASE_URL).post('/api/users/register').send(mockObj)    
  
     console.log("data retrieved from test == ",JSON.stringify(res.body))
     if(res.statusCode ===201){
      let updatedCreds = {...mockObj,... res.body,password : mockObj.password}   
      localStorage.setItem("user",JSON.stringify(updatedCreds, null, 2))
  
     }
  
      expect(res.statusCode).toEqual(201);
   
    })
  
    // registerUserTest();

    loginUserTest();
    currentUserTest()
    forgotUserTest()
    resetUserTest()
    logoutUserTest()
    deactivateUserTest()    

  
});






