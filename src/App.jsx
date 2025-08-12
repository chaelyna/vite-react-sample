import Header from './components/Header.jsx';
import ProductCard from './components/ProductCard.jsx';
import Cart from './components/Cart.jsx';
import products from './data/products.js';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <div className="layout">
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <Cart />
      </div>
    </>
  );
}
