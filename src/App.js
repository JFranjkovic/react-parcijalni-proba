// src/App.js
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserDetail from './components/UserDetail';

function App() {
  const [user, setUser] = useState(null);

  const fetchUser = async (userId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user:', error);
      setUser(null);
    }
  };

  return (
    <div className="App">
      <h1>Prikaz Podataka o Korisnicima</h1>
      <UserForm onFetchUser={fetchUser} />
      <UserDetail user={user} />
    </div>
  );
}

export default App;
