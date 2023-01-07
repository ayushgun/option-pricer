use statrs::distribution::Normal;
use statrs::distribution::Univariate;

pub struct BlackScholes {
    pub spot: f64,
    pub strike: f64,
    pub vol: f64,
    pub time: f64,
    pub ir: f64,
    pub q: f64,
}

impl BlackScholes {
    pub fn new(spot: f64, strike: f64, vol: f64, time: f64, ir: f64, q: f64) -> BlackScholes {
        BlackScholes {
            spot,
            strike,
            vol,
            time,
            ir,
            q,
        }
    }

    fn d1(&self) -> f64 {
        (f64::ln(self.spot / self.strike) + (self.ir - self.q + self.vol.powi(2) / 2.0) * self.time)
            / (self.vol * self.time.powf(0.5))
    }

    fn d2(&self) -> f64 {
        self.d1() - self.vol * self.time.powf(0.5)
    }

    pub fn call_price(&self) -> f64 {
        let normal = Normal::new(0.0, 1.0).unwrap();
        self.spot * normal.cdf(self.d1()) * (-self.q * self.time).exp()
            - self.strike * normal.cdf(self.d2()) * (-self.ir * self.time).exp()
    }

    pub fn put_price(&self) -> f64 {
        let normal = Normal::new(0.0, 1.0).unwrap();
        -self.spot * normal.cdf(-self.d1()) * (-self.q * self.time).exp()
            + self.strike * normal.cdf(-self.d2()) * (-self.ir * self.time).exp()
    }
}
