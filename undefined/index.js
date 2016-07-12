/**
 * Created by tomaszjanusz on 10/07/2016.
 */

(function( window, undefined ) {

    var undefined = false;
    console.log(undefined, typeof(undefined)); // LOL, undefined jest boolean! ;)

    (function(undefined) { console.log(undefined, typeof(undefined));})();
})(window);