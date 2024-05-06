import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartPlus } from 'react-icons/bs';
import './ProductsCard.css';
import formatCurrency from '../../api/formatCurrency';
import ContextApp from '../../context/ContextApp';

function ProductsCard( { data }) {
  const{title, price, image} = data;

  const {cartItens, setCartItens} = useContext(ContextApp);

  const handlleAddCart = () =>{
    setCartItens([  ...cartItens, data]);
  };

  return ( 
    <section className="products-card">
      <img src={image}
        className="card_image" />
      <div className="card_infos">
        <h2 className="card_title">{title}</h2>
        <h2 className="card_price">{ formatCurrency(price)}</h2>
      </div>
      <button type="button" className="button_add_cart" onClick={handlleAddCart}>
        <BsCartPlus />
      </button>
    </section>
  );
}

export default ProductsCard;
ProductsCard.propTypes = {
  data: propTypes.shape([])
}.isRequired;
