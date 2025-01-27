import { User } from '../../../src/models/User';

describe('testing user model and functionality', () => {
    test('username setters and getters', async () => {

      const user = new User();
      user.setUsername("John Doe"); 

      expect(user.getUsername()).toEqual("John Doe")

  })
    

})



