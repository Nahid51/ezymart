import React from 'react';
import { Container } from 'react-bootstrap';

const Welcome = () => {
    return (
        <div className='welcome bg-dark'>
            <Container>
                <div className='d-flex align-items-center justify-content-between text-light'>
                    <p className='py-2 m-0'>Welcome to our online store!</p>
                    <small className='fw-bold'>CALL US: +8801369784512</small>
                </div>
            </Container>
        </div>
    );
};

export default Welcome;