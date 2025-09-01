import { Link } from "react-router-dom"
import './Navbar.css'
import { isAuthenticated } from "./auth";

function Navbar() {
    let lioLink: string = '/login';
    let lioText: string = 'Login';

    if (isAuthenticated()) {
        lioLink = '/logout';
        lioText = 'Logout';
    }

    return (
        <nav className="navbar">
            <div className="navbar-title"><Link to='/'>Michael's Regression Tool</Link></div>
            <ul className="nav-links">
                <li><Link to={lioLink}>{lioText}</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/account'>Account</Link></li>
            </ul>
        </nav>
    )
};

export default Navbar