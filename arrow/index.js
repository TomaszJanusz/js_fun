/**
 * Created by tomaszjanusz on 10/07/2016.
 */

let numbers = [123, 456, 789, 1234, 5678, 9012];

var es5 = numbers.filter(function(n) {
   return n % 2
});

console.log(es5);

let es6 = numbers.filter( n => n % 2);
console.log(es6);


/***
 Funkcja arrow nie potrzebuje return ;)
 */

let es6_noreturn = () => 2; // BANG!
console.log(`No return: ${es6_noreturn()}`);

// This

function czas() {
    this.now = Date.now();

    setInterval(()=> {
        this.now+=1000;
        console.log(this.now)
    }, 1000)
}

// Arrow i obiekty

czas = () => { now: Date.now() } // undefined
czas = () => ({ now: Date.now() }) // Object {now: 1468268296849}

// Funkcje anonimowe

( () => window.location.href.toString() )(); // .../arrow/index.html
