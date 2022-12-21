import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookSquare, FaLinkedin, FaTwitter, FaWhatsappSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-dark text-light py-3'>
            <Container>
                <div className='row'>
                    <p className='col-12 col-lg-4'>Copyright &copy; 2022 <span className='text-warning'>ezymart</span>. All Right Reserved</p>
                    <div className='col-12 col-lg-4 pb-3'>
                        <div>
                            <FaFacebookSquare size={24} className="me-3" />
                            <FaTwitter size={24} className="me-3" />
                            <FaLinkedin size={24} className="me-3" />
                            <FaInstagram size={24} className="me-3" />
                            <FaWhatsappSquare size={24} className="me-3" />
                        </div>
                    </div>
                    <img className='col-12 col-lg-4' src="https://i.ibb.co/y8g56wH/payment.png" alt="FooterPhoto" />
                </div>
            </Container>
        </div>
    );
};

export default Footer;