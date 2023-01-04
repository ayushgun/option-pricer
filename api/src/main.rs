mod black_scholes;

fn main() {
    // test functions
    println!("{}",black_scholes::black_scholes_call_price(500.0, 510.0, 0.2, 1.0, 0.03, 0.02));
    println!("{}",black_scholes::black_scholes_put_price(500.0, 510.0, 0.2, 1.0, 0.03, 0.02));
}