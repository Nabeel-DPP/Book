import React from 'react';

const Profile = ({ user }) => {
  if (!user) {
    return <p>No user data available.</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Membership Type:</strong> {user.membershipType}</p>
    </div>
  );
};

export default Profile;
