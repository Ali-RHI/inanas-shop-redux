import { useProducts } from '../context/ProductsContext.jsx';

import styles from './ProductsPage.module.css';

function ProductsPage() {
	const products = useProducts();
	console.log(products);

	return (
		<div className={styles.container}>
			<div className={styles.products}>
				{products.map((p) => (
					<p key={p.id}>{p.title}</p>
				))}
			</div>
			<div>Sidebar</div>
		</div>
	);
}

export default ProductsPage;
