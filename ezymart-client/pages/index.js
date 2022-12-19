import Head from 'next/head';
import Link from 'next/link';
import { Button, Carousel, Container, Dropdown, DropdownButton, Nav } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import { FiMonitor } from "react-icons/fi";
import { RxHand, RxCounterClockwiseClock } from "react-icons/rx";
import { MdOutlineToys, MdPets, MdSportsSoccer, MdPayment } from "react-icons/md";
import { GiLargeDress } from "react-icons/gi";
import { CiStopwatch } from "react-icons/ci";
import { ImCreditCard } from "react-icons/im";
import { BsChatSquareText, BsTruck } from "react-icons/bs";
import Categories from '../components/Categories';

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
                    <text>Electronics</text>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" className='d-flex align-items-center gap-2 py-3 px-3 border text-decoration-none text-dark hoverItem'>
                    <RxHand className='icons' />
                    <text>Home & Garder</text>
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
                    <text>Fashion</text>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" className='d-flex align-items-center gap-2 py-3 px-3 border text-decoration-none text-dark hoverItem'>
                    <MdSportsSoccer className='icons' size={20} />
                    <text>Sporting Goods</text>
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Link href="/" className='d-flex align-items-center gap-2 py-3 px-3 border text-decoration-none text-dark hoverItem'>
                    <MdPets className='icons' />
                    <text>Pet Supplies</text>
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
                        <Carousel.Item interval={3000}>
                          <img
                            className="d-block w-100"
                            src="https://i.ibb.co/T8w6QgF/banner2-h18.jpg"
                            alt="First photo"
                          />
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
                        <Carousel.Item interval={3000}>
                          <img
                            className="d-block w-100"
                            src="https://i.ibb.co/t8d4BtV/banner3-h18.jpg"
                            alt="Second photo"
                          />
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
                        <Carousel.Item interval={3000}>
                          <img
                            className="d-block w-100"
                            src="https://i.ibb.co/dLdVfTY/banner4-h18.jpg"
                            alt="Third photo"
                          />
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
                    <Carousel.Item interval={3000}>
                      <img
                        className="d-block w-100"
                        src="https://i.ibb.co/7JdHhDy/banner1-h18.jpg"
                        alt="Fourth slide"
                      />
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

          <section className='d-flex justify-content-around my-5'>
            <div className='d-flex align-items-center gap-3'>
              <BsTruck size={42} className="text-warning" />
              <div>
                <b>FREE DELIVERY</b>
                <p className='m-0 text-secondary'>For all orders over $100</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-3'>
              <RxCounterClockwiseClock size={40} className="text-warning" />
              <div>
                <b>90 DAYS RETURN</b>
                <p className='m-0 text-secondary'>If goods have problems</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-3'>
              <ImCreditCard size={40} className="text-warning" />
              <div>
                <b>SECURE PAYMENT</b>
                <p className='m-0 text-secondary'>100% secure paymen</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-3'>
              <BsChatSquareText size={36} className="text-warning" />
              <div>
                <b>24/7 SUPPORT</b>
                <p className='m-0 text-secondary'>Dedicated support</p>
              </div>
            </div>
          </section>
        </Container>

        <Categories />

      </main>

      <Footer />
    </div>
  )
}
