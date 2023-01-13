import React from "react";
import {
    black_scholes_call,
    black_scholes_put,
    binomial_call,
    binomial_put,
} from "./api/api";

// export default function App() {
//   return (
//     <div>
//       <h1 className="font-bold text-white text-center text-7xl">
//         Options Pricer
//       </h1>
//       <p className="m-10 font-light text-gray-400 text-center text-xl">
//         Options Pricer is the platform for traders, providing the speed<br></br>{" "}
//         and reliability innovators need to create at the moment of inspiration.
//       </p>
//     </div>
//   );
// }

class FlavorForm extends React.Component<
    {},
    {
        spot: number;
        strike: number;
        vol: number;
        time: number;
        rate: number;
        div: number;
        price: number;
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
            price: 0,
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
        black_scholes_call({
            spot: this.state.spot,
            strike: this.state.strike,
            vol: this.state.vol,
            time: this.state.time,
            rate: this.state.rate,
            div: this.state.div,
        })
            .then((res) => res.json())
            .then((r) => {
                console.log(r.price);
            });

        // replace above code with this when it works
        // black_scholes_call({
        //   spot: this.state.spot,
        //   strike: this.state.strike,
        //   vol: this.state.vol,
        //   time: this.state.time,
        //   rate: this.state.rate,
        //   div: this.state.div,
        // })
        //   .then((res) => res.json())
        //   .then((r) => {
        //     this.setState({
        //       price: r.price,
        //     });
        //   });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Spot:
                        <input
                            type="number"
                            value={this.state.spot}
                            onChange={this.handleSpot}
                        />
                        <br />
                        Strike:
                        <input
                            type="number"
                            value={this.state.strike}
                            onChange={this.handleStrike}
                        />
                        <br />
                        Volatility:
                        <input
                            type="number"
                            value={this.state.vol}
                            onChange={this.handleVol}
                        />
                        <br />
                        Time:
                        <input
                            type="number"
                            value={this.state.time}
                            onChange={this.handleTime}
                        />
                        <br />
                        Interest Rate:
                        <input
                            type="number"
                            value={this.state.rate}
                            onChange={this.handleRate}
                        />
                        <br />
                        Dividend:
                        <input
                            type="number"
                            value={this.state.div}
                            onChange={this.handleDiv}
                        />
                        {/* <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select> */}
                    </label>
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Price: {this.state.price}</p>
            </div>
        );
    }
}
export default FlavorForm;
