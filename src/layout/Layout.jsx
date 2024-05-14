import { PiShoppingCartSimpleBold } from 'react-icons/pi';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

import styles from "./Layout.module.css"

function Layout({ children }) {
	const [state] = useCart();
	return (
		<>
			<header className={styles.header}>
				<Link to="/products">Inanas Shop</Link>
				<Link to="/checkout">
					<PiShoppingCartSimpleBold />
					{!!state.itemsCounter && <span>{state.itemsCounter}</span>}
				</Link>
			</header>
			{children}
			<footer className={styles.footer}>
				<p>Developed by Ali with ❤️</p>
			</footer>
		</>
	);
}

export default Layout;
