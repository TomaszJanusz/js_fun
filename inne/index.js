/**
 * Created by tomaszjanusz on 10/07/2016.
 */

 // Rozszerzone literały obiektów

function es5_getUser(id, name, email) {
   return { id: id, name: name, email: email }
}

function es6_getUser(id, name, email) {
   return { id, name, email }
}

// Mapy

var map = new Map();

var x = { id: 1 },
    y = { id: 2 };
    z = 'test';

map.set( x, "test1" );
map.set( y, "test2" );
map.set( z, "test3" );


map.get( x ); // "test1"
map.get( y ); // "test2"
map.get( z ); // "test3"
map.get("test") // "test3"


console.log(map);
map.delete( y );
console.log(map);


map.clear()
