import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Loading } from './Loading';
import useFetch from '../hooks/useFetch';
import { ThemeContext } from '../context/themeContext';
import { useCart } from '../context/CartContext'; 
import {Modal} from './Modal'; 

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
  };
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { addToCart } = useCart(); 

  const [showModal, setShowModal] = useState<boolean>(false);

  const { data, error, loading } = useFetch<Product>(`/products/${productId}`);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false); 
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setShowModal(true); 
  };

  const dismissModal = () => {
    setShowModal(false);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p>An error occurred</p>;
  }

  if (!data) {
    return <p>Product not found</p>;
  }

  return (
    <div className="cards-container">
      <div className="card" style={{ backgroundColor: theme.primaryColor, color: theme.foreground }}>
        <h2>{data.title}</h2>
        <img className="detail-img" src={data.image} alt={data.title} />
        <h3>Category: {data.category}</h3>
        <h3>Description: {data.description}</h3>
        <h3>Rating: {data.rating.rate}</h3>
        <h3>Price: ${data.price}</h3>
        <div className="detail-buttons">
          <button className="btn" style={{ backgroundColor: theme.background, color: theme.foreground }} onClick={() => navigate(-1)}>
            Go Back
          </button>
          <button className="btn" style={{ backgroundColor: theme.background, color: theme.foreground }} onClick={() => handleAddToCart(data)}>
            Add to Cart
          </button>
        </div>
      </div>
      {showModal && <Modal dismissModal={dismissModal} theme={theme} />}

    </div>
  );
};

export default ProductDetail;
