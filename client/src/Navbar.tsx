import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-title"><Link to='/'>Personal Website</Link></div>
            <ul className="nav-links">
                <li><Link to='/'>Login</Link></li>
                <li><Link to='/about'>Dashboard</Link></li>
                <li><Link to='/projects'>Account</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar