mod binomial;
mod black_scholes;

fn main() {
    // test functions
    println!(
        "{}",
        black_scholes::call_price(500.0, 510.0, 0.2, 1.0, 0.03, 0.02)
    );
    println!(
        "{}",
        black_scholes::put_price(500.0, 510.0, 0.2, 1.0, 0.03, 0.02)
    );
    println!(
        "{}",
        binomial::call_price(500.0, 510.0, 0.2, 1.0, 0.03, 0.02, 1000)
    );
    println!(
        "{}",
        binomial::put_price(500.0, 510.0, 0.2, 1.0, 0.03, 0.02, 1000)
    );
}
