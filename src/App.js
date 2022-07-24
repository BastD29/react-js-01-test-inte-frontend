import './App.css';
import React, {useState} from 'react';

import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Background from './components/Background';

import OfferPage from './pages/OfferPage';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email === adminUser.email){
      console.log("Logged In")
      setUser({
        name: details.fname,
        email: details.email
      })
    } else {
      setError("Details do not match!")
    }
  }

  const Logout = () => {
    setUser({name: "", email: ""})
  }

  return (
    <div className="App">
      
      
      {(user.email !== "") ? (
        
        <OfferPage 
          user={user}
          logout={Logout}
        />
      ) : (
        <>
          <Background />
          <Header />
          <LoginForm 
            Login={Login}
            error={error}
          />
        </>
      )}
    </div>
  );
}

export default App;
