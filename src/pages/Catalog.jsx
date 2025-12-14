import Product from "../components/Product";
import "./Catalog.css";

// Product List using local images from public/images folder
const productList = [
  { 
    id: 1, 
    name: 'Ultimate Keyboard', 
    price: 120.00, 
    imageUrl: '/images/keyboard.jpg'
  },
  { 
    id: 2, 
    name: 'Ergonomic Mouse', 
    price: 45.50, 
    imageUrl: '/images/mouse.jpg'
  },
  { 
    id: 3, 
    name: '4K Gaming Monitor', 
    price: 399.99, 
    imageUrl: '/images/monitor.jpg'
  },
  { 
    id: 4, 
    name: 'HD Webcam Pro', 
    price: 75.00, 
    imageUrl: '/images/webcam.png'
  },
  { 
    id: 5, 
    name: 'Noise Cancelling Headphones', 
    price: 199.00, 
    imageUrl: '/images/headset.png'
  },
  { 
    id: 6, 
    name: 'High Performance Memory', 
    price: 89.99, 
    imageUrl: '/images/memory.png'
  },
];

function Catalog(){
  return(
    <div className="catalog">
      <h1 className="catalog-title">Our Amazing Catalog</h1>
      
      <div className="product-grid">
        {productList.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;