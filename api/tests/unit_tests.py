"""
A suite of unit tests for the Rust API. Tests all endpoints and
validates responses and status codes.
"""

import unittest
import requests


class TestAPI(unittest.TestCase):
    def test_black_scholes_call_1(self):
        data = {
            "spot": 100,
            "strike": 120,
            "vol": 0.2,
            "time": 0.5,
            "rate": 0.05,
            "div": 0.03,
        }
        url = f"http://localhost:8000/call/black_scholes?spot={data['spot']}&strike={data['strike']}&vol={data['vol']}&time={data['time']}&rate={data['rate']}&div={data['div']}"
        response = requests.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 0.8187176737, places=5)

    def test_black_scholes_put_1(self):
        data = {
            "spot": 100,
            "strike": 120,
            "vol": 0.2,
            "time": 0.5,
            "rate": 0.05,
            "div": 0.03,
        }
        url = f"http://localhost:8000/put/black_scholes?spot={data['spot']}&strike={data['strike']}&vol={data['vol']}&time={data['time']}&rate={data['rate']}&div={data['div']}"
        response = requests.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 19.34471315, places=5)

    def test_binomial_call_1(self):
        data = {
            "spot": 100,
            "strike": 120,
            "vol": 0.2,
            "time": 0.5,
            "rate": 0.05,
            "div": 0.03,
            "steps": 300,
        }
        url = f"http://localhost:8000/call/binomial?spot={data['spot']}&strike={data['strike']}&vol={data['vol']}&time={data['time']}&rate={data['rate']}&div={data['div']}&steps={data['steps']}"
        response = requests.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 0.8173875264, places=5)

    def test_binomial_put_1(self):
        data = {
            "spot": 100,
            "strike": 120,
            "vol": 0.2,
            "time": 0.5,
            "rate": 0.05,
            "div": 0.03,
            "steps": 300,
        }
        url = f"http://localhost:8000/put/binomial?spot={data['spot']}&strike={data['strike']}&vol={data['vol']}&time={data['time']}&rate={data['rate']}&div={data['div']}&steps={data['steps']}"
        response = requests.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 20.13607425, places=5)

    def test_black_scholes_call_2(self):
        data = {
            "spot": 100,
            "strike": 105,
            "vol": 0.2,
            "time": 1,
            "rate": 0.03,
            "div": 0.01,
        }
        url = f"http://localhost:8000/call/black_scholes?spot={data['spot']}&strike={data['strike']}&vol={data['vol']}&time={data['time']}&rate={data['rate']}&div={data['div']}"
        response = requests.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 6.638061195, places=5)

    def test_black_scholes_put_2(self):
        data = {
            "spot": 100,
            "strike": 105,
            "vol": 0.2,
            "time": 1,
            "rate": 0.03,
            "div": 0.01,
        }
        url = f"http://localhost:8000/put/black_scholes?spot={data['spot']}&strike={data['strike']}&vol={data['vol']}&time={data['time']}&rate={data['rate']}&div={data['div']}"
        response = requests.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 9.529858842, places=5)

    def test_binomial_call_2(self):
        data = {
            "spot": 100,
            "strike": 105,
            "vol": 0.2,
            "time": 1,
            "rate": 0.03,
            "div": 0.01,
            "steps": 500,
        }
        url = f"http://localhost:8000/call/binomial?spot={data['spot']}&strike={data['strike']}&vol={data['vol']}&time={data['time']}&rate={data['rate']}&div={data['div']}&steps={data['steps']}"
        response = requests.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 6.6401914933, places=5)

    def test_binomial_put_2(self):
        data = {
            "spot": 100,
            "strike": 105,
            "vol": 0.2,
            "time": 1,
            "rate": 0.03,
            "div": 0.01,
            "steps": 500,
        }
        url = f"http://localhost:8000/put/binomial?spot={data['spot']}&strike={data['strike']}&vol={data['vol']}&time={data['time']}&rate={data['rate']}&div={data['div']}&steps={data['steps']}"
        response = requests.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertAlmostEqual(response.json()["price"], 9.843653936, places=5)


if __name__ == "__main__":
    unittest.main()
