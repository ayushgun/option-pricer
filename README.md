<h1 align="center">
  <a href="https://frontend.ayushgun.repl.co">
    <img src="https://i.imgur.com/8OtRg9B.png" width="400px">
  </a>
  <br>
</h1>
<p align="center">
  <a href="https://github.com/ayushgun/pricer/releases/latest">
    <img src="https://img.shields.io/github/v/tag/ayushgun/pricer?label=version&style=flat-square"/>
  </a>
  <a href="LICENSE.md">
    <img src="https://img.shields.io/github/license/ayushgun/pricer?style=flat-square"/>
  </a>
</p>

# Overview

Options Pricer is a web application for pricing options using the Black-Scholes and Binomial pricing models.

Options Pricer features:

- Interactive frontend user interface for computing options prices
- Blazing fast REST API exposing pricing models as endpoints

# Models

The Black-Scholes model works primarily on European options. It provides users with an accurate options price without requiring a large amount of computational resources. The Black-Scholes model is not as flexible as other models, but it provides a solid baseline for pricing options quickly.

On the other hand, the Binomial model is a more accurate model that is slower as it requires a larger amount of computational resources. It provides the same result as the Black-Scholes model when used for European options. Comparitively, the Binomial model is more flexible, as it allows the user to account for early exercise — which are possible when dealing with American options. Here, the Binomial model computes the price for American options.

# Self-Hosting

Options Pricer can easily be self hosted. Dockerfiles have been provided as official releases [here](https://github.com/ayushgun/pricer/releases). However, if you would like to locally build the application, follow the steps below.

1. Ensure that [Rust](https://www.rust-lang.org/tools/install) and [Node.js](https://nodejs.org/en/download/) are installed on the machine.

2. Clone the repository with `git clone https://github.com/ayushgun/pricer`.

3. Move to the API directory with `cd api` and install the dependencies with `cargo build`. Start the API with `cargo run`.

4. Move to the frontend directory with `cd ../frontend` and install the dependencies with `npm install`. Start the frontend with `npm start`.

# Testing

If you plan on modifying the API, a default test suite has been included in this repository.

To run the test suite:

1. Ensure that [Python](https://www.python.org/downloads/) and [pip](https://pypi.org/project/pip/) is installed on the machine.

2. Move to the API directory with `cd api` and start the API with `cargo run`.

3. Move to the test suite directory with `cd tests`. Then, install the test suite dependencies with `pip3 install -r requirements.txt`.

4. Run the test suite with `python3 api_tests.py`.

# Contributing

We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting an issue
- Discussing the current state of the project
- Submitting a fix
- Proposing new features

To get started, check [Issues](https://github.com/ayushgun/authplus/issues) for a list of tracked issues.

# Acknowledgements

[Ayush Gundawar](https://github.com/ayushgun) and [Sriharsha Kocherla](https://github.com/sriharshak27) are the authors of this project.

[React](https://reactjs.org) is the library used to build the frontend UI.

[Actix](https://actix.rs) is the web framework used to build the backend API. It is a powerful, pragmatic, and performant HTTP web framework.
