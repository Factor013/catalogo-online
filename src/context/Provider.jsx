import React, {useState} from 'react';
import  propTypes  from 'prop-types';
import ContextApp from './ContextApp';

function Provider({ children }) {

  const [products, setProducts] = useState([]);
  const [cartItens, setCartItens] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const value = {
    products,
    setProducts,
    cartItens,
    setCartItens,
    isCartVisible, 
    setIsCartVisible
  };

  return ( 

    <ContextApp.Provider value={value}>
      {children}
    </ContextApp.Provider>

  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any
}.isRequired;
