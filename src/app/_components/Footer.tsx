"use client";

import { footerPaths, footerSocialPaths } from "@/utils";
import { Footer } from "flowbite-react";

export default function FooterSitemapLinks() {
  const currentYear = new Date().getFullYear();
  return (
    <Footer>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          {footerPaths.map(({ title, childrens }, index) => {
            return (
              <div key={index}>
                <Footer.Title title={title} />
                <Footer.LinkGroup col>
                  {childrens.map(({ href, name }, index) => {
                    return (
                      <Footer.Link
                        className="capitalize"
                        key={index}
                        href={href}
                      >
                        {name}
                      </Footer.Link>
                    );
                  })}
                </Footer.LinkGroup>
              </div>
            );
          })}
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="HMSoft™" href="/" year={currentYear} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {footerSocialPaths.map(({Icon, href}, index) => (
              <Footer.Icon key={index} href={href} icon={Icon} />
            ))}
          </div>
        </div>
      </div>
    </Footer>
  );
}
