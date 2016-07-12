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

map.set( x, "foo" );
map.set( y, "bar" );

map.get( x );                     // "foo"
map.get( y );                     // "bar"

console.log(map);

map.delete( y );

map.clear()
