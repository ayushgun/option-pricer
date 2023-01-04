mod black_scholes;

fn main() {
    println!(
        "{}",
        black_scholes::call_price(500.0, 510.0, 0.2, 1.0, 0.03, 0.02)
    );
    println!(
        "{}",
        black_scholes::put_price(500.0, 510.0, 0.2, 1.0, 0.03, 0.02)
    );
}
