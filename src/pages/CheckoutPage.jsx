import BaskeSidebar from '../components/BaskeSidebar.jsx';
import BasketCard from '../components/Basketcard.jsx';
// import { useCart } from '../context/CartContext.jsx';

import styles from "./CheckoutPage.module.css"

function ChckoutPage() {
	// const [state, dispatch] = useCart();
	// const clickHandler = (type, data) => {
	// 	dispatch({ type, payload: data });
	// };
	// if (!state.itemsCounter) {
	// 	return (
	// 		<div className={styles.container}>
	// 			<p>Empty</p>
	// 		</div>
	// 	);
	// }
	return (
		<div className={styles.container}>
			{/* <BaskeSidebar
				state={state}
				clickHandler={clickHandler}
			/>
			<div className={styles.products}>
				{state.selectedItems.map((product) => (
					<BasketCard
						key={product.id}
						data={product}
						clickHandler={clickHandler}
					/>
				))}
			</div> */}
		</div>
	);
}

export default ChckoutPage;
