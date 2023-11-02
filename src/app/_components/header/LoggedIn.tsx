'use client'

import { loggedInNavPaths } from '@/utils'
import { Navbar, Dropdown } from 'flowbite-react'
import { usePathname, useRouter } from 'next/navigation'
import {RxDashboard} from 'react-icons/rx'
import {AiOutlineSetting, AiOutlineDollar} from 'react-icons/ai'
import {RiAccountCircleLine} from 'react-icons/ri'

const Header = () => {
  const currentPath = usePathname()
  const router = useRouter();

  const signOut = () => {
    fetch('/api/auth/logout')
      .then(() => {
        router.refresh()
        router.push("login")
      })
      .catch(err => console.log(err.message))
  };

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
        {loggedInNavPaths.map((path, index) => {
          const isActive = currentPath === path.href
          if (path.title === "Profile") {
            return (
              <Dropdown key={index} label="Account" placement="left-start">
                <Dropdown.Header>
                  <span className="block text-sm">
                    Bonnie Green
                  </span>
                  <span className="block truncate text-sm font-medium">
                    bonnie@flowbite.com
                  </span>
                </Dropdown.Header>
                <Dropdown.Item href='/profile' icon={RiAccountCircleLine}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item href='/dashboard' icon={RxDashboard}>
                  Dashboard
                </Dropdown.Item>
                <Dropdown.Item href='/account/settings' icon={AiOutlineSetting}>
                  Settings
                </Dropdown.Item>
                <Dropdown.Item icon={AiOutlineDollar}>
                  Earnings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => signOut()}>
                  Sign out
                </Dropdown.Item>
              </Dropdown>
            )
          } else {
            return (
              <Navbar.Link
                key={index}
                active={isActive}
                href={path.href}
              >
                {path.title}
              </Navbar.Link>
            )
          }
        })
        }

      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header