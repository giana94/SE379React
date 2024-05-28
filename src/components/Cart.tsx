import '../cart.css';
import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/themeContext";
import { useCart } from '../context/CartContext';
import { useParams, useNavigate } from 'react-router-dom';

const Cart: React.FC = () => {
    const { theme } = useContext(ThemeContext);
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
                firstName: '',
                lastName: '',
                address: '',
                city: '',
                state: '',
                zipCode: ''
            });
            const [errorMsg, setErrorMsg] = useState('');


    const calculateTotal = () => {
        return cart.reduce((total: number, item: { price: number; quantity: number; }) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handleCheckout = () => {
        setShowCheckoutModal(true);
    };



    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            setShowCheckoutModal(false);
            clearCart();
        }
    };
    
    const handleCloseCheckoutModal = () => {
        setShowCheckoutModal(false);
    };
    
    const clearCart = () => {
        cart.forEach((item: { id: any; }) => removeFromCart(item.id));
    };
    


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };


        const validateForm = () => {
            const { firstName, lastName, address, city, state, zipCode } = formData;
            if (!firstName || !lastName || !address || !city || !state || !zipCode) {
                setErrorMsg('All fields are required.');
                return false;
            }
            if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
                setErrorMsg('Please use only letters in the name.');
                return false;
            }
            if (!/^\d{5}(-\d{4})?$/.test(zipCode)) {
                setErrorMsg('Zip Code is invalid.');
                return false;
            }
            setErrorMsg('');
            return true;
        };

    return (
        <div className='cartPage' style={{ backgroundColor: theme.background, color: theme.foreground }}>
            <button className="btn" style={{ backgroundColor: theme.primaryColor, color: theme.foreground }} onClick={() => navigate(-2)}>
                Continue Shopping
            </button>
            <h1>Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.title}</h3>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => decreaseQuantity(item.id)} style={{ backgroundColor: theme.primaryColor, color: theme.foreground }}>-</button>
                                    <button onClick={() => increaseQuantity(item.id)} style={{ backgroundColor: theme.primaryColor, color: theme.foreground }}>+</button>
                                </div>
                                <button onClick={() => removeFromCart(item.id)} style={{ backgroundColor: theme.primaryColor, color: theme.foreground }}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <h2>Total: ${calculateTotal()}</h2>
            <button onClick={handleCheckout} style={{ backgroundColor: theme.primaryColor, color: theme.foreground }}>Checkout</button>

            {showCheckoutModal && (
                <div className="modal" style={{ backgroundColor: theme.primaryColor, color: theme.primaryColor }}>
                    <div className="modal-content">                        
                        <h2 style={{color: theme.foreground }}>Checkout</h2>
                        <form onSubmit={handleSubmit}>
                            <label style={{color: theme.foreground }}>
                                First Name:
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
                            </label>
                            <label style={{color: theme.foreground }}>
                                Last Name:
                                <input type="text" name="lastName"  value={formData.lastName} onChange={handleChange}/>
                            </label>
                            <label style={{color: theme.foreground }}>
                                Address:
                                <input type="text" name="address" value={formData.address} onChange={handleChange}/>
                            </label>
                            <label style={{color: theme.foreground }}>
                                City:
                                <input type="text" name="city" value={formData.city} onChange={handleChange}/>
                            </label>
                            <label style={{color: theme.foreground }}>
                                State:
                                <input type="text" name="state" value={formData.state} onChange={handleChange} />
                            </label>
                            <label style={{color: theme.foreground }}>
                                Zip Code:
                                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} />
                            </label>
                            {errorMsg && <p className="error-message">{errorMsg}</p>}
                            <div className='checkoutBtns'>
                                <button type="button" onClick={handleCloseCheckoutModal} style={{ backgroundColor: theme.background, color: theme.foreground }}>Cancel</button>
                                <button type="submit" style={{ backgroundColor: theme.background, color: theme.foreground }}>Continue to Payment</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
