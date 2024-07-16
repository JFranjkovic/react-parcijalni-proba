import React, { useState } from 'react';

function UserForm({ onFetchUser }) {
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      onFetchUser(userId);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Unesite korisnički ID"
      />
      <button type="submit">Prikaži korisnika</button>
    </form>
  );
}

export default UserForm;