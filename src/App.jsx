import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import DetailesPage from './pages/DetailesPage.jsx';
import PageNotFound from './pages/PageNotFound.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';
// import ProductsProvider from './context/ProductsContext.jsx'; 
// import CartProvider from './context/CartContext.jsx';
import Layout from './layout/Layout.jsx';

function App() {
	return (
		// <CartProvider>
		<Layout>
			{/* <ProductsProvider> */}
			<Routes>
				<Route
					index
					element={
						<Navigate
							to="/products"
							replace
						/>
					}
				/>
				<Route
					path="/products"
					element={<ProductsPage />}
				/>
				<Route
					path="/products/:id"
					element={<DetailesPage />}
				/>
				<Route
					path="/checkout"
					element={<CheckoutPage />}
				/>
				<Route
					path="/*"
					element={<PageNotFound />}
				/>
			</Routes>

			{/* </ProductsProvider> */}
		</Layout>
		/* </CartProvider> */
	);
}

export default App;
