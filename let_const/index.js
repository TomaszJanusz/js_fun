/**
 * Created by tomaszjanusz on 10/07/2016.
 */

/**
 * Var
 * Zmienna {test} jest widoczna dla kodu we wszystkich blokach.
 * Wszystkie zmiany wartości są widoczne dla każdego z bloków.
 */

(function( window, undefined ) {

   function StareVary () {

           var test = 1;
           console.log(test);  // 1

           if (true) {
               var test = 2;
               console.log(test);  // 2
           }

           if (!false) {
               var test = 3;
               console.log(test);  // 2
           }

           console.log(test);  // 3
   }

   StareVary();

})(window);


/**
 * Let
 * {test} jest widoczny dla każdego z bloków.
 * Wszystkie zmiany wartości w blokach będą widoczne tylko w ramach danego bloku.
 */
(function( window, undefined ) {

    function NoweLety() {

        let test = 1;
        console.log(test);  // 1

        if (true) {
            console.log(test); // 1
        }

        if (!false) {
            let test = 3;
            console.log(test); // 3
        }

        console.log(test); // 1

    }

    NoweLety();

})(window);


(function( window, undefined ) {

    function ConstyWyborne() {

        const test = 1;
        console.log(test);  // 1
        test = 2; // TypeError: Assignment to constant variable.
        const test = 2; // SyntaxError: Identifier 'test' has already been declared

        if (true) {
            const test=3; // OK!
        }
    }

    ConstyWyborne();

})(window);