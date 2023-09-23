'use client'

import {loggedOutNavPaths} from '@/utils/navPaths'
import { Navbar } from 'flowbite-react'
import { usePathname } from 'next/navigation'

const LoggedOut = () => {
  const currentPath = usePathname()

  return (
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand
        href="/"
      >
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          HMSoft
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {loggedOutNavPaths.map((path, index) => {
          const isActive = currentPath === path.href
          return (
            <Navbar.Link
              key={index}
              active={isActive}
              href={path.href}
            >
              {path.title}
            </Navbar.Link>
          )
        })
        }

      </Navbar.Collapse>
    </Navbar>
  )
}

export default LoggedOut