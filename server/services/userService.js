let self = {};
const rest = require('restler');

const url = 'https://aerolab-challenge.now.sh/'
const apiToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjdjNDA3YWZhZGVhMDAwNWJjN2U3YzgiLCJpYXQiOjE1MzQ4Njk2MjZ9.5cIEpn2bJ4nLsGDgp5bwQQ15fyNfJX998WLL_U95ovc';

self.getUser = function() {
  const userPromise = new Promise((resolve, reject) => {
    rest
      .get(url + 'user/me', {
        headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': apiToken
      }
      }) 
      .on('complete', function(result) {
        resolve(result)
      }).on('fail', function(err) {
        reject(err)
      })
      });
  return userPromise;
};


self.getHistory = function() {
  const historyPromise = new Promise((resolve, reject) => {
    rest
      .get(url + 'user/history', {
        headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': apiToken
      }
      }) 
      .on('complete', function(result) {
        resolve(result)
      }).on('fail', function(err) {
        reject(err)
      })
      });
  return historyPromise;
};


module.exports = self;