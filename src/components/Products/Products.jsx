import React, {useContext, useEffect, useState} from 'react';
import ProductsCard from '../ProductsCard/ProductsCard';
import ContextApp from '../../context/ContextApp';
import './Products.css';
import Loading from '../Loading/Loading';
function Products() {

  const{products, setProducts } = useContext(ContextApp);
  const[loading, setLoading] = useState([true]);

  useEffect(() => {
    const fetchProducts = async () => {
      fetch('https://caramelocafe.vercel.app/Data/products.json')
        .then((response)=> response.text())
        .then((texto) => {
          const jsonData = JSON.parse(texto);
          setProducts(jsonData);
          setLoading(false);
        });
    };
    fetchProducts();
  }, []);
  return (

    (loading && <Loading />) || (
      <section className="products container">
        {
          products.filter(product => product.status === 'true').map((product) => (
            <ProductsCard key={product.idProduct} data={product} />))
        }

      </section>
    )

    
  );
}

export default Products;
