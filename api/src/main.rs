use actix_web::{get, App, HttpServer, Responder};

//import classes
// use black_scholes::BlackScholes;
// mod black_scholes;

// use binomial::Binomial;
// mod binomial;

#[get("/")]
async fn greet() -> impl Responder {
    format!("Hello World!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Starting API at http://localhost:8000/");

    //test: work:  delete when necessary
    // let bs = BlackScholes::new(100.0, 110.0, 0.2, 1.0, 0.05, 0.03);
    // let bs_call_price = bs.call_price();
    // let bs_put_price = bs.put_price();
    // println!("{}", bs_call_price);
    // println!("{}", bs_put_price);

    // let bin = Binomial::new(100.0, 110.0, 0.2, 1.0, 0.05, 0.03, 500);
    // let bin_call_price = bin.call_price();
    // let bin_put_price = bin.put_price();
    // println!("{}", bin_call_price);
    // println!("{}", bin_put_price);

    HttpServer::new(|| App::new().service(greet))
        .bind(("localhost", 8000))?
        .run()
        .await
}
