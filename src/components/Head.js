import React from 'react';
import logo from '../hrclogo.svg';

export default function Header(){
  return (
    <div className="logo" style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={logo} alt="logo" />
    </div>
    
  );
};