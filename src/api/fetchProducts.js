const fetchProducts = async () =>{

  const response = await fetch('./products.json');
  const data = await response.json();
  console.log(data);
  return data;
  
};

export default fetchProducts;
