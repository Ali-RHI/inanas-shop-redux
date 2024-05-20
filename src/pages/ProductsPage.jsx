import { useEffect, useState } from 'react';
import Card from '../components/Card.jsx';
import Loader from '../components/Loader.jsx';
// import { useProducts } from '../context/ProductsContext.jsx';

import styles from './ProductsPage.module.css';
import {
	createQueryObject,
	filterProducts,
	getInitialQuery,
	searchProducts,
} from '../helpers/helper.js';
import { useSearchParams } from 'react-router-dom';
import SearchBox from '../components/SearchBox.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/product/productSlice.js';

function ProductsPage() {
	const dispatch = useDispatch();
	const { products,loading } = useSelector((store) => store.product);
	// const products = useProducts();

	const [displayed, setDisplayed] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState({});

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	useEffect(() => {
		setDisplayed(products);
		setQuery(getInitialQuery(searchParams));
	}, [products]);
	useEffect(() => {
		setSearchParams(query);
		setSearch(query.search || '');
		let finalProducts = searchProducts(products, query.search);
		finalProducts = filterProducts(finalProducts, query.category);
		setDisplayed(finalProducts);
	}, [query]);

	return (
		<>
			<SearchBox
				search={search}
				setSearch={setSearch}
				setQuery={setQuery}
			/>
			<div className={styles.container}>
				<div className={styles.products}>
					{loading && <Loader />}
					{displayed.map((p) => (
						<Card
							key={p.id}
							data={p}
						/>
					))}
				</div>
				<Sidebar
					query={query}
					setQuery={setQuery}
				/>
			</div>
		</>
	);
}

export default ProductsPage;
