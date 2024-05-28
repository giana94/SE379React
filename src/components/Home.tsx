import React, { useContext } from 'react';
import { Loading } from './Loading';
import useFetch from '../hooks/useFetch';
import Slider from 'react-slick';
import { ThemeContext } from '../context/themeContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../home.css';

interface Product {
    id: number;
    title: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

const Home: React.FC = () => {
    const { data: productsData, loading, error } = useFetch<Product[]>('/products');
    const { theme } = useContext(ThemeContext);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>An error occurred: {error.message}</p>;
    }

    if (!productsData || productsData.length === 0) {
        return <div>No products found</div>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="jumbotron" >
            <h1>Welcome to the One Stop Store!</h1>
            <Slider {...settings}>
                {productsData.map(product => (
                    <div key={product.id}>
                        <img
                            src={product.image}
                            alt={product.title}
                            
                        />
                        <h3 style={{ color: theme.foreground }}>{product.title}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Home;
