import { useEffect } from 'react';
import Product from './Product';

import { useDispatch, useSelector } from 'react-redux'; 
import { loadProducts } from '../Redux/productsLocalStorage.js';

function Products() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products); 


  // Charger les produits au démarrage si nécessaire
  useEffect(() => {
    loadProducts(dispatch);
  }, [dispatch]);

  console.log(products); 

  return (
    <div>
      <h2 style={{color: "white", width: "50%", margin: "0 auto", textAlign: "left", paddingBottom: "3rem", fontWeight: "500"}}>Top Products Launching Today</h2>
      {loading ? (
        <p style={{color: '#fff', paddingLeft: '1rem'}}>Loading products...</p> 
      ) : error ? (
        <p style={{color: 'red', paddingLeft: '1rem'}}>{error}</p>
      ) : (
        <div className="products-list">
          {products.length === 0 ? (
            <p style={{color: '#fff', paddingLeft: '1rem'}}>No products found</p>
          ) : (
          products.map((product) => (
            <Product
              key={product.id} 
              image={product.image} 
              textTitle={product.textTitle} 
              textDiscribe={product.textDiscribe} 
              textAbout1={product.textAbout1}
              textAbout2={product.textAbout2} 
              textAbout3={product.textAbout3} 
              productId={product.id} 
            />
          ))
          )}
        </div>
      )}
    </div>
  );
}

export default Products;
