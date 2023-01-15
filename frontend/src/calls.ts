// Create interfaces to pass in API calls
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

// Define API root
export const URL = "http://localhost:8000";

// Define functions to make API calls
export function blackScholesCall(data: BlackScholes): Promise<Response> {
    let route =
        `${URL}/call/black_scholes?spot=${data.spot}&strike=${data.strike}` +
        `&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}`;

    return fetch(route);
}

export function blackScholesPut(data: BlackScholes): Promise<Response> {
    let route =
        `${URL}/put/black_scholes?spot=${data.spot}&strike=${data.strike}` +
        `&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}`;

    return fetch(route);
}

export function binomialCall(data: Binomial): Promise<Response> {
    let route =
        `${URL}/call/binomial?spot=${data.spot}&strike=${data.strike}&vol=${data.vol}` +
        `&time=${data.time}&rate=${data.rate}&div=${data.div}&steps=${data.steps}`;

    return fetch(route);
}

export function binomialPut(data: Binomial): Promise<Response> {
    let route =
        `${URL}/put/binomial?spot=${data.spot}&strike=${data.strike}&vol=${data.vol}` +
        `&time=${data.time}&rate=${data.rate}&div=${data.div}&steps=${data.steps}`;

    return fetch(route);
}
