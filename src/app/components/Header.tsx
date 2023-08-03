'use client';

import { Navbar } from 'flowbite-react';
import Image from 'next/image'

const Header = () => {
  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand
        href="https://flowbite-react.com"
      >
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          HMSoft
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#"
        >
          <p>
            Home
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          <p>
            About
          </p>
        </Navbar.Link>
        <Navbar.Link href="#">
          Services
        </Navbar.Link>
        <Navbar.Link href="#">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header