import { Outlet, Link } from "react-router-dom";
import'../scss/style.scss';


function Header() {
    return(
       
		<nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

		<div class="container">
			<a class="navbar-brand" href="/home">Furni<span>.</span></a>

			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarsFurni">
				<ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
					<li class="nav-item active
					">
						<Link class="nav-link "to="/home">Home</Link>
					</li>
					<li class="nav-item "><Link class="nav-link" to="/shop">Shop</Link></li>
					<li><Link class="nav-link"  to="/aboutUs">About us</Link></li>
					<li><Link class="nav-link" to="/services">Services</Link></li>
					<li><Link class="nav-link" to="/blog">Blog</Link></li>
					<li><Link class="nav-link"  to="/contactUs">Contact us</Link></li>
				</ul>

				<ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
					<li><Link class="nav-link" to="/"><img src="images/user.svg"/></Link></li>
					<li><Link class="nav-link" to="/cart"><img src="images/cart.svg"/></Link></li>
				</ul>
			</div>
		</div>
			
	</nav>
    )
}

export default Header;