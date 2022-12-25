import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ClothProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("./products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='my-5'>
            <h2>Clothing & Apparel</h2>
            <hr />
            <Row xs={1} md={3} lg={4} xl={5} className="g-4">
                {products
                    .filter(product => product.category === "Clothing")
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
                            src="https://i.ibb.co/sgm70rb/banner10-h18.jpg"
                            alt="Fourth slide"
                        />
                    </div>
                    <Carousel.Caption className='text-start homePoster'>
                        <small className='text-primary'>NEW SHOES</small>
                        <h2 className='text-dark fw-bold mt-2'>Best Price & Great Quality</h2>
                        <p className='text-danger'>Sale up to 50% Off</p>
                        <Link href="/" className='text-dark fw-bold fs-5'>
                            <small>Buy Now</small>
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ClothProducts;