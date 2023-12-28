import React from 'react';
// import yourImage from './images/rocket.png'; // Path to your image file

const ProfileImage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <img
        src={'./images/DP.jpg'}
        alt="Rohan"
        style={{
          width: '300px', // Adjust the size as needed
          height: '300px', // Ensure this is the same as the width to maintain aspect ratio
          borderRadius: '50%', // This makes the image round
          border: '3px solid white', // Optional: adds a border around the image
          objectFit: 'cover' // This will cover the area without stretching the image
        }}
      />
    </div>
  );
};

export default ProfileImage;
