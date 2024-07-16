// src/UserDetail.jsx
import React from 'react';

function UserDetail({ user }) {
  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>Detalji korisnika</h2>
      <p><strong>Ime:</strong> {user.name}</p>
      <p><strong>Korisničko ime:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Adresa:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
    </div>
  );
}

export default UserDetail;
