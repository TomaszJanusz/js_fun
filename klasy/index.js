/**
 * Created by tomaszjanusz on 10/07/2016.
 */


/***
 * Dziedziczenie
 */


class Gra {
    constructor(...args) {
        console.log(`Gramy w: ${this.constructor.name}`, args);
    }
}

class ZagrajmyWKlasy extends Gra {
   constructor(param1, param2) {
       super(arguments);
       this._param1 = param1;
       this._param2 = param2;
   }
   getAll(){
       return [this._param1, this._param2]
   }

   getAllBetter() {
       return [this.param1, this.param2];
   }

   get param1() {
       return this._param1.toUpperCase();
   }

   set param1(value) {
       this._param1 = value;
   }
}

a = new ZagrajmyWKlasy('Parametr 1', 'Parametr 2');

console.log(a.getAll()); // ["Parametr 1", "Parametr 2"]
console.log(a.param1); // PARAMETR 1
console.log(a.getAllBetter()); // ["PARAMETR 1", undefined] // param2 będzie undefinded, ponieważ nie ma zadeklarowanego gettera.
