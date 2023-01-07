pub struct Binomial {
    spot: f64,
    strike: f64,
    vol: f64,
    time: f64,
    rate: f64,
    div: f64,
    steps: i32,
}

impl Binomial {
    pub fn new(
        spot: f64,
        strike: f64,
        vol: f64,
        time: f64,
        rate: f64,
        div: f64,
        steps: i32,
    ) -> Binomial {
        Binomial {
            spot,
            strike,
            vol,
            time,
            rate,
            div,
            steps,
        }
    }

    pub fn call_price(&self) -> f64 {
        let dt = self.time / self.steps as f64;
        let up = (self.vol * dt.powf(0.5)).exp();
        let p0 = (up * (-self.div * dt).exp() - (-self.rate * dt).exp()) / (up.powi(2) - 1.0);
        let p1 = (-self.rate * dt).exp() - p0;
        let mut price = vec![];
        for i in 0..=self.steps {
            price.push(self.spot * up.powi(2 * i - self.steps) - self.strike);
            price[i as usize] = f64::max(price[i as usize], 0.0);
        }
        for j in (0..self.steps).rev() {
            for i in 0..=j {
                price[i as usize] = p0 * price[(i + 1) as usize] + p1 * price[i as usize];
                let exercise = -self.strike + self.spot * up.powi(2 * i - j);
                price[i as usize] = f64::max(price[i as usize], exercise);
            }
        }
        price[0]
    }

    pub fn put_price(&self) -> f64 {
        let dt = self.time / self.steps as f64;
        let up = (self.vol * dt.powf(0.5)).exp();
        let p0 = (up * (-self.div * dt).exp() - (-self.rate * dt).exp()) / (up.powi(2) - 1.0);
        let p1 = (-self.rate * dt).exp() - p0;
        let mut price = vec![];
        for i in 0..=self.steps {
            price.push(-self.spot * up.powi(2 * i - self.steps) + self.strike);
            price[i as usize] = f64::max(price[i as usize], 0.0);
        }
        for j in (0..self.steps).rev() {
            for i in 0..=j {
                price[i as usize] = p0 * price[(i + 1) as usize] + p1 * price[i as usize];
                let exercise = self.strike - self.spot * up.powi(2 * i - j);
                price[i as usize] = f64::max(price[i as usize], exercise);
            }
        }
        price[0]
    }
}
