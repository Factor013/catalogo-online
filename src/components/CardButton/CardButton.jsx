import React, { useContext } from 'react';
import { GrCart } from 'react-icons/gr';
import ContextApp from '../../context/ContextApp';
import './CardButton.css';

function CartButton() {

  const{cartItens, isCartVisible, setIsCartVisible} = useContext(ContextApp);


  return ( 
    <button className="cart_button" onClick={()=> setIsCartVisible(!isCartVisible)}>
      <GrCart />
      {
        cartItens.length > 0 && <span className="cart_status">{cartItens.length}</span>
      }
      
    </button>
  );
}

export default CartButton;
