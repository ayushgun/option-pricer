import {black_scholes_call, black_scholes_put, binomial_call, binomial_put} from "./api";


let bsData = {
    spot: 200.0,
    strike: 205.0,
    vol: 0.20,
    time: 1.0,
    rate: 0.03,
    div: 0.01,
};

let binData = {
    spot: 200.0,
    strike: 205.0,
    vol: 0.20,
    time: 1.0,
    rate: 0.03,
    div: 0.01,
    steps: 300,
};


var x = black_scholes_call(bsData);
x.then(res => res.json()).then(r => {console.log(r.price)});

// console.log(black_scholes_put(bsData));

// console.log(binomial_call(binData));

// console.log(binomial_put(binData));
