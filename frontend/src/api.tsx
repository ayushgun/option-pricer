import fetch from "node-fetch";

interface BlackScholes {
  spot: number;
  strike: number;
  vol: number;
  time: number;
  rate: number;
  div: number;
}

interface Binomial {
  spot: number;
  strike: number;
  vol: number;
  time: number;
  rate: number;
  div: number;
  steps: number;
}

const URL = "http://localhost:8000";

async function black_scholes_call(data: BlackScholes): Promise<any> {
  let call_url =
    `${URL}/call/black_scholes?spot=${data.spot}&strike=${data.spot}` +
    `&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}`;
  try {
    await fetch(call_url)
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  } catch (e) {
    throw e;
  }
}

async function black_scholes_put(data: BlackScholes): Promise<any> {
  let call_url =
    `${URL}/call/black_scholes?spot=${data.spot}&strike=${data.spot}` +
    `&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}`;
  try {
    await fetch(call_url)
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  } catch (e) {
    throw e;
  }
}

async function binomial_call(data: Binomial): Promise<any> {
  let call_url =
    `${URL}/call/binomial?spot=${data.spot}&strike=${data.spot}` +
    `&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}&steps=${data.steps}`;
  try {
    await fetch(call_url)
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  } catch (e) {
    throw e;
  }
}

async function binomial_put(data: Binomial): Promise<any> {
  let call_url =
    `${URL}/call/binomial?spot=${data.spot}&strike=${data.spot}` +
    `&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}&steps=${data.steps}`;
  try {
    await fetch(call_url)
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
  } catch (e) {
    throw e;
  }
}
