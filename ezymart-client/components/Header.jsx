import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Link from 'next/link';
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from "react-icons/bs";
import { signOut } from 'firebase/auth';
import auth from '../features/firebase.config';
import { logOut } from '../features/auth/authSlice';

const Header = () => {
    const { email } = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(logOut())
            })
            .finally()
    };

    return (
        <>
            {
                ['lg'].map((expand) => (
                    <Navbar key={expand} expand={expand} className="py-4 headerBg">
                        <Container>
                            <Link href="/" className='text-decoration-none text-dark fs-2 fw-bold'>ezymart</Link>
                            <Navbar.Toggle className='rounded-1 border-0' aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        ezymart
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="align-items-center justify-content-end flex-grow-1 pe-3 fw-bold">
                                        <Link className='text-decoration-none text-secondary p-2' href="/">Home</Link>
                                        <Link className='text-decoration-none text-secondary p-2' href="/about">About</Link>
                                        <NavDropdown
                                            title="Shop"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <div className='px-3' style={{ width: "15rem" }}>
                                                <div className='row'>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavDropdown>
                                        <NavDropdown
                                            title="Blog"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <div className='px-3' style={{ width: "15rem" }}>
                                                <div className='row'>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavDropdown>
                                        <NavDropdown
                                            title="Pages"
                                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                                        >
                                            <div className='px-3' style={{ width: "15rem" }}>
                                                <div className='row'>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                    <div className='col-4 p-3'>
                                                        <Link href="#action3" className="text-decoration-none text-dark">Shop</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </NavDropdown>
                                        <Link className='text-decoration-none text-secondary p-2' href="/">Contact</Link>
                                    </Nav>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search product ..."
                                            className="rounded-1"
                                            aria-label="Search"
                                        />
                                        <Button
                                            variant="dark"
                                            className="text-light fw-bold border-0 rounded-1"
                                        ><BsSearch /></Button>
                                    </Form>
                                    <nav className='ms-3 d-flex gap-4 fs-5 nav_icon'>
                                        <Link href="/wishlist" className='text-decoration-none text-dark cart_position'>
                                            <FaRegHeart />
                                            <span className='bg-danger text-light'>0</span>
                                        </Link>
                                        <Link href="/cart" className='text-decoration-none text-dark cart_position'>
                                            <RiShoppingBasket2Line size={24} />
                                            <span className='bg-danger text-light'>0</span>
                                        </Link>
                                        {email ?
                                            <Button variant='danger' className='fw-bold' onClick={handleLogOut}>Log out</Button> :
                                            <Link href="/login" className='text-decoration-none text-dark cart_position'>
                                                <Button variant='danger' className='fw-bold'>Log in</Button>
                                            </Link>
                                        }
                                    </nav>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))
            }
        </>
    );
};

export default Header;