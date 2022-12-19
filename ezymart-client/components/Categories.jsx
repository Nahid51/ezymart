import Link from 'next/link';
import React from 'react';
import { Container } from 'react-bootstrap';

const Categories = () => {
    return (
        <div className='headerBg py-5'>
            <Container>
                <h2><b>Top</b> Categories</h2>
                <div className='d-flex justify-content-between'>
                    <div style={{ background: "#FFFFFF" }} className="p-5">
                        <img src="https://i.ibb.co/3YVmnKG/h21-img-1.jpg" alt="Photo1" />
                        <div>
                            <h4>Mobile & Tablet</h4>
                            <div>
                                <p>Iphone</p>
                                <p>Samsung</p>
                                <p>Nokia</p>
                                <p>Blackberry</p>
                            </div>
                            <Link href="/">View More</Link>
                        </div>
                    </div>
                    <div style={{ background: "#FFFFFF" }}>
                        <img src="" alt="" />
                        <div>
                            <h4>Mobile & Tablet</h4>
                            <div>
                                <p>Iphone</p>
                                <p>Samsung</p>
                                <p>Nokia</p>
                                <p>Blackberry</p>
                            </div>
                            <Link href="/">View More</Link>
                        </div>
                    </div>
                    <div style={{ background: "#FFFFFF" }}>
                        <img src="" alt="" />
                        <div>
                            <h4>Mobile & Tablet</h4>
                            <div>
                                <p>Iphone</p>
                                <p>Samsung</p>
                                <p>Nokia</p>
                                <p>Blackberry</p>
                            </div>
                            <Link href="/">View More</Link>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Categories;




// https://i.ibb.co/d6Kpb1V/h21-img-3.jpg
// https://i.ibb.co/pJNjRZR/h21-img-4.jpg
// https://i.ibb.co/brXx1kk/h21-img-5.jpg
// https://i.ibb.co/4Z0DHzj/h21-img-6.jpg
// https://i.ibb.co/3YVmnKG/h21-img-1.jpg
// https://i.ibb.co/Z6JMMb7/h21-img-2.jpg