import { useEffect, useState } from 'react';
import Card from '../components/Card.jsx';
import Loader from '../components/Loader.jsx';
import { useProducts } from '../context/ProductsContext.jsx';

import styles from './ProductsPage.module.css';
import { FaListUl } from 'react-icons/fa';
import {
	createQueryObject,
	filterProducts,
	getInitialQuery,
	searchProducts,
} from '../helpers/helper.js';
import { useSearchParams } from 'react-router-dom';
import SearchBox from '../components/SearchBox.jsx';

function ProductsPage() {
	const products = useProducts();

	const [displayed, setDisplayed] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState({});

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		setDisplayed(products);
		setQuery(getInitialQuery(searchParams));
	}, [products]);
	useEffect(() => {
		setSearchParams(query);
		setSearch(query.search || "");
		let finalProducts = searchProducts(products, query.search);
		finalProducts = filterProducts(finalProducts, query.category);
		setDisplayed(finalProducts);
	}, [query]);


	const categoryHandler = (event) => {
		const { tagName } = event.target;
		const category = event.target.innerText.toLowerCase();
		console.log(category);
		if (tagName != 'LI') return;
		setQuery((query) => createQueryObject(query, { category }));
	};

	return (
		<>
		<SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
			
			<div className={styles.container}>
				<div className={styles.products}>
					{!displayed.length && <Loader />}
					{displayed.map((p) => (
						<Card
							key={p.id}
							data={p}
						/>
					))}
				</div>
				<div>
					<div>
						<FaListUl />
						<p>Categories</p>
					</div>
					<ul onClick={categoryHandler}>
						<li>All</li>
						<li>Electronics</li>
						<li>Jewelery</li>
						<li>Men's Clothing</li>
						<li>Women's Clothing</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default ProductsPage;
