import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    console.log(products);

    return (
        <div>
            <h2 className='mb-4'>Electronics & Computers</h2>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                {products
                    .filter(product => product.category === "Electronics & Computers")
                    .slice(0, 4)
                    .map((item, index) => (
                        <ProductCard
                            key={index}
                            item={item}
                        />
                    ))}
            </Row>
        </div>
    );
};

export default Products;