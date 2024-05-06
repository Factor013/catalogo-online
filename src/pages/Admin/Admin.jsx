import React from 'react';
import './Admin.css';

function Admin() {
  return ( 
    <div className="form-login">
      <div className="Logo">
        <img src="" />
      </div>
      <form className="form">
        <input placeholder="Login" type="text"/>
        <input placeholder="Senha" type="password"/>
        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
    </div>
  );
}

export default Admin;
