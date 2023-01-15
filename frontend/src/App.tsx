import React from "react";
import { useState } from "react";

import {
    black_scholes_call,
    black_scholes_put,
    binomial_call,
    binomial_put,
} from "./api/api";

export function App() {
    return (
        <div>
            <h1 className="font-bold text-white text-center text-7xl mt-10">
                Options Pricer
            </h1>
            <p className="m-10 font-light text-gray-400 text-center text-xl">
                Options Pricer is the platform for traders, providing the speed
                <br></br> and reliability innovators need to create at the
                moment of inspiration.
            </p>
            <div className="flex justify-center">
                <div className="flow-root w-6/12">
                    <div className="float-left">
                        <BlackScholesComp />
                    </div>
                    <div className="float-right">
                        <BinomialComp />
                    </div>
                </div>
            </div>
        </div>
    );
}

function BlackScholesComp(): JSX.Element {
    // Define state of functional component
    const [callPrice, setCallPrice] = useState(0);
    const [putPrice, setPutPrice] = useState(0);

    // Build handler to store form data in state
    let handleSubmit = (event: any) => {
        event.preventDefault();
        const model_params = {
            spot: event.target.spot.value,
            strike: event.target.strike.value,
            vol: event.target.vol.value,
            time: event.target.time.value,
            rate: event.target.rate.value,
            div: event.target.div.value,
        };

        if (
            (model_params.spot <= 0,
            model_params.strike <= 0,
            model_params.vol <= 0,
            model_params.time <= 0)
        ) {
            alert("Spot, Strike, Volatility, and Time must be greater than 0.");
            return;
        }

        // Compute and store call and put prices
        black_scholes_call(model_params)
            .then((response) => response.json())
            .then((data) => setCallPrice(data.price))
            .catch((e) => alert(e));

        black_scholes_put(model_params)
            .then((response) => response.json())
            .then((data) => setPutPrice(data.price))
            .catch((e) => alert(e));
    };

    // Store pricing parameters inside state
    return (
        <div className="bg-neutral-900	rounded-lg">
            <form onSubmit={handleSubmit}>
                <p className="text-center font-light text-gray-300 mb-5">
                    Black-Scholes Model
                </p>
                <div className="flow-root">
                    <p className="ml-3 text-white float-left">Spot: </p>
                    <input
                        className=" float-right text-white bg-neutral-900"
                        type="number"
                    />
                </div>
                <div className="flow-root">
                    <p className="ml-3 text-white float-left">Strike: </p>
                    <input
                        className=" float-right text-white bg-neutral-900"
                        type="number"
                    />
                </div>
                <div className="flow-root">
                    <p className="ml-3 text-white float-left">Volatility:</p>
                    <input
                        className=" float-right text-white bg-neutral-900"
                        type="number"
                    />
                </div>
                <div className="flow-root">
                    <p className="ml-3 text-white float-left">Time: </p>
                    <input
                        className=" float-right text-white bg-neutral-900"
                        type="number"
                    />
                </div>
                <div className="flow-root">
                    <p className="ml-3 text-white float-left">
                        Interest Rate:{" "}
                    </p>
                    <input
                        className=" ml-3 float-right text-white bg-neutral-900"
                        type="number"
                    />
                </div>
                <div className="flow-root">
                    <p className="ml-3 text-white float-left">Dividend: </p>
                    <input
                        className=" float-right text-white bg-neutral-900"
                        type="number"
                    />
                </div>
                <br />
                <br />
                <input
                    type="submit"
                    value=" Submit "
                    className="ml-5 bg-black rounded-md text-white mt-2"
                />
            </form>
            <p className="ml-3 font-light text-white mt-3">
                Call Price: {Math.round(callPrice * 100) / 100}
            </p>
            <p className="ml-3 font-light text-white">
                Put Price: {Math.round(putPrice * 100) / 100}
            </p>
        </div>
    );
}

function BinomialComp(): JSX.Element {
    // Define state of functional component
    const [callPrice, setCallPrice] = useState(0);
    const [putPrice, setPutPrice] = useState(0);

    // Build handler to store form data in state
    let handleSubmit = (event: any) => {
        event.preventDefault();
        const model_params = {
            spot: event.target.spot.value,
            strike: event.target.strike.value,
            vol: event.target.vol.value,
            time: event.target.time.value,
            rate: event.target.rate.value,
            div: event.target.div.value,
            steps: event.target.steps.value,
        };

        if (
            (model_params.spot <= 0,
            model_params.strike <= 0,
            model_params.vol <= 0,
            model_params.time <= 0,
            model_params.steps <= 0)
        ) {
            alert(
                "Spot, Strike, Volatility, Time, and Steps must be greater than 0."
            );
            return;
        }

        // Compute and store call and put prices
        binomial_call(model_params)
            .then((response) => response.json())
            .then((data) => setCallPrice(data.price))
            .catch((e) => alert(e));

        binomial_put(model_params)
            .then((response) => response.json())
            .then((data) => setPutPrice(data.price))
            .catch((e) => alert(e));
    };

    // Store pricing parameters inside state
    return (
        <div className="bg-neutral-900	rounded-lg ">
            <form onSubmit={handleSubmit}>
                <p className="text-center font-light text-gray-300 mb-5">
                    Binomial Model
                </p>
                <div className="flow-root">
                    <p className="ml-3 text-white float-left">Spot: </p>
                    <input
                        className=" float-right text-white bg-neutral-900"
                        type="number"
                    />
                </div>
                <div className="flow-root">
                    <p className="ml-3 text-white float-left">Strike: </p>
                    <input
                        className=" float-right text-white bg-neutral-900"
                        type="number"
                    />
                </div>
                <div className="flow-root">
                    <p className="ml-3 text-white float-left">Volatility:</p>
                    <input
                        className=" float-right text-white bg-neutral-900"
                        type="number"
                    />
                </div>
                <div className="flow-root">
                    <p className="ml-3 text-white float-left">Time: </p>
                    <input
                        className=" float-right text-white bg-neutral-900"
                        type="number"
                    />
                </div>
                <div className="flow-root">
                    <p className="ml-3 text-white float-left">
                        Interest Rate:{" "}
                    </p>
                    <input
                        className=" ml-3 float-right text-white bg-neutral-900"
                        type="number"
                    />
                </div>
                <div className="flow-root">
                    <p className="ml-3 text-white float-left">Dividend: </p>
                    <input
                        className=" float-right text-white bg-neutral-900"
                        type="number"
                    />
                </div>
                <div className="flow-root">
                    <p className="ml-3 text-white float-left">Steps: </p>
                    <input
                        className=" float-right text-white bg-neutral-900"
                        type="number"
                    />
                </div>
                <br />
                <input
                    type="submit"
                    value=" Submit "
                    className="ml-5 bg-black rounded-md text-white mt-2"
                />
            </form>
            <p className="ml-3 font-light text-white mt-3">
                Call Price: {Math.round(callPrice * 100) / 100}
            </p>
            <p className="ml-3 font-light text-white">
                Put Price: {Math.round(putPrice * 100) / 100}
            </p>
        </div>
    );
}
