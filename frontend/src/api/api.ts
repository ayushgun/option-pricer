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
export async function black_scholes_call(data: BlackScholes): Promise<number> {
  let call_url =
    `${URL}/call/black_scholes?spot=${data.spot}&strike=${data.strike}` +
    `&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}`;
  try {
    await fetch(call_url)
      .then((res) => res.json())
      .then((json) => {
        if (isValidResponse(json)) {
          console.log('hi', json.price);
          return json.price;
        }
      });

    return -1;
  } catch (e) {
    throw e;
  }
}

export async function black_scholes_put(data: BlackScholes): Promise<number> {
  let call_url =
    `${URL}/put/black_scholes?spot=${data.spot}&strike=${data.strike}` +
    `&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}`;
  try {
    await fetch(call_url)
      .then((res) => res.json())
      .then((json) => {
        if (isValidResponse(json)) {
          console.log('hi', json.price);
          return json.price;
        }
      });

    return -1;
  } catch (e) {
    throw e;
  }
}

export async function binomial_call(data: Binomial): Promise<number> {
  let call_url =
    `${URL}/call/binomial?spot=${data.spot}&strike=${data.strike}` +
    `&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}&steps=${data.steps}`;
  try {
    await fetch(call_url)
      .then((res) => res.json())
      .then((json) => {
        if (isValidResponse(json)) {
          console.log('hi', json.price);
          return json.price;
        }
      });

    return -1;
  } catch (e) {
    throw e;
  }
}

export async function binomial_put(data: Binomial): Promise<number> {
  let call_url =
    `${URL}/put/binomial?spot=${data.spot}&strike=${data.strike}` +
    `&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}&steps=${data.steps}`;
  try {
    await fetch(call_url)
      .then((res) => res.json())
      .then((json) => {
        if (isValidResponse(json)) {
          console.log('hi', json.price);
          return json.price;
        }
      });

    return -1;
  } catch (e) {
    throw e;
  }
}
