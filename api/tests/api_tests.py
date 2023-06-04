"""
A suite of unit tests for the Rust API. Tests all endpoints and
validates responses and status codes.
"""

import unittest

import requests

# Define test constants
URL = "http://localhost:8080"

# Define sample data
BS_DATA_0 = {
    "spot": 100,
    "strike": 120,
    "vol": 0.2,
    "time": 0.5,
    "rate": 0.05,
    "div": 0.03,
}

BS_DATA_1 = {
    "spot": 100,
    "strike": 105,
    "vol": 0.2,
    "time": 1,
    "rate": 0.03,
    "div": 0.01,
}

BIN_DATA_0 = {
    "spot": 100,
    "strike": 120,
    "vol": 0.2,
    "time": 0.5,
    "rate": 0.05,
    "div": 0.03,
    "steps": 300,
}

BIN_DATA_1 = {
    "spot": 100,
    "strike": 105,
    "vol": 0.2,
    "time": 1,
    "rate": 0.03,
    "div": 0.01,
    "steps": 500,
}


class TestAPI(unittest.TestCase):
    def test_black_scholes_call_0(self) -> None:
        response = requests.get(
            f"{URL}/call/black_scholes", params=BS_DATA_0, timeout=5
        )
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 0.8187176737, places=5)

    def test_black_scholes_call_1(self) -> None:
        response = requests.get(
            f"{URL}/call/black_scholes", params=BS_DATA_1, timeout=5
        )
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 6.63806119, places=5)

    def test_black_scholes_put_0(self) -> None:
        response = requests.get(f"{URL}/put/black_scholes", params=BS_DATA_0, timeout=5)
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 19.34471315, places=5)

    def test_black_scholes_put_1(self) -> None:
        response = requests.get(f"{URL}/put/black_scholes", params=BS_DATA_1, timeout=5)
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 9.529858842, places=5)

    def test_binomial_call_0(self) -> None:
        response = requests.get(f"{URL}/call/binomial", params=BIN_DATA_0, timeout=5)
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 0.8173875264, places=5)

    def test_binomial_call_1(self) -> None:
        response = requests.get(f"{URL}/call/binomial", params=BIN_DATA_1, timeout=5)
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 6.6401914933, places=5)

    def test_binomial_put_0(self) -> None:
        response = requests.get(f"{URL}/put/binomial", params=BIN_DATA_0, timeout=5)
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 20.136074255, places=5)

    def test_binomial_put_1(self) -> None:
        response = requests.get(f"{URL}/put/binomial", params=BIN_DATA_1, timeout=5)
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 9.843653936, places=5)


if __name__ == "__main__":
    unittest.main()
