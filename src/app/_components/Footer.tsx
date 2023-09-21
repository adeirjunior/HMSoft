'use client';

import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterSitemapLinks() {
  const currentYear = new Date().getFullYear()
  return (
    <Footer>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="/about">
                About
              </Footer.Link>
              <Footer.Link href="/carrers">
                Careers
              </Footer.Link>
              <Footer.Link href="/brand">
                Brand Center
              </Footer.Link>
              <Footer.Link href="https://blog.hmsoft.co">
                Blog
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Discord Server
              </Footer.Link>
              <Footer.Link href="#">
                Twitter
              </Footer.Link>
              <Footer.Link href="#">
                Facebook
              </Footer.Link>
              <Footer.Link href="#">
                Contact Us
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="/legal/privacy">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="/legal/license">
                Licensing
              </Footer.Link>
              <Footer.Link href="/legal/terms">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="/download/ios">
                iOS
              </Footer.Link>
              <Footer.Link href="/download/android">
                Android
              </Footer.Link>
              <Footer.Link href="/download/windows">
                Windows
              </Footer.Link>
              <Footer.Link href="/download/macos">
                MacOS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            by="HMSoft™"
            href="/"
            year={currentYear}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}


