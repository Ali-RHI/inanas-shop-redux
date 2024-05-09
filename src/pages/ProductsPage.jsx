import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import Card from '../components/Card.jsx';
import Loader from '../components/Loader.jsx';
import { useProducts } from '../context/ProductsContext.jsx';

import styles from './ProductsPage.module.css';

function ProductsPage() {
	const products = useProducts();

	const [search, setSearch] = useState('');

	const searchHandler = () => {};

	return (
		<>
			<div>
				<input
					type="text"
					placeholder="Seach ..."
					value={search}
					onChange={(e) =>
						setSearch(e.target.value.toLowerCase().trim())
					}
				/>
				<button onClick={searchHandler}>
					<ImSearch />
				</button>
			</div>
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
		</>
	);
}

export default ProductsPage;
