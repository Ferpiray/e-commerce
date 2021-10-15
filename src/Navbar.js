const Carrito = () => {
    return(
        <span class="material-icons">shopping_bag</span>
    )
}

const Navbar = () => {
    return (
            <nav id="navbar">
                <div>
                    <p>Più Bella</p>
                </div>    
                <div id="navbar-links">
                    <a href="#">Novedades</a>
                    <a href="#">Accesorios</a>
                    <a href="#">Carteras y mochilas</a>
                    <a href="#">Zapatos</a>
                    <a href="#">Gift Cards</a>
                    <Carrito />
                </div>    
            </nav>
    )
}

export default Navbar