import { useDispatch, useSelector } from 'react-redux';
import BaskeSidebar from '../components/BaskeSidebar.jsx';
import BasketCard from '../components/Basketcard.jsx';
// import { useCart } from '../context/CartContext.jsx';

import styles from './CheckoutPage.module.css';

function ChckoutPage() {
	const state = useSelector((store) => store.cart);

	if (!state.itemsCounter) {
		return (
			<div className={styles.container}>
				<p>Empty</p>
			</div>
		);
	}
	return (
		<div className={styles.container}>
			<BaskeSidebar
				state={state}
			/>
			<div className={styles.products}>
				{state.selectedItems.map((product) => (
					<BasketCard
						key={product.id}
						data={product}
					/>
				))}
			</div>
		</div>
	);
}

export default ChckoutPage;
