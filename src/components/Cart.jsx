import { useCart } from '../context/CartContext.jsx';

export default function Cart() {
    const { items, inc, dec, remove, total } = useCart();
    const list = Object.values(items);

    return (
        <section className="cart">
            <h2>장바구니</h2>

            <div id="cartItems">
                {list.length === 0 && <p>담긴 상품이 없습니다.</p>}

                {list.map(({ product, count }) => (
                    <div className="cartItem" key={product.id}>
                        <button onClick={() => inc(product.id)}>+</button>
                        <span>{product.name} x {count}</span>
                        <button onClick={() => dec(product.id)}>-</button>
                        <span>{(product.price * count).toLocaleString()}원</span>
                        <button onClick={() => remove(product.id)}>삭제</button>
                    </div>
                ))}
            </div>

            <h3 className="total">총합: <span id="totalAmount">{total.toLocaleString()}</span>원</h3>

            <div className="order-area">
                <button
                    id="orderBtn"
                    className="order-button"
                    onClick={() => alert('주문해 주셔서 감사합니다!')}
                >
                    주문하기
                </button>
            </div>
        </section>
    );
}
