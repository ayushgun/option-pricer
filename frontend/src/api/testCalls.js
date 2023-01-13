"use strict";
exports.__esModule = true;
var api_1 = require("./api");
var bsData = {
    spot: 200.0,
    strike: 205.0,
    vol: 0.20,
    time: 1.0,
    rate: 0.03,
    div: 0.01
};
var binData = {
    spot: 200.0,
    strike: 205.0,
    vol: 0.20,
    time: 1.0,
    rate: 0.03,
    div: 0.01,
    steps: 300
};
var x = (0, api_1.black_scholes_call)(bsData);
x.then(function (res) { return res.json(); }).then(function (r) { console.log(r.price); });
// console.log(black_scholes_put(bsData));
// console.log(binomial_call(binData));
// console.log(binomial_put(binData));
