import Card from '../components/Card.jsx';
import Loader from '../components/Loader.jsx';
import { useProducts } from '../context/ProductsContext.jsx';

import styles from './ProductsPage.module.css';

function ProductsPage() {
	const products = useProducts();

	return (
		<div className={styles.container}>
			<div className={styles.products}>
				{!products.length && <Loader />}
				{products.map((p) => (
					<Card
						key={p.id}
						data={p}
					/>
				))}
			</div>
			<div>Sidebar</div>
		</div>
	);
}

export default ProductsPage;
