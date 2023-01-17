import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import {
    binomialCall,
    binomialPut,
    blackScholesCall,
    blackScholesPut,
} from "../calls";

export function Home(): JSX.Element {
    return (
        <div>
            <Hero />
            <div id="calculators">
                <BlackScholesComp />
                <BinomialComp />
            </div>
        </div>
    );
}

export function Hero(): JSX.Element {
    return (
        <div className="px-4 pt-5 mb-4 text-center">
            <h1 className="display-4 fw-bold">Options Pricing Model</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">
                    Options Pricer is the platform for traders, providing the
                    speed and accuracy users need to trade at the moment of
                    calculation.
                </p>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <Button variant="primary" href="/#calculators">
                    Get Started
                </Button>
                <Button
                    variant="secondary"
                    href="https://github.com/ayushgun/pricer"
                >
                    View Source
                </Button>
            </div>
        </div>
    );
}

export function BlackScholesComp(): JSX.Element {
    // Define state of functional component
    const [callPrice, setCallPrice] = useState(0);
    const [putPrice, setPutPrice] = useState(0);

    // Build handler to parse form data
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
            model_params.time <= 0)
        ) {
            alert("Spot, Strike, and Time must be greater than 0.");
        }

        // Compute and store call and put prices
        blackScholesCall(model_params)
            .then((response) => response.json())
            .then((data: any) => setCallPrice(data.price))
            .catch((error: Error) => alert(error));
        blackScholesPut(model_params)
            .then((response) => response.json())
            .then((data: any) => setPutPrice(data.price))
            .catch((error: Error) => alert(error));
    };

    // Display calculator UI
    return (
        <div className="black-scholes">
            <Card body>
                <Card.Title>Black-Scholes Model</Card.Title>
                <Card.Text className="text-muted">
                    Price options using the Black-Scholes model.
                </Card.Text>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Spot Price</Form.Label>
                                <Form.Control
                                    name="spot"
                                    type="number"
                                    step="0.01"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Strike Price</Form.Label>
                                <Form.Control
                                    name="strike"
                                    type="number"
                                    step="0.01"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Volatility</Form.Label>
                                <Form.Control
                                    name="vol"
                                    type="number"
                                    step="0.01"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    Expiration Time
                                    <span className="text-muted"> (Years)</span>
                                </Form.Label>
                                <Form.Control
                                    name="time"
                                    type="number"
                                    step="0.01"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Interest Rate</Form.Label>
                                <Form.Control
                                    name="rate"
                                    type="number"
                                    step="0.01"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Dividend Yield</Form.Label>
                                <Form.Control
                                    name="div"
                                    type="number"
                                    step="0.01"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Put Price</Form.Label>
                                <Form.Control
                                    value={`$${putPrice.toFixed(2)}`}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Call Price</Form.Label>
                                <Form.Control
                                    value={`$${callPrice.toFixed(2)}`}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="mt-1" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </div>
    );
}

export function BinomialComp(): JSX.Element {
    // Define state of functional component
    const [callPrice, setCallPrice] = useState(0);
    const [putPrice, setPutPrice] = useState(0);

    // Build handler to parse form data
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
            model_params.time <= 0,
            model_params.steps <= 0)
        ) {
            alert("Spot, Strike, Time, and Volatility must be greater than 0.");
        }

        // Compute and store call and put prices
        binomialCall(model_params)
            .then((response) => response.json())
            .then((data: any) => setCallPrice(data.price))
            .catch((error: Error) => alert(error));
        binomialPut(model_params)
            .then((response) => response.json())
            .then((data: any) => setPutPrice(data.price))
            .catch((error: Error) => alert(error));
    };

    // Display calculator UI
    return (
        <div className="binomial">
            <Card body>
                <Card.Title>Binomial Model</Card.Title>
                <Card.Text className="text-muted">
                    Price options using the Binomial model.
                </Card.Text>
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Spot Price</Form.Label>
                                <Form.Control
                                    name="spot"
                                    type="number"
                                    step="0.01"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Strike Price</Form.Label>
                                <Form.Control
                                    name="strike"
                                    type="number"
                                    step="0.01"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Volatility</Form.Label>
                                <Form.Control
                                    name="vol"
                                    type="number"
                                    step="0.01"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>
                                    Expiration Time
                                    <span className="text-muted"> (Years)</span>
                                </Form.Label>
                                <Form.Control
                                    name="time"
                                    type="number"
                                    step="0.01"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Interest Rate</Form.Label>
                                <Form.Control
                                    name="rate"
                                    type="number"
                                    step="0.01"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Dividend Yield</Form.Label>
                                <Form.Control
                                    name="div"
                                    type="number"
                                    step="0.01"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Steps</Form.Label>
                                <Form.Control name="steps" type="number" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Put Price</Form.Label>
                                <Form.Control
                                    value={`$${putPrice.toFixed(2)}`}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Call Price</Form.Label>
                                <Form.Control
                                    value={`$${callPrice.toFixed(2)}`}
                                    disabled
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="mt-1" type="submit">
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </div>
    );
}
