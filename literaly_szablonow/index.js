/**
 * Created by tomaszjanusz on 10/07/2016.
 */


(function( window, undefined ) {

    function es5(){
        var es5_single = 'ES5';
        var es5_multi = "to \
            jest wielolinijklowy \
            tekst w " + es5_single;
        /***
         * LUB TO!
         */
        var es5_multi = 'to' +
            'jest wielolinijklowy ' +
            'tekst w ' + es5_single;
        console.log(es5_multi); // to jest wielolinijklowy tekst w ES5
    }

    es5();


    function es6(){
        var es6_single = 'ES6';
        var es6_multi = `to
            jest wielolinijklowy 
            tekst ${es6_single}`;
        console.log(es6_multi); // to jest wielolinijklowy tekst w ES6
    }

    es6();

})(window);