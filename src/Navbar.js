import CartWidget from "./CartWidget" ;

const Navbar = () => {
    return (
            <nav id="navbar">
                <div>
                    <a href="#" id="logo">Più Bella</a>
                </div>    
                <div id="navbar-links">
                    <a href="#">Novedades</a>
                    <a href="#">Accesorios</a>
                    <a href="#">Carteras y mochilas</a>
                    <a href="#">Zapatos</a>
                    <a href="#">Gift Cards</a>
                </div>    
                <CartWidget />
            </nav>
    )
}

export default Navbar