export function About(): JSX.Element {
    return (
        <div className="pt-3 mb-3">
            <h1>About Options Pricer</h1>
            <hr></hr>
            <div className="text-muted">
                <p>
                    Options Pricer is the platform for traders, providing the
                    speed and accuracy users need to trade at the moment of
                    calculation. Options Pricer allows users to price options
                    using two models — the Black-Scholes model and the Binomial
                    model.
                </p>
                <p>
                    The Black-Scholes model works primarily on European options.
                    It provides users with an accurate options price without
                    requiring a large amount of computational resources. The
                    Black-Scholes model is not as flexible as other models, but
                    it provides a solid baseline for pricing options quickly.
                    The equation used to compute an option's price using the
                    Black-Scholes model is provided below, courtesy of
                    Wikimedia.
                </p>
                <img
                    className="mb-4"
                    src="https://wikimedia.org/api/rest_v1/media/math/render/svg/d85601f6192ee85748c2deef28240275510d634e"
                ></img>
                <p>
                    On the other hand, the Binomial model is a more accurate
                    model that is slower as it requires a larger amount of
                    computational resources. It provides the same result as the
                    Black-Scholes model when used for European options.
                    Comparitively, the Binomial model is more flexible, as it
                    allows the user to account for early excersizes — which are
                    possible when dealing with American options. Here, the
                    Binomial model computes the price for American options. The
                    process used to compute an option's price using the Binomial
                    model is provided below, courtesy of Wikimedia.
                </p>
                <img
                    className="mb-3"
                    src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Arbre_Binomial_Options_Reelles.png"
                ></img>
            </div>
        </div>
    );
}
