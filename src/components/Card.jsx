import React from 'react';
import { TbListDetails, TbShoppingBagCheck } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { productQuantity, shortenText } from '../helpers/helper.js';

import styles from './Card.module.css';
// import { useCart } from '../context/CartContext.jsx';
import { MdDeleteOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrease, increase, removeItem } from '../features/cart/cartSlice.js';

function Card({ data }) {
	const { id, title, image, price } = data;

	// const [state, dispatch] = useCart();
	const state = useSelector((store) => store.cart);
	const dispath = useDispatch()

	const quantity = productQuantity(state, id);


	const clickHandler = (type) => {
		// dispatch({ type, payload: data });
	};

	return (
		<div className={styles.card}>
			<img
				src={image}
				alt={title}
			/>
			<h3>{shortenText(title)}</h3>
			<p>$ {price}</p>
			<div className={styles.actions}>
				<Link to={`/products/${id}`}>
					<TbListDetails />
				</Link>
				<div>
					{quantity === 1 && (
						<button
							onClick={() => {
								dispath(removeItem(data));
							}}>
							<MdDeleteOutline />
						</button>
					)}
					{quantity > 1 && (
						<button
							onClick={() => {
								dispath(decrease(data));
							}}>
							-
						</button>
					)}
					{!!quantity && <span>{quantity}</span>}
					{quantity === 0 ? (
						<button
							onClick={() => {
								dispath(addItem(data));
							}}>
							<TbShoppingBagCheck />
						</button>
					) : (
						<button
							onClick={() => {
								dispath(increase(data));
							}}>
							+
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Card;
