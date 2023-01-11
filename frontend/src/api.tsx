import fetch from "node-fetch";

// Parameter Objects
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

type Response = {
	price: number;
};

// Declare base API URL
const URL = "http://localhost:8000";

// Check if API response is valid
function isValidResponse(object: any): object is Response {
	return "price" in object;
}

// Get call and put price data from API
async function black_scholes_call(data: BlackScholes): Promise<number> {
	let call_url =
		`${URL}/call/black_scholes?spot=${data.spot}&strike=${data.spot}` +
		`&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}`;
	try {
		await fetch(call_url)
			.then((res) => res.json())
			.then((json) => {
				if (isValidResponse(json)) {
					return json.price;
				}
			});

		return -1;
	} catch (e) {
		throw e;
	}
}

async function black_scholes_put(data: BlackScholes): Promise<number> {
	let call_url =
		`${URL}/put/black_scholes?spot=${data.spot}&strike=${data.spot}` +
		`&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}`;
	try {
		await fetch(call_url)
			.then((res) => res.json())
			.then((json) => {
				if (isValidResponse(json)) {
					return json.price;
				}
			});

		return -1;
	} catch (e) {
		throw e;
	}
}

async function binomial_call(data: Binomial): Promise<number> {
	let call_url =
		`${URL}/call/binomial?spot=${data.spot}&strike=${data.spot}` +
		`&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}`;
	try {
		await fetch(call_url)
			.then((res) => res.json())
			.then((json) => {
				if (isValidResponse(json)) {
					return json.price;
				}
			});

		return -1;
	} catch (e) {
		throw e;
	}
}

async function binomial_put(data: Binomial): Promise<number> {
	let call_url =
		`${URL}/put/binomial?spot=${data.spot}&strike=${data.spot}` +
		`&vol=${data.vol}&time=${data.time}&rate=${data.rate}&div=${data.div}`;
	try {
		await fetch(call_url)
			.then((res) => res.json())
			.then((json) => {
				if (isValidResponse(json)) {
					return json.price;
				}
			});

		return -1;
	} catch (e) {
		throw e;
	}
}
