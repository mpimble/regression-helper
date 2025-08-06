import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-title"><Link to='/'>Michael's Regression Tool</Link></div>
            <ul className="nav-links">
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/account'>Account</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar