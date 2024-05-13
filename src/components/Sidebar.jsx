import { createQueryObject } from '../helpers/helper.js';
import { FaListUl } from 'react-icons/fa';

import styles from './Sidebar.module.css';
import { categories } from '../constants/list.js';


function Sidebar({ setQuery, query }) {
	const categoryHandler = (event) => {
		const { tagName } = event.target;
		const category = event.target.innerText.toLowerCase();
		console.log(category);
		if (tagName != 'LI') return;
		setQuery((query) => createQueryObject(query, { category }));
	};

	return (
		<div className={styles.sidebar}>
			<div>
				<FaListUl />
				<p>Categories</p>
			</div>
			<ul onClick={categoryHandler}>
				{categories.map((p) => (
					<li
						key={p.id}
						className={
							p.type.toLowerCase() === query.category
								? styles.selected
								: null
						}>
						{p.type}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Sidebar;
