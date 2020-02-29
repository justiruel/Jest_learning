const http = require('http');

exports.request = function(url) {
  return new Promise(resolve => {
    // This is an example of an http request, for example to fetch
    // user data from an API.
    // This module is being mocked in __mocks__/request.js
    // kalaupun method dibawah ini diremove tetep akan jalan karena sejatinya sudah di mocking (yang diakses iyalah yang uder folder __mocks__)
    // kalau tidak di mock maka akan mengakses api yang sesungguhnya, enggak masalah hanya akan memperlambat proses testing
    http.get({path: url}, response => {
      let data = '';
      response.on('data', _data => (data += _data));
      response.on('end', () => resolve(data));
    })
  })
}