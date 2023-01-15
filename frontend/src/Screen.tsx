import React from "react";
import {
    blackScholesCall,
    blackScholesPut,
    binomialCall,
    binomialPut,
} from "./calls";

export default function App() {
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

export class BlackScholesComp extends React.Component<
    {},
    {
        spot: number;
        strike: number;
        vol: number;
        time: number;
        rate: number;
        div: number;
        callPrice: number;
        putPrice: number;
    }
> {
    constructor(props: any) {
        super(props);
        this.state = {
            spot: 0,
            strike: 0,
            vol: 0,
            time: 0,
            rate: 0,
            div: 0,
            callPrice: 0,
            putPrice: 0,
        };

        this.handleSpot = this.handleSpot.bind(this);
        this.handleStrike = this.handleStrike.bind(this);
        this.handleVol = this.handleVol.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleRate = this.handleRate.bind(this);
        this.handleDiv = this.handleDiv.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSpot(event: { target: { value: any } }) {
        this.setState({ spot: event.target.value });
    }
    handleStrike(event: { target: { value: any } }) {
        this.setState({ strike: event.target.value });
    }
    handleVol(event: { target: { value: any } }) {
        this.setState({ vol: event.target.value });
    }
    handleTime(event: { target: { value: any } }) {
        this.setState({ time: event.target.value });
    }
    handleRate(event: { target: { value: any } }) {
        this.setState({ rate: event.target.value });
    }
    handleDiv(event: { target: { value: any } }) {
        this.setState({ div: event.target.value });
    }

    handleSubmit(event: { preventDefault: () => void }) {
        if (
            (this.state.spot <= 0, this.state.strike <= 0, this.state.time <= 0)
        ) {
            alert("Spot, Strike, and Time must be greater than 0.");
            return;
        }
        blackScholesCall({
            spot: this.state.spot,
            strike: this.state.strike,
            vol: this.state.vol / 100,
            time: this.state.time,
            rate: this.state.rate / 100,
            div: this.state.div / 100,
        })
            .then((res) => res.json())
            .then((r) => {
                this.setState({
                    callPrice: r.price,
                });
            })
            .catch((e) => alert(e));
        blackScholesPut({
            spot: this.state.spot,
            strike: this.state.strike,
            vol: this.state.vol / 100,
            time: this.state.time,
            rate: this.state.rate / 100,
            div: this.state.div / 100,
        })
            .then((res) => res.json())
            .then((r) => {
                this.setState({
                    putPrice: r.price,
                });
            })
            .catch((e) => alert(e));

        event.preventDefault();
    }

    render() {
        return (
            <div className="bg-neutral-900	rounded-lg">
                <form onSubmit={this.handleSubmit}>
                    <p className="text-center font-light text-gray-300 mb-5">
                        Black-Scholes Model
                    </p>
                    <div className="flow-root mr-5">
                        <p className="ml-3 text-white float-left">Spot: </p>
                        <input
                            className=" float-right text-white bg-neutral-800"
                            type="number"
                            value={this.state.spot}
                            onChange={this.handleSpot}
                        />
                    </div>
                    <div className="flow-root mr-5">
                        <p className="ml-3 text-white float-left">Strike: </p>
                        <input
                            className=" float-right text-white bg-neutral-800"
                            type="number"
                            value={this.state.strike}
                            onChange={this.handleStrike}
                        />
                    </div>
                    <div className="flow-root mr-5">
                        <p className="ml-3 text-white float-left">
                            Volatility %:
                        </p>
                        <input
                            className=" float-right text-white bg-neutral-800"
                            type="number"
                            value={this.state.vol}
                            onChange={this.handleVol}
                        />
                    </div>
                    <div className="flow-root mr-5">
                        <p className="ml-3 text-white float-left">Time: </p>
                        <input
                            className=" float-right text-white bg-neutral-800"
                            type="number"
                            value={this.state.time}
                            onChange={this.handleTime}
                        />
                    </div>
                    <div className="flow-root mr-5">
                        <p className="ml-3 text-white float-left">
                            Interest Rate %:
                        </p>
                        <input
                            className=" ml-3 float-right text-white bg-neutral-800"
                            type="number"
                            value={this.state.rate}
                            onChange={this.handleRate}
                        />
                    </div>
                    <div className="flow-root mr-5">
                        <p className="ml-3 text-white float-left">
                            Dividend %:{" "}
                        </p>
                        <input
                            className=" float-right text-white bg-neutral-800"
                            type="number"
                            value={this.state.div}
                            onChange={this.handleDiv}
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
                    Call Price: {Math.round(this.state.callPrice * 100) / 100}
                </p>
                <p className="ml-3 font-light text-white">
                    Put Price: {Math.round(this.state.putPrice * 100) / 100}
                </p>
            </div>
        );
    }
}
export class BinomialComp extends React.Component<
    {},
    {
        spot: number;
        strike: number;
        vol: number;
        time: number;
        rate: number;
        div: number;
        steps: number;
        callPrice: number;
        putPrice: number;
    }
> {
    constructor(props: any) {
        super(props);
        this.state = {
            spot: 0,
            strike: 0,
            vol: 0,
            time: 0,
            rate: 0,
            div: 0,
            steps: 0,
            callPrice: 0,
            putPrice: 0,
        };

        this.handleSpot = this.handleSpot.bind(this);
        this.handleStrike = this.handleStrike.bind(this);
        this.handleVol = this.handleVol.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.handleRate = this.handleRate.bind(this);
        this.handleDiv = this.handleDiv.bind(this);
        this.handleSteps = this.handleSteps.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSpot(event: { target: { value: any } }) {
        this.setState({ spot: event.target.value });
    }
    handleStrike(event: { target: { value: any } }) {
        this.setState({ strike: event.target.value });
    }
    handleVol(event: { target: { value: any } }) {
        this.setState({ vol: event.target.value });
    }
    handleTime(event: { target: { value: any } }) {
        this.setState({ time: event.target.value });
    }
    handleRate(event: { target: { value: any } }) {
        this.setState({ rate: event.target.value });
    }
    handleDiv(event: { target: { value: any } }) {
        this.setState({ div: event.target.value });
    }
    handleSteps(event: { target: { value: any } }) {
        this.setState({ steps: event.target.value });
    }

    handleSubmit(event: { preventDefault: () => void }) {
        if (
            (this.state.spot <= 0, this.state.strike <= 0, this.state.time <= 0)
        ) {
            alert("Spot, Strike, and Time must be greater than 0.");
            return;
        }

        binomialCall({
            spot: this.state.spot,
            strike: this.state.strike,
            vol: this.state.vol / 100,
            time: this.state.time,
            rate: this.state.rate / 100,
            div: this.state.div / 100,
            steps: this.state.steps,
        })
            .then((res) => res.json())
            .then((r) => {
                this.setState({
                    callPrice: r.price,
                });
            })
            .catch((e) => alert(e));
        binomialPut({
            spot: this.state.spot,
            strike: this.state.strike,
            vol: this.state.vol / 100,
            time: this.state.time,
            rate: this.state.rate / 100,
            div: this.state.div / 100,
            steps: this.state.steps,
        })
            .then((res) => res.json())
            .then((r) => {
                this.setState({
                    putPrice: r.price,
                });
            })
            .catch((e) => alert(e));

        event.preventDefault();
    }

    render() {
        return (
            <div className="bg-neutral-900	rounded-lg ">
                <form onSubmit={this.handleSubmit}>
                    <p className="text-center font-light text-gray-300 mb-5">
                        Binomial Model
                    </p>
                    <div className="flow-root mr-5">
                        <p className="ml-3 text-white float-left">Spot: </p>
                        <input
                            className=" float-right text-white bg-neutral-800"
                            type="number"
                            value={this.state.spot}
                            onChange={this.handleSpot}
                        />
                    </div>
                    <div className="flow-root mr-5">
                        <p className="ml-3 text-white float-left">Strike: </p>
                        <input
                            className=" float-right text-white bg-neutral-800"
                            type="number"
                            value={this.state.strike}
                            onChange={this.handleStrike}
                        />
                    </div>
                    <div className="flow-root mr-5">
                        <p className="ml-3 text-white float-left">
                            Volatility $:
                        </p>
                        <input
                            className=" float-right text-white bg-neutral-800"
                            type="number"
                            value={this.state.vol}
                            onChange={this.handleVol}
                        />
                    </div>
                    <div className="flow-root mr-5">
                        <p className="ml-3 text-white float-left">Time: </p>
                        <input
                            className=" float-right text-white bg-neutral-800"
                            type="number"
                            value={this.state.time}
                            onChange={this.handleTime}
                        />
                    </div>
                    <div className="flow-root mr-5">
                        <p className="ml-3 text-white float-left">
                            Interest Rate %:
                        </p>
                        <input
                            className=" ml-3 float-right text-white bg-neutral-800"
                            type="number"
                            value={this.state.rate}
                            onChange={this.handleRate}
                        />
                    </div>
                    <div className="flow-root mr-5">
                        <p className="ml-3 text-white float-left">
                            Dividend %:{" "}
                        </p>
                        <input
                            className=" float-right text-white bg-neutral-800"
                            type="number"
                            value={this.state.div}
                            onChange={this.handleDiv}
                        />
                    </div>
                    <div className="flow-root mr-5">
                        <p className="ml-3 text-white float-left">Steps: </p>
                        <input
                            className=" float-right text-white bg-neutral-800"
                            type="number"
                            value={this.state.steps}
                            onChange={this.handleSteps}
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
                    Call Price: {Math.round(this.state.callPrice * 100) / 100}
                </p>
                <p className="ml-3 font-light text-white">
                    Put Price: {Math.round(this.state.putPrice * 100) / 100}
                </p>
            </div>
        );
    }
}
