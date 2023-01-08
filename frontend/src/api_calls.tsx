import fetch from 'node-fetch';

interface black_scholes_data {
    spot: number
    strike: number
    vol: number
    time: number
    rate: number
    div: number
}

interface binomial_data {
    spot: number
    strike: number
    vol: number
    time: number
    rate: number
    div: number
    steps: number
}

async function getCallBlackScholes(data: black_scholes_data): Promise<any> {
    const response = await fetch('/call/black_scholes?data=${JSON.stringify(data)}');
    return await response.json();
}

async function getPutBlackScholes(data: black_scholes_data): Promise<any> {
    const response = await fetch('/put/black_scholes?data=${JSON.stringify(data)}');
    return await response.json();
}

async function getCallBinomial(data: binomial_data): Promise<any> {
    const response = await fetch('/call/binomial?data=${JSON.stringify(data)}');
    return await response.json();
}

async function getPutBinomial(data: binomial_data): Promise<any> {
    const response = await fetch('/put/binomial?data=${JSON.stringify(data)}');
    return await response.json();
}