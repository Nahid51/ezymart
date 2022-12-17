import Head from 'next/head';
import Link from 'next/link';
import { ButtonGroup, Container, Dropdown, DropdownButton, Nav } from 'react-bootstrap';
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
              nahid
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
