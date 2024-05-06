import React from 'react';
import './Header.css';
import CartButton from '../CardButton/CardButton';

function Header(){
  return(
    <header className="header">
      <div className="container">
        <img className="logo" src="https://cafecaramello.com.br/wp-content/uploads/2022/03/cafecaramelo.png" alt="Café Caramello"/>
        <div className="title">
          Catálogo
        </div>
        <CartButton />
      </div>
    </header>
  );
}
export default  Header;
