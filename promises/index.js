/**
 * Created by tomaszjanusz on 10/07/2016.
 */

let url = 'http://example.com';
let callback = function() {
  console.log('stary callback');
}

/***
 * ES5
 */

$.ajax(url, callback);

/***
 * ES6
 */

let promise = $.ajax(url);
promise.done(callback);

  //jQuery
  $.ajax(url).done(callback);



$.ajax(url, {
  success: function(data) {
     $('#main').html($(data).find('#main *'));
     $('#notification-bar').text('lulz');
  },
  error: function() {
     $('#notification-bar').text('ojej error');
  },
  statusCode: {
    400: function() {
      alert('400 lol!')
    },
    401: function() {
      alert('401 lol!')
    }
  }
});


$.ajax(url).done((data)=> {
  $('#main').html($(data).find('#main *'));
  $('#notification-bar').text('lulz');
})
.fail((data) =>{
  $('#notification-bar').text('ojej error');
  switch(data.errorCode){
    case 400:
      alert('400 lol!');
      break;
    case 401:
      alert('401 lol!');
      break;
  }
})

/***
  ES6 Promises
*/


var es6_promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000)
})

es6_promise.then( () => {
  setTimeout(() => {
    console.log ('- Wait a second!');
  }, 1000)
}).then( () => {
  console.log ('- The End!');
}).then( () => {
  setTimeout(() => {
    console.log ('- Nope! :)');
  }, 1200)
})

// - The End!
// - Wait a second!
// - Nope! :)



/***
  GitHub Fetch
  */
fetch('/users')
  .then(checkStatus)
  .then(parseJSON)
  .then(function(data) {
    console.log('request succeeded with JSON response', data)
  }).catch(function(error) {
    console.log('request failed', error)
  })


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}
