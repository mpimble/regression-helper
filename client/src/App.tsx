import './App.css'
import { Link } from 'react-router-dom'
import { isAuthenticated } from './auth'
import { getFullName } from './userinfo'
import { useState, useEffect } from 'react'

function App() {
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    getFullName().then(result => {
      setFullName(result);
    });
  }, []);

  if (isAuthenticated()) {
    return (
      <div>
        <h2>Welcome, {fullName}!</h2>
        <p>Head to the <Link to="/dashboard">Dashboard</Link> to create and view your regression projects.</p>
      </div>
    );
  }


  return (
    <div>
      <p>The home page for my custom regression tool. <Link to="login">Login</Link> to create and view your regression projects.</p>
    </div>
  );
}

export default App
