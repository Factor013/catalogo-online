import React, { useContext } from 'react';
import'./Cart.css';
import CartItem from '../CartItem/CartItem';
import ContextApp from '../../context/ContextApp';
import formatCurrency from '../../api/formatCurrency';
import ButtonPedido from '../ButtonPedido/ButtonPedido';

function Cart() {

  const{cartItens, isCartVisible}= useContext(ContextApp);
  const totalPrice = cartItens.reduce((acc, item)=>{ 
    return item.price + acc;
  },0);

  return ( 
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-itens">
        {cartItens.map((cartItem)=><CartItem  key={cartItem.idProduct} data={cartItem}/>)}
      </div>
      <div className="cart-resume">
        {formatCurrency(totalPrice)}
        <ButtonPedido />
      </div>
    </section>
  );
}

export default Cart;
