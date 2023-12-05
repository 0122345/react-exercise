import { useEffect, useState } from "react";
import "./productlist.css"

export const ProductList = () => {

   const [products, setProducts] = useState([]);
 
     useEffect(() => {
         fetch("http://localhost:8000/products")
         .then(Response => Response.json())
         .then(data => setProducts(data));
     },[]);

     return (
      <section>
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
