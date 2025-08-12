import React, { createContext, useContext, useMemo, useReducer } from 'react';

const CartContext = createContext(null);

function reducer(state, action) {
    switch (action.type) {
        case 'ADD': {
            const { product } = action;
            const prev = state.items[product.id];
            const count = prev ? prev.count + 1 : 1;
            return { ...state, items: { ...state.items, [product.id]: { product, count } } };
        }
        case 'INC': {
            const prev = state.items[action.id];
            if (!prev) return state;
            return { ...state, items: { ...state.items, [action.id]: { ...prev, count: prev.count + 1 } } };
        }
        case 'DEC': {
            const prev = state.items[action.id];
            if (!prev) return state;
            const next = prev.count - 1;
            const items = { ...state.items };
            if (next <= 0) delete items[action.id];
            else items[action.id] = { ...prev, count: next };
            return { ...state, items };
        }
        case 'REMOVE': {
            const items = { ...state.items };
            delete items[action.id];
            return { ...state, items };
        }
        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, { items: {} });

    const api = useMemo(() => ({
        items: state.items,
        add: (product) => dispatch({ type: 'ADD', product }),
        inc: (id) => dispatch({ type: 'INC', id }),
        dec: (id) => dispatch({ type: 'DEC', id }),
        remove: (id) => dispatch({ type: 'REMOVE', id }),
        total: Object.values(state.items).reduce((s, { product, count }) => s + product.price * count, 0),
    }), [state.items]);

    return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be used within CartProvider');
    return ctx;
}
