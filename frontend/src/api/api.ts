import fetch from "node-fetch";

// Parameter Objects
export interface BlackScholes {
  spot: number;
  strike: number;
  vol: number;
  time: number;
  rate: number;
  div: number;
}

export interface Binomial {
  spot: number;
  strike: number;
  vol: number;
  time: number;
  rate: number;
  div: number;
  steps: number;
}

export type Response = {
  price: number;
};

// Declare base API URL
export const URL = "http://localhost:8000";

// Check if API response is valid
export function isValidResponse(object: any): object is Response {
  return "price" in object;
}

// Get call and put price data from API
export function black_scholes_call(data: BlackScholes) {
  let call_url =
    `${URL}/call/black_scholes?spot=${data.spot}&strike=${data.strike}` +
    `&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}`;
  return fetch(call_url);
}

export function black_scholes_put(data: BlackScholes) {
  let call_url =
    `${URL}/put/black_scholes?spot=${data.spot}&strike=${data.strike}` +
    `&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}`;
    return fetch(call_url);
}

export function binomial_call(data: Binomial) {
  let call_url =
    `${URL}/call/binomial?spot=${data.spot}&strike=${data.strike}` +
    `&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}&steps=${data.steps}`;
    return fetch(call_url);
}

export function binomial_put(data: Binomial) {
  let call_url =
    `${URL}/put/binomial?spot=${data.spot}&strike=${data.strike}` +
    `&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}&steps=${data.steps}`;
    return fetch(call_url);
}