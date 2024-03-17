import React from 'react';
import './deskripsi.css';

const Deskripsi = () => {
  return (
    <div className="tool-description">
      <h2>Deskripsi Alat</h2>
      
      <p>IBerikut adalah deskripsi alat yang kami gunakan :</p>
      <ul>
        <li>Sensor Soil-Moisture</li>
        <li>Sensor Ultrasonik</li>
        <li>LCD</li>
      </ul>
    </div>
  );
};

export default Deskripsi;
