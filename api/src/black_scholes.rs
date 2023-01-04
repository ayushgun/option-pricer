use std::f64;
use statrs::distribution::Normal;
use statrs::distribution::Univariate;

pub fn d1(s: f64, k: f64, v: f64, t: f64, r: f64, q: f64) -> f64 {
    (f64::ln(s / k) + (r - q + v.powi(2) / 2.0) * t) / (v * t.powf(0.5))
}

pub fn d2(s: f64, k: f64, v: f64, t: f64, r: f64, q: f64) -> f64 {
    d1(s, k, v, t, r, q) - v * t.powf(0.5)
}

pub fn black_scholes_call_price(spot: f64, strike: f64, vol: f64, time: f64, ir: f64, q: f64) -> f64 {
    let normal = Normal::new(0.0, 1.0).unwrap();
    spot * normal.cdf(d1(spot, strike, vol, time, ir, q)) * (-q * time).exp() - strike * normal.cdf(d2(spot, strike, vol, time, ir, q)) * (-ir * time).exp()
}

pub fn black_scholes_put_price(spot: f64, strike: f64, vol: f64, time: f64, ir: f64, q: f64) -> f64 {
    let normal = Normal::new(0.0, 1.0).unwrap();
    -spot * normal.cdf(-d1(spot, strike, vol, time, ir, q)) * (-q * time).exp() + strike * normal.cdf(-d2(spot, strike, vol, time, ir, q)) * (-ir * time).exp()
}