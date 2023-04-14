mod models;

use actix_extensible_rate_limit;
use actix_web;
use serde;

const URI: &'static str = "localhost";
const PORT: u16 = 8080;

#[derive(serde::Serialize)]
struct OptionPriceResponse {
    price: f64,
    currency: String,
}

#[actix_web::get("/")]
async fn root() -> impl actix_web::Responder {
    actix_web::HttpResponse::Ok()
        .content_type(actix_web::http::header::ContentType::plaintext())
        .body("API is connected and listening to requests")
}

// A helper function to create an HTTP response with the option price and currency
async fn create_response<T>(
    data: actix_web::web::Query<T>,
    pricer: impl Fn(&T) -> f64,
) -> impl actix_web::Responder {
    let response = OptionPriceResponse {
        price: pricer(&data),
        currency: "USD".to_string(),
    };

    actix_web::HttpResponse::Ok()
        .content_type(actix_web::http::header::ContentType::json())
        .json(response)
}

// The following functions use the create_response helper function to generate
// responses for the different pricing models and option types

#[actix_web::get("/call/black_scholes")]
async fn black_scholes_call(
    data: actix_web::web::Query<models::BlackScholes>,
) -> impl actix_web::Responder {
    create_response(data, models::BlackScholes::call_price).await
}

#[actix_web::get("/call/binomial")]
async fn binomial_call(data: actix_web::web::Query<models::Binomial>) -> impl actix_web::Responder {
    create_response(data, models::Binomial::call_price).await
}

#[actix_web::get("/put/black_scholes")]
async fn black_scholes_put(
    data: actix_web::web::Query<models::BlackScholes>,
) -> impl actix_web::Responder {
    create_response(data, models::BlackScholes::put_price).await
}

#[actix_web::get("/put/binomial")]
async fn binomial_put(data: actix_web::web::Query<models::Binomial>) -> impl actix_web::Responder {
    create_response(data, models::Binomial::put_price).await
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!(
        "The API is connected and listening on http://{}:{}",
        URI, PORT
    );

    let store = actix_extensible_rate_limit::backend::memory::InMemoryBackend::builder().build();

    actix_web::HttpServer::new(move || {
        let input = actix_extensible_rate_limit::backend::SimpleInputFunctionBuilder::new(
            std::time::Duration::from_secs(1),
            8,
        )
        .real_ip_key()
        .build();
        let ratelimiter = actix_extensible_rate_limit::RateLimiter::builder(store.clone(), input)
            .add_headers()
            .build();

        actix_web::App::new()
            .wrap(ratelimiter)
            .service(root)
            .service(black_scholes_call)
            .service(binomial_call)
            .service(black_scholes_put)
            .service(binomial_put)
    })
    .bind((URI, PORT))?
    .run()
    .await
}
