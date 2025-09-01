import './Dashboard.css'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <h1>My Dashboard</h1>
            <h2>Projects</h2>
            <h2><Link to="/new-regression">Create New</Link></h2>
        </div>
    )
}

export default Dashboard