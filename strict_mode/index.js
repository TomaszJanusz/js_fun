/**
 * Created by tomaszjanusz on 10/07/2016.
 */

/***
 * Variables
 *
 *
 *
 */

var set_var = function () {
  "use strict";
  zmienna = '1'; // ReferenceError: zmienna is not defined
  // ...
};

var set_var_nostrict = function () {
  zmienna = '1'; // It's ok broo!
  // ...
};


var set_var_ok = function () {
  "use strict";
  var zmienna;
  zmienna = '1';
  // ...
};

/***
 * Delete object prototypes
 *
 *
 *
 */

var delete_objProto = function() {
  "use strict";
  delete Object.prototype; // TypeError
};

var delete_objProto_nostrict = function() {
  delete Object.prototype; // LOL OK
};

/***
 * Unique parameters
 *
 *
 *
 */

var unique_params = function() {
    "use strict";
    return o = { a: 1, a: 2 }; // Syntax Error
};

var unique_params_nostrict = function() {
    return o = { a: 1, a: 2 }; // { a: 2 }
};