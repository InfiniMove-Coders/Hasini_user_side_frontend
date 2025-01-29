import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './cart.css';
import Navbar1 from '../navbar/Navbar1';
import Navbar2 from '../navbar/Navbar2';
import Footer from '../footer/footer';

const Cart = () => {
	const navigate = useNavigate();
	const [cartItems, setCartItems] = useState([
		{ id: 1, name: 'Dairy Melts, Chocolate Bars', price: 165, quantity: 1, image: '/images/ganesh/Rectangle.png' },
		{ id: 2, name: 'Dairy Melts, Chocolate Bars', price: 165, quantity: 1, image: '/images/ganesh/Rectangle.png' },
		{ id: 3, name: 'Dairy Melts, Chocolate Bars', price: 165, quantity: 1, image: 'images/ganesh/Rectangle.png' },
	]);

	const updateQuantity = (id, change) => {
		setCartItems((prev) =>
			prev.map((item) =>
				item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
			)
		);
	};

	const removeItem = (id) => {
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	};

	const calculateSubtotal = (price, quantity) => price * quantity;
	const totalAmount = cartItems.reduce((total, item) => total + calculateSubtotal(item.price, item.quantity), 0);

	return (
		<>
			<div className='w-[100%] h-auto fixed top-[0px] z-[5]'>
				<Navbar1 />
				<Navbar2 />
			</div>
			<div className="cart-container md:mt-[120px] mt-[35dvw] mb-[10dvw] md:mb-[50px]">
				<div className="cart-header">
					<button className="back-button" onClick={() => navigate('/')}>← Cart</button>
				</div>

				<table className="cart-table">
					<thead>
						<tr>
							<th>Product</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Subtotal</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{cartItems.map((item) => (
							<tr key={item.id}>
								<td className="product-cell">
									<img src={item.image} alt={item.name} className="product-image" />
									{item.name}
								</td>
								<td>₹ {item.price.toFixed(2)}</td>
								<td>
									<div className="quantity-control">
										<button className="arrow-button" onClick={() => updateQuantity(item.id, 1)}>▲</button>
										<span>{item.quantity}</span>
										<button className="arrow-button" onClick={() => updateQuantity(item.id, -1)}>▼</button>
									</div>
								</td>
								<td>₹ {calculateSubtotal(item.price, item.quantity).toFixed(2)}</td>
								<td>
									<button type="button" className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className="cart-summary-section">
					<div className="cart-summary-container">
						<p className="cartDetails">Cart Total</p>
						<div className="cart-summary-content">
							<div className="cart-summary">
								<p>Sub total <span>₹ {totalAmount.toFixed(2)}</span></p>
								<hr />
								<p>Shipping <span>Free</span></p>
								<hr />
								<p>Total <span>₹ {totalAmount.toFixed(2)}</span></p>
							</div>

							<div className="cart-buttons">
								<button className="return-button" onClick={() => navigate('/')}>Return To Shop</button>
								<button className="update-button" onClick={() => window.location.reload()}>Update Cart</button>
								<button className="checkout-button">Proceed to Checkout</button>
							</div>
						</div>
					</div>

				</div>


			</div>
			<Footer />
		</>
	);
};

export default Cart;
