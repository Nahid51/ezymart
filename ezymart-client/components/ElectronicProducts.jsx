import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ElectronicProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    console.log(products);

    return (
        <div>
            <h2>Electronics & Computers</h2>
            <hr />
            <Row xs={1} md={3} lg={4} xl={5} className="g-4">
                {products
                    .filter(product => product.category === "Electronics & Computers")
                    .slice(0, 5)
                    .map((item, index) => (
                        <ProductCard
                            key={index}
                            item={item}
                        />
                    ))}
            </Row>

            <Carousel controls={false} indicators={false} className="mt-5">
                <Carousel.Item>
                    <div className='img-wrapper'>
                        <img
                            className="d-block w-100 hover-zoom"
                            src="https://i.ibb.co/grJhbfb/banner9-h18.jpg"
                            alt="Fourth slide"
                        />
                    </div>
                    <Carousel.Caption className='text-start top-0 homePoster'>
                        <small className='text-light'>NEW PRODUCTS</small>
                        <h2 className='text-primary fw-bold mt-2'>Laptops & Desktops</h2>
                        <p className='text-dark'>In-Store Pickup Available</p>
                        <Link href="/" className='text-light fw-bold fs-5'>
                            <small>Buy Now</small>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ElectronicProducts;