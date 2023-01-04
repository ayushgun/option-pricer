use std::f64;

pub fn call_price(spot: f64, strike: f64, vol: f64, time: f64, rate: f64,  div: f64, n: i32) -> f64 {
    let dt = time / n as f64;
    let up = (vol * dt.powf(0.5)).exp();
    let p0 = (up * (-div * dt).exp() - (-rate * dt).exp()) / (up.powi(2) - 1.0);
    let p1 = (-rate * dt).exp() - p0;
    let mut price = vec![];
    for i in 0..=n {
        price.push(spot * up.powi(2 * i - n) - strike);
        price[i as usize] = f64::max(price[i as usize], 0.0);
    }
    for j in (0..n).rev() {
        for i in 0..=j {
            price[i as usize] = p0 * price[(i + 1) as usize] + p1 * price[i as usize];
            let exercise = -strike + spot * up.powi(2 * i - j);
            price[i as usize] = f64::max(price[i as usize],exercise);
        }
    }
    price[0]
}

pub fn put_price(spot: f64, strike: f64, vol: f64, time: f64, rate: f64,  div: f64, n: i32) -> f64 {
    let dt = time / n as f64;
    let up = (vol * dt.powf(0.5)).exp();
    let p0 = (up * (-div * dt).exp() - (-rate * dt).exp()) / (up.powi(2) - 1.0);
    let p1 = (-rate * dt).exp() - p0;
    let mut price = vec![];
    for i in 0..=n {
        price.push(-spot * up.powi(2 * i - n) + strike);
        price[i as usize] = f64::max(price[i as usize], 0.0);
    }
    for j in (0..n).rev() {
        for i in 0..=j {
            price[i as usize] = p0 * price[(i + 1) as usize] + p1 * price[i as usize];
            let exercise = strike - spot * up.powi(2 * i - j);
            price[i as usize] = f64::max(price[i as usize],exercise);
        }
    }
    price[0]
}