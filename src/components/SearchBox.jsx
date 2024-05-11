import { ImSearch } from 'react-icons/im';
import { createQueryObject } from '../helpers/helper.js';

import styles from './SearchBox.module.css'

function SearchBox({ search, setQuery, setSearch }) {
	const searchHandler = () => {
		setQuery((query) => createQueryObject(query, { search }));
	};

	return (
		<div className={styles.search}>
			<input
				type="text"
				placeholder="Seach ..."
				value={search}
				onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
			/>
			<button onClick={searchHandler}>
				<ImSearch />
			</button>
		</div>
	);
}

export default SearchBox;
