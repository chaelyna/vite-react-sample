import { useCart } from '../context/CartContext.jsx';

export default function ProductCard({ product }) {
    const { add } = useCart();

    return (
        <div className="product-card">
            <img src={product.img} alt={product.name} />
            <div className="card-body">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-desc">{product.desc}</p>
                <strong className="product-price">{product.price.toLocaleString()}원</strong>
                <button className="btn block" onClick={() => add(product)}>
                    장바구니 담기
                </button>
            </div>
        </div>
    );
}
