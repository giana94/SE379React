import React from 'react';
import { Loading } from './Loading';
import useFetch from '../hooks/useFetch';
import Box from './Box';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

const Products: React.FC = () => {
    const { data: productsData, loading, error } = useFetch<Product[]>('/products');

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>An error occurred: {error.message}</p>;
    }

    if (!productsData || productsData.length === 0) {
        return <div>No products found</div>;
    }

    return (
        <div>
            <Box data={productsData} round={true} />
        </div>
    );
};

export default Products;
