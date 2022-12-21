import Head from 'next/head';
import Link from 'next/link';
import { Button, Card, Carousel, Col, Container, Dropdown, DropdownButton, Nav, Row } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import { FiMonitor } from "react-icons/fi";
import { RxHand, RxCounterClockwiseClock } from "react-icons/rx";
import { MdOutlineToys, MdPets, MdSportsSoccer, MdPayment } from "react-icons/md";
import { GiLargeDress } from "react-icons/gi";
import { ImCreditCard } from "react-icons/im";
import { BsChatSquareText, BsTruck } from "react-icons/bs";
import Categories from '../components/Categories';
import ElectronicProducts from '../components/ElectronicProducts';
import ClothProducts from '../components/ClothProducts';
import GardenKitchenProducts from '../components/GardenKitchenProducts';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ezymart</title>
        <meta name="description" content="Online shopping app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Welcome />
      <Header />

      <main className='my-3'>
        <Container>
          <section className='row'>
            <div className='col-12 col-lg-4'>
              <Nav className='d-flex flex-column'>
                <Nav.Item className='d-flex gap-3 border py-3 px-2 bg-danger text-light fw-bold'>
                  <div>All Departments</div>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" className='d-flex align-items-center gap-2 py-3 px-3 border text-decoration-none text-dark hoverItem'>
                    <FiMonitor className='icons' />
                    <text>Electronics & Computers</text>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" className='d-flex align-items-center gap-2 py-3 px-3 border text-decoration-none text-dark hoverItem'>
                    <RxHand className='icons' />
                    <text>Beauty & Health</text>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" className='d-flex align-items-center gap-2 py-3 px-3 border text-decoration-none text-dark hoverItem'>
                    <MdOutlineToys className='icons' size={20} />
                    <text>Toys & Kids</text>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" className='d-flex align-items-center gap-2 py-3 px-3 border text-decoration-none text-dark hoverItem'>
                    <GiLargeDress className='icons' size={20} />
                    <text>Food & Grocery</text>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" className='d-flex align-items-center gap-2 py-3 px-3 border text-decoration-none text-dark hoverItem'>
                    <MdSportsSoccer className='icons' size={20} />
                    <text>Sports & Outdoors</text>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" className='d-flex align-items-center gap-2 py-3 px-3 border text-decoration-none text-dark hoverItem'>
                    <MdPets className='icons' />
                    <text>Pet Supplies</text>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" className='d-flex align-items-center gap-2 py-3 px-3 border text-decoration-none text-dark hoverItem'>
                    <text>More ...</text>
                  </Link>
                </Nav.Item>
              </Nav>
            </div>
            <div className='col-12 col-lg-8'>
              <div className='row gx-0'>
                <div className='col-12 col-md-8'>
                  <Carousel fade pause='hover'>

                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block w-100"
                        src="https://i.ibb.co/23D2DD2/banner8-h18.jpg"
                        alt="First slide"
                      />
                      <Carousel.Caption className='text-start top-0'>
                        <p>CURVED 4K UHD TV</p>
                        <h2>Active Crystal Color 4k UHD Picture Quality</h2>
                        <small>FROM <b className='text-warning'>$69.99</b></small>
                        <br />
                        <Button
                          variant="warning"
                          className="text-light border-0 rounded-1 mt-5"
                        >Shop Now</Button>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block w-100"
                        src="https://i.ibb.co/9v7sPnL/banner5-h18.jpg"
                        alt="Second slide"
                      />
                      <Carousel.Caption className='text-start top-0'>
                        <p>ELECTRONICS</p>
                        <h2>Best For Your Home</h2>
                        <small> Starting at <b className='text-warning'>$59.99</b></small>
                        <br />
                        <Button
                          variant="warning"
                          className="text-light border-0 rounded-1 mt-5"
                        >Shop Now</Button>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block w-100"
                        src="https://i.ibb.co/SBQNsxD/banner6-h18.jpg"
                        alt="Third slide"
                      />

                      <Carousel.Caption className='text-start top-0'>
                        <p>BEST SELLER</p>
                        <h2>Luxury Watches</h2>
                        <small>Starting at <b className='text-warning'>$59.99</b></small>
                        <br />
                        <Button
                          variant="warning"
                          className="text-light border-0 rounded-1 mt-5"
                        >Shop Now</Button>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={5000}>
                      <img
                        className="d-block w-100"
                        src="https://i.ibb.co/w629ghT/banner7-h18.jpg"
                        alt="Fourth slide"
                      />
                      <Carousel.Caption className='text-start top-0'>
                        <p>NEW STEP</p>
                        <h2>Apple iPhone</h2>
                        <small>Starting at <b className='text-warning'>$59.99</b></small>
                        <br />
                        <Button
                          variant="warning"
                          className="text-light border-0 rounded-1 mt-5"
                        >Shop Now</Button>
                      </Carousel.Caption>
                    </Carousel.Item>

                  </Carousel>
                  <div className="row gx-0">
                    <div className='col-4'>
                      <Carousel controls={false} indicators={false}>
                        <Carousel.Item>
                          <div className='img-wrapper'>
                            <img
                              className="d-block w-100 hover-zoom"
                              src="https://i.ibb.co/T8w6QgF/banner2-h18.jpg"
                              alt="First photo"
                            />
                          </div>
                          <Carousel.Caption className='d-flex flex-column p-0'>
                            <small className='fs-6'>Need Exclusive Perfumes</small>
                            <small>
                              <Link href="/" className='text-light'>Explore</Link>
                            </small>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>

                    </div>
                    <div className='col-4'>
                      <Carousel controls={false} indicators={false}>
                        <Carousel.Item>
                          <div className='img-wrapper'>
                            <img
                              className="d-block w-100 hover-zoom"
                              src="https://i.ibb.co/t8d4BtV/banner3-h18.jpg"
                              alt="Second photo"
                            />
                          </div>
                          <Carousel.Caption className='d-flex flex-column p-0'>
                            <small className='fs-6'>Blender Combo</small>
                            <small>
                              <Link href="/" className='text-light'>Start Buying</Link>
                            </small>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                    <div className='col-4'>
                      <Carousel controls={false} indicators={false}>
                        <Carousel.Item>
                          <div className='img-wrapper'>
                            <img
                              className="d-block w-100 hover-zoom"
                              src="https://i.ibb.co/dLdVfTY/banner4-h18.jpg"
                              alt="Third photo"
                            />
                          </div>
                          <Carousel.Caption className='d-flex flex-column p-0'>
                            <small className='fs-6'>Unio Leather Bags</small>
                            <small>
                              <Link href="/" className='text-light'>Shop now</Link>
                            </small>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-4 displayPhoto'>
                  <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                      <div className='img-wrapper'>
                        <img
                          className="d-block w-100 hover-zoom"
                          src="https://i.ibb.co/7JdHhDy/banner1-h18.jpg"
                          alt="Fourth slide"
                        />
                      </div>
                      <Carousel.Caption className='text-start top-0'>
                        <small className='text-danger fw-bold'>NEW SHOTES</small>
                        <h3 className='text-dark fw-bold mt-4 mb-5'>Best Price & Great Quality</h3>
                        <small>
                          <Link href="/" className='text-dark fw-bold fs-5'>View Product</Link>
                        </small>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
            </div>
          </section>

          <section className='row'>
            <div className='col-6 col-md-3 mt-5'>
              <BsTruck size={42} className="text-warning" />
              <div>
                <b>FREE DELIVERY</b>
                <p className='m-0 text-secondary'>For all orders over $100</p>
              </div>
            </div>
            <div className='col-6 col-md-3 mt-5'>
              <RxCounterClockwiseClock size={40} className="text-warning" />
              <div>
                <b>90 DAYS RETURN</b>
                <p className='m-0 text-secondary'>If goods have problems</p>
              </div>
            </div>
            <div className='col-6 col-md-3 mt-5'>
              <ImCreditCard size={40} className="text-warning" />
              <div>
                <b>SECURE PAYMENT</b>
                <p className='m-0 text-secondary'>100% secure paymen</p>
              </div>
            </div>
            <div className='col-6 col-md-3 my-5'>
              <BsChatSquareText size={36} className="text-warning" />
              <div>
                <b>24/7 SUPPORT</b>
                <p className='m-0 text-secondary'>Dedicated support</p>
              </div>
            </div>
          </section>
        </Container>

        <Categories />

        <Container>
          <div className='row my-5'>
            <div className='col-12 col-lg-6 mt-3'>
              <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                  <div className='img-wrapper'>
                    <img
                      className="d-block w-100 hover-zoom"
                      src="https://i.ibb.co/pwP6PC2/h21-banner-4.jpg"
                      alt="Fourth slide"
                    />
                  </div>
                  <Carousel.Caption className='text-start top-0'>
                    <small className='text-dark fw-bold'>BEST SELLER</small>
                    <h3 className='text-dark mt-2 mb-3'>Cookware & <br /> Kitchen Tools</h3>
                    <small>
                      <Link href="/" className='text-dark fw-bold fs-5'>Buy Now</Link>
                    </small>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>

            <div className='col-12 col-lg-6 mt-3'>
              <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                  <div className='img-wrapper'>
                    <img
                      className="d-block w-100 hover-zoom"
                      src="https://i.ibb.co/KhRT03w/h21-banner-5.jpg"
                      alt="Fourth slide"
                    />
                  </div>
                  <Carousel.Caption className='text-start top-0'>
                    <small className='text-dark fw-bold'>HEALTH APP</small>
                    <h3 className='text-dark mt-2 mb-3'>Kitchen tools for <br /> smart cooking</h3>
                    <small>
                      <Link href="/" className='text-dark fw-bold fs-5'>Buy Now</Link>
                    </small>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </Container>

        <Container>
          <ElectronicProducts />

          <ClothProducts />

          <GardenKitchenProducts />

          <section id="brands" className='my-5'>
            <h2><b>Best Seller </b>Brands</h2>
            <hr />
            <Row md={3} lg={4} xl={5} className="g-4 text-center">
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Daraz</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Chaldal</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Shajgoj</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Pickaboo</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Othoba</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Priyoshop</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Ajkerdeal</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Banglashoppers</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Sindabad</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title>Rokomari</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <hr />
          </section>

        </Container>

      </main>

      <Footer />
    </div>
  )
}
