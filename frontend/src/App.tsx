import { useState } from "react";
import {
    blackScholesCall,
    blackScholesPut,
    binomialCall,
    binomialPut,
} from "./calls";

export function App(): JSX.Element {
    return (
        <div>
            <h1 className="font-bold">Black Scholes</h1>
            <BlackScholesCalculator />
            <br></br>
            <h1 className="font-bold">Binomial</h1>
            <BinomialCalculator />
        </div>
    );
}

function BlackScholesCalculator(): JSX.Element {
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

        // Compute and store call and put prices
        blackScholesCall(model_params)
            .then((response) => response.json())
            .then((data) => setCallPrice(data.price));

        blackScholesPut(model_params)
            .then((response) => response.json())
            .then((data) => setPutPrice(data.price));
    };

    // Store pricing parameters inside state
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="number" name="spot"></input>
                <input type="number" name="strike"></input>
                <input type="number" name="vol"></input>
                <input type="number" name="time"></input>
                <input type="number" name="rate"></input>
                <input type="number" name="div"></input>
                <input type="submit" value="Submit"></input>
            </form>
            <p>Call Price: {callPrice}</p>
            <p>Put Price: {putPrice}</p>
        </div>
    );
}

function BinomialCalculator(): JSX.Element {
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

        // Compute and store call and put prices
        binomialCall(model_params)
            .then((response) => response.json())
            .then((data) => setCallPrice(data.price));

        binomialPut(model_params)
            .then((response) => response.json())
            .then((data) => setPutPrice(data.price));
    };

    // Store pricing parameters inside state
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="number" name="spot"></input>
                <input type="number" name="strike"></input>
                <input type="number" name="vol"></input>
                <input type="number" name="time"></input>
                <input type="number" name="rate"></input>
                <input type="number" name="div"></input>
                <input type="number" name="steps"></input>
                <input type="submit" value="Submit"></input>
            </form>
            <p>Call Price: {callPrice}</p>
            <p>Put Price: {putPrice}</p>
        </div>
    );
}

export default App;
