import { useCallback,useEffect, useState } from "react";
import "./productlist.css"

export const ProductList = () => {

   const [products, setProducts] = useState([]);
   const [url,setUrl] = useState("http://localhost:8000/products");
 
     const fetchProducts = useCallback(async () => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
      }, [url]);

     useEffect(() => {
      fetchProducts();
     }, [fetchProducts]);

     return (
      <section>
        <div className="filter">
         <button onClick={() => setUrl("http://localhost:8000/products")}>ALL</button>
         <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock only</button>
         </div>
        {products.map((product) => (
            <div className="card" key={product.id}>
                <p className="id">{product.id}</p>
              <p className="name">{product.name}</p>  
              <p className="info">
                <span className="p">${product.price}</span>
                <span className={product.in_stock ? "instock" : "unvailable" }>{product.in_stock ? "In stock" : "Unvailable" }</span>
                </p>
            </div>
            
        ))}
      </section>
  )
}
