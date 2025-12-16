import { useEffect, useState } from "react";
import Product from "../components/Product";
import dataService from "../services/dataService";
import "./Catalog.css";

function Catalog(){
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    // Retrieve the catalog from the service (mock data)
    const products = dataService.getProducts();
    setCatalog(products);
  }, []);

  return(
    <div className="catalog">
      <h1 className="catalog-title">Our Amazing Catalog</h1>
      
      <div className="product-grid">
        {catalog.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;