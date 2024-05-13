import { createContext, useContext, useReducer } from 'react';
import { sumProducts } from '../helpers/helper.js';

const initialState = {
	selectedItems: [],
	itemsCounter: 0,
	total: 0,
	checkout: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			if (
				!state.selectedItems.find((item) => item.id === action.payload)
			) {
				state.selectedItems.push({ ...action.payload, quantity: 1 });
			}
			return {
				selectedItems: [...state.selectedItems],
				checkout: false,
				...sumProducts(state.selectedItems),
			};
			break;

		default:
			throw new Error('Invalid action!');
	}
};

const CartContext = createContext();

function CartProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
}

const useCart = () => {
	const { state, dispatch } = useContext(CartContext);
	return [state, dispatch];
};

export default CartProvider;
export { useCart };
