jest.mock('../src/user/request')
let r = require('../src/user/request')
//const user = require('../user')

// The assertion for a promise must be returned.
it('works with promises', () => {
  //expect.assertions(1);
  return r.request('/users/4').then(user => expect(user.name).toEqual('Mark'))
  //return user.getUserName(4).then(data => expect(data).toEqual('Mark'));
})