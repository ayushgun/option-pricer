import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

export default function App(): JSX.Element {
    return (
        <Container className="main">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
            <Footer />
        </Container>
    );
}

function Header(): JSX.Element {
    return (
        <Navbar>
            <Navbar.Brand href="/">Options Pricer</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="Links" id="basic-nav-dropdown">
                        <NavDropdown.Item href="https://github.com/ayushgun/pricer">
                            Source Code
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://github.com/ayushgun/pricer#Contributing">
                            Contributing
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <hr></hr>
        </Navbar>
    );
}

function Footer(): JSX.Element {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-5 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <span className="mb-3 mt-md-0 text-muted">
                    © 2023 Options Pricer. Licensed under the MIT license.
                </span>
            </div>
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item">
                    <a href="/" className="nav-link px-2 text-muted">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link px-2 text-muted">
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="https://github.com/ayushgun/pricer"
                        className="nav-link px-2 text-muted"
                    >
                        Source
                    </a>
                </li>
            </ul>
        </footer>
    );
}
