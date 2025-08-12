import Header from './components/Header.jsx';
import ProductCarousel from './components/ProductCarousel.jsx';
import Cart from './components/Cart.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <ProductCarousel />
        <Cart />
      </main>
    </>
  );
}
