import fetch from "node-fetch";

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

export const URL = "http://localhost:8080";

// Helper function to build the API route
function buildRoute(
  model: "black_scholes" | "binomial",
  optionType: "call" | "put",
  data: BlackScholes | Binomial
): string {
  const baseRoute = `${URL}/${optionType}/${model}?spot=${data.spot}&strike=${data.strike}&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}`;
  if (model === "binomial") {
    return `${baseRoute}&steps=${(data as Binomial).steps}`;
  }
  return baseRoute;
}

// Requesting the Black-Scholes call option price from the API
export function blackScholesCall(data: BlackScholes): Promise<any> {
  return fetch(buildRoute("black_scholes", "call", data));
}

// Requesting the Black-Scholes put option price from the API
export function blackScholesPut(data: BlackScholes): Promise<any> {
  return fetch(buildRoute("black_scholes", "put", data));
}

// Requesting the Binomial call option price from the API
export function binomialCall(data: Binomial): Promise<any> {
  return fetch(buildRoute("binomial", "call", data));
}

// Requesting the Binomial put option price from the API
export function binomialPut(data: Binomial): Promise<any> {
  return fetch(buildRoute("binomial", "put", data));
}
