let r = require('./src/user/request')
exports.getUserName = function(userID) {
  return r.request('/users/' + userID).then(user => user.name)
}