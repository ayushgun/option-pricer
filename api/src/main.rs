// mod binomial;
// mod black_scholes;
use actix_web::{get, App, HttpServer, Responder};

#[get("/")]
async fn greet() -> impl Responder {
    format!("Hello World!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("Starting API at http://localhost:8000/");
    HttpServer::new(|| App::new().service(greet))
        .bind(("localhost", 8000))?
        .run()
        .await
}
