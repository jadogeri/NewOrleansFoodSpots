import { User } from '../../../src/models/User';

describe('testing user model and functionality', () => {
  test('username setters and getters', async () => {

    const user = new User();
    user.setUsername("John Doe"); 

    expect(user.getUsername()).toEqual("John Doe")

  });    

  test('email setters and getters', async () => {

    const user = new User();
    user.setEmail("JohnDoe@gmail.com"); 

    expect(user.getEmail()).toEqual("JohnDoe@gmail.com")

  }); 

});



