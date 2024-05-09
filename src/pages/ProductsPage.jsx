import { useProducts } from '../context/ProductsContext.jsx';

function ProductsPage() {
	const products = useProducts();
	console.log(products);

	return (
		<div className={styles.container}>
			<div>
				{products.map((p) => (
					<p key={p.id}>{p.title}</p>
				))}
			</div>
			<div>Sidebar</div>
		</div>
	);
}

export default ProductsPage;
