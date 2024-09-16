// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Books from './pages/Books'
// import SignUp from './pages/SignUp'
// import Login from './pages/Login'
// function App() {
 

//   return (
//     <>
//    <SignUp/>
//    <Login/>
//     <Books/>
//     </>
//   )
// }

// export default App


































import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Books from './pages/Books';

function App() {
  const [user, setUser] = useState(null); // For managing logged-in user

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('token', userData.token); // Store token in localStorage for session persistence
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <Routes>
        {/* If user is not logged in, show SignUp; otherwise, redirect to Books */}
        <Route
          path="/"
          element={user ? <Navigate to="/books" /> : <SignUp />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/books" /> : <SignUp />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/books" /> : <Login onLogin={handleLogin} />}
        />
        {/* Protected Route - Only show Books if user is logged in */}
        <Route
          path="/books"
          element={user ? <Books user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
