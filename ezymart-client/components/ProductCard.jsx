import React from 'react';
import { Button, Card, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaRegHeart } from "react-icons/fa";
import { BiGitCompare } from "react-icons/bi";

const ProductCard = ({ item }) => {
    const { image, name, desc, category, price } = item;
    const renderTooltip1 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Add To Whitelist
        </Tooltip>
    );
    const renderTooltip2 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Add To Compare
        </Tooltip>
    );

    return (
        <div>
            <Col>
                <Card className='hoverEffect border-0'>
                    <div className='img-wrapper'>
                        <Card.Img className='hover-zoom' variant="top" src={image} />
                    </div>
                    <Card.Body className='text-center'>
                        <Card.Text className='text-secondary'><small>{category}</small></Card.Text>
                        <Card.Title><small>{name}</small></Card.Title>
                        <Card.Text className='fw-bold text-warning'><small>{price}</small></Card.Text>
                        <Button variant="dark"><small>Add To Cart</small></Button>
                    </Card.Body>
                    <div className='position-absolute top-50 start-50 translate-middle text-dark d-none hoverItem'>
                        <div className='bg-light d-flex'>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip1}
                            >
                                <figure className='m-0 px-3 py-2 iconHover'>
                                    <FaRegHeart size={24} />
                                </figure>
                            </OverlayTrigger>
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip2}
                            >
                                <figure className='m-0 px-3 py-2 iconHover'>
                                    <BiGitCompare size={24} />
                                </figure>
                            </OverlayTrigger>
                        </div>
                    </div>
                </Card>
            </Col>
        </div>
    );
};

export default ProductCard;