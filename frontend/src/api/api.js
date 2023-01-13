"use strict";
exports.__esModule = true;
exports.binomial_put = exports.binomial_call = exports.black_scholes_put = exports.black_scholes_call = exports.isValidResponse = exports.URL = void 0;
var node_fetch_1 = require("node-fetch");
// Declare base API URL
exports.URL = "http://localhost:8000";
// Check if API response is valid
function isValidResponse(object) {
    return "price" in object;
}
exports.isValidResponse = isValidResponse;
// Get call and put price data from API
function black_scholes_call(data) {
    var call_url = "".concat(exports.URL, "/call/black_scholes?spot=").concat(data.spot, "&strike=").concat(data.strike) +
        "&vol=".concat(data.vol, "&time=").concat(data.time, "&rate=").concat(data.rate, "&div=").concat(data.div);
    try {
        (0, node_fetch_1["default"])(call_url)
            .then(function (res) { return res.json(); })
            .then(function (json) {
            if (isValidResponse(json)) {
                console.log(json.price);
                return json.price;
            }
        });
        return 0;
    }
    catch (e) {
        throw e;
    }
}
exports.black_scholes_call = black_scholes_call;
function black_scholes_put(data) {
    var call_url = "".concat(exports.URL, "/put/black_scholes?spot=").concat(data.spot, "&strike=").concat(data.strike) +
        "&vol=".concat(data.vol, "&time=").concat(data.time, "&rate=").concat(data.rate, "&div=").concat(data.div);
    try {
        (0, node_fetch_1["default"])(call_url)
            .then(function (res) { return res.json(); })
            .then(function (json) {
            if (isValidResponse(json)) {
                console.log(json.price);
                return json.price;
            }
        });
        return 0;
    }
    catch (e) {
        throw e;
    }
}
exports.black_scholes_put = black_scholes_put;
function binomial_call(data) {
    var call_url = "".concat(exports.URL, "/call/binomial?spot=").concat(data.spot, "&strike=").concat(data.strike) +
        "&vol=".concat(data.vol, "&time=").concat(data.time, "&rate=").concat(data.rate, "&div=").concat(data.div, "&steps=").concat(data.steps);
    try {
        (0, node_fetch_1["default"])(call_url)
            .then(function (res) { return res.json(); })
            .then(function (json) {
            if (isValidResponse(json)) {
                console.log(json.price);
                return json.price;
            }
        });
        return 0;
    }
    catch (e) {
        throw e;
    }
}
exports.binomial_call = binomial_call;
function binomial_put(data) {
    var call_url = "".concat(exports.URL, "/put/binomial?spot=").concat(data.spot, "&strike=").concat(data.strike) +
        "&vol=".concat(data.vol, "&time=").concat(data.time, "&rate=").concat(data.rate, "&steps=").concat(data.steps);
    try {
        (0, node_fetch_1["default"])(call_url)
            .then(function (res) { return res.json(); })
            .then(function (json) {
            if (isValidResponse(json)) {
                console.log(json.price);
                return json.price;
            }
        });
        return 0;
    }
    catch (e) {
        throw e;
    }
}
exports.binomial_put = binomial_put;
