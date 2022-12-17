import Head from 'next/head';
import Link from 'next/link';
import { Carousel, Container, Dropdown, DropdownButton, Nav } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import { FiMonitor } from "react-icons/fi";
import { RxHand } from "react-icons/rx";
import { MdOutlineToys, MdPets, MdSportsSoccer } from "react-icons/md";
import { GiLargeDress } from "react-icons/gi";

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
          <div className='row'>
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

                    <Carousel.Item interval={3000}>
                      <img
                        className="d-block w-100"
                        src="https://i.ibb.co/23D2DD2/banner8-h18.jpg"
                        alt="First slide"
                      />
                      <Carousel.Caption className='text-start'>
                        <p>CURVED 4K UHD TV</p>
                        <h3>Active Crystal Color 4k UHD Picture Quality</h3>
                        <small>FROM $69.99</small>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={3000}>
                      <img
                        className="d-block w-100"
                        src="https://i.ibb.co/9v7sPnL/banner5-h18.jpg"
                        alt="Second slide"
                      />
                      <Carousel.Caption className='text-start'>
                        <p>ELECTRONICS</p>
                        <h3>Best For Your Home</h3>
                        <small> Starting at $59.99</small>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={3000}>
                      <img
                        className="d-block w-100"
                        src="https://i.ibb.co/SBQNsxD/banner6-h18.jpg"
                        alt="Third slide"
                      />

                      <Carousel.Caption className='text-start'>
                        <p>BEST SELLER</p>
                        <h3>Luxury Watches</h3>
                        <small>Starting at $59.99</small>
                      </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={3000}>
                      <img
                        className="d-block w-100"
                        src="https://i.ibb.co/w629ghT/banner7-h18.jpg"
                        alt="Fourth slide"
                      />
                      <Carousel.Caption className='text-start'>
                        <p>NEW STEP</p>
                        <h3>Apple iPhone</h3>
                        <small>Starting at $59.99</small>
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
                      <Carousel.Caption className='text-start'>
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
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
