import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

export default function ProductCard({ product }) {
    const { add } = useCart();
    const [liked, setLiked] = useState(false);
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        add(product);
        setAdded(true);
    };

    return (
        <div className="product-card" onClick={handleAdd} role="button">
            <img src={product.img} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <strong>{product.price.toLocaleString()}원</strong>

            <div className="icons" onClick={(e) => e.stopPropagation()}>
                <img
                    src={liked ? '/images/heart_filled.png' : '/images/heart.png'}
                    alt="찜"
                    className="icon heart-icon"
                    onClick={() => setLiked(!liked)}
                />
                <img
                    src={added ? '/images/cart_filled.png' : '/images/cart.png'}
                    alt="장바구니"
                    className="icon cart-icon"
                    onClick={handleAdd}
                />
            </div>
        </div>
    );
}
