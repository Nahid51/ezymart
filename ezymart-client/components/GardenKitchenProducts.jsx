import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const GardenKitchenProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    console.log(products);

    return (
        <div>
            <h2>Garden & Kitchen</h2>
            <hr />
            <Row xs={1} md={3} lg={4} xl={5} className="g-4">
                {products
                    .filter(product => product.category === "Garden & Kitchen")
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
                            src="https://i.ibb.co/GFG2HP5/banner11-h18.jpg"
                            alt="Fourth slide"
                        />
                    </div>
                    <Carousel.Caption className='text-end homePoster'>
                        <h2 className='text-light fw-bold fs-3'>Kitchen Appliance</h2>
                        <p className='text-light'>Enhance the Way you Cook</p>
                        <Link href="/" className='text-warning fw-bold fs-5'>
                            <small>Buy Now</small>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default GardenKitchenProducts;