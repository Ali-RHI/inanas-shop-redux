import { Link, useParams } from 'react-router-dom';
import { useProductDetailes } from '../context/ProductsContext.jsx';
import Loader from '../components/Loader.jsx';
import { SiOpenproject } from 'react-icons/si';
import { IoMdPricetag } from 'react-icons/io';
import { FaArrowLeft } from 'react-icons/fa';

import styles from './DetailesPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../features/product/productSlice.js';

function DetailesPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProducts());
	}, []);
	// const productDetailes = useProductDetailes(+id);
	const productDetailes = useSelector((store) =>
		store.product.products.find((i) => i.id === +id)
	);
	if (!productDetailes) return <Loader />;
	return (
		<div className={styles.container}>
			<img
				src={productDetailes.image}
				alt={productDetailes.title}
			/>
			<div className={styles.information}>
				<h3 className={styles.title}>{productDetailes.title}</h3>
				<p className={styles.description}>
					{productDetailes.description}
				</p>
				<p className={styles.category}>
					<SiOpenproject /> {productDetailes.category}
				</p>
				<div>
					<span className={styles.price}>
						<IoMdPricetag />
						{productDetailes.price} $
					</span>
					<Link to="/products">
						<FaArrowLeft />
						<span>Back to shop</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
export default DetailesPage;
