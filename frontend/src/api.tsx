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

async function black_scholes_call(data: BlackScholes): Promise<any> {
	const response = await fetch(
		"/call/black_scholes?data=${JSON.stringify(data)}"
	);
	return await response.json();
}

async function black_scholes_put(data: BlackScholes): Promise<any> {
	const response = await fetch(
		"/put/black_scholes?data=${JSON.stringify(data)}"
	);
	return await response.json();
}

async function binomial_call(data: Binomial): Promise<any> {
	const response = await fetch("/call/binomial?data=${JSON.stringify(data)}");
	return await response.json();
}

async function binomial_put(data: Binomial): Promise<any> {
	const response = await fetch("/put/binomial?data=${JSON.stringify(data)}");
	return await response.json();
}
