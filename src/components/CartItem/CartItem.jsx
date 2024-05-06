import React, { useContext } from 'react';
import { BsCartDash } from 'react-icons/bs';
import propTypes from 'prop-types';
import './CartItem.css';
import formatCurrency from '../../api/formatCurrency';
import ContextApp from '../../context/ContextApp';

function CartItem({ data }) {
  const {cartItens, setCartItens} = useContext(ContextApp);
  const{idProduct, image, title, price} = data;
  const handleRemoveItem = () =>{
    const updatedCartItens = cartItens.filter((item)=> item.idProduct != idProduct);
    setCartItens(updatedCartItens);
  };

  return ( 
    <section className="cart-item">
      <img src={image} 
        alt="produto"
        className="cart-item-image"
      />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price)}</h3>
        <button type="button" className="button-remove-item" onClick={handleRemoveItem}>
          <BsCartDash />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
