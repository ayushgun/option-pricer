import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { BlackScholesComp, BinomialComp } from "./App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <p>Black Scholes Calculator</p>
        <BlackScholesComp />
        <br />
        <br />
        <br />
        <br />
        <p>Binomial Calculator</p>
        <br />
        <BinomialComp />
    </React.StrictMode>
);
