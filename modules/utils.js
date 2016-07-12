// utils.js

function sum(m,n) {
    return m+n;
}

function getRandom({ min = 0, max = 100000}) {
    return Math.floor(Math.random() * (max - min)) + min;
}


export { sum as sum, getRandom as random }