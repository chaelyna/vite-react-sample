import { useCart } from '../context/CartContext.jsx';

export default function Cart() {
    const { items, inc, dec, remove, total } = useCart();
    const list = Object.values(items);

    return (
        <div className="cart-sticky">
            <h2>장바구니</h2>

            {list.length === 0 && <p>담긴 상품 없당.</p>}

            {list.map(({ product, count }) => (
                <div className="cart-item" key={product.id}>
                    <span className="cart-name">{product.name} x {count}</span>
                    <div className="cart-controls">
                        <button className="btn sm" onClick={() => inc(product.id)}>+</button>
                        <button className="btn sm" onClick={() => dec(product.id)}>-</button>
                        <button className="btn sm" onClick={() => remove(product.id)}>삭제</button>
                    </div>
                </div>
            ))}

            <h3>총합: {total.toLocaleString()}원</h3>
            <button className="btn block" onClick={() => alert('내공냠냠')}>
                주문하기
            </button>
        </div>
    );
}
