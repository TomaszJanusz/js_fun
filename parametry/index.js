/**
 * Created by tomaszjanusz on 10/07/2016.
 */


/***
 * ES5
 */

function es5(width, height, background) {
    height = height || 50; // || jako "lub"
    width = width || 50;
    background = background || '#FF0';
    console.log(width, height, background);
}

/***
 * ES6
 */

function es6(width = 50, height = 50, background = '#FF0') {
    console.log(width, height, background);
}


/***
 Desktruktory ES6
 */

function es6_destruct() {
    let [z,...w] = 'abc';
    console.log(z,w); // z = 'a'; y = ['b', 'c']
}

function es6_destruct2(...args) {
    let [x = 0, y=0] = args;
    console.log(x,y);
}

function es6_destruct3(options) {
    let {param1, param2, param3 } = options;
    console.log(param1, param2, param3);
}

// es6_destruct3({lol: 1, lol: 2, param1: 3})

/***
 Nazwane parametry
 */

function es6_named({from=0, to=100}) {
    console.log(from, to);
}
//es6_named({ to: 5, from: 5}); - BANG!
//es6_named({ to: 5 }); - BANG!
