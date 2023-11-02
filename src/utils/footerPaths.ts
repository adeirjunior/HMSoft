const {download, legal} = {
    download: '/download/',
    legal: '/legal/'
}

type FooterPathsType = {
    title: string;
    childrens: Children[]
}

type Children = {
    name: string;
    href: string;
}

export const footerPaths: FooterPathsType[] = [
  {
    title: "Company",
    childrens: [
      {
        name: "about",
        href: "/about",
      },
      {
        name: "carrers",
        href: "/carrers",
      },
      {
        name: "brand center",
        href: "/brand",
      },
      {
        name: "blog",
        href: "https://blog.hmsoft.co",
      },
    ],
  },
  {
    title: "Help Center",
    childrens: [
      {
        name: "Discord Server",
        href: "#",
      },
      {
        name: "Twitter",
        href: "#",
      },
      {
        name: "Facebook",
        href: "#",
      },
      {
        name: "Contact Us",
        href: "#",
      },
    ],
  },
  {
    title: "Legal",
    childrens: [
      {
        name: "Privacy Policy",
        href: `${legal}privacy`,
      },
      {
        name: "Licensing",
        href: `${legal}license`,
      },
      {
        name: "Terms & Conditions",
        href: `${legal}terms`,
      },
    ],
  },
  {
    title: "Download",
    childrens: [
      {
        name: "iOS",
        href: `${download}ios`,
      },
      {
        name: "Android",
        href: `${download}android`,
      },
      {
        name: "Windows",
        href: `${download}windows`,
      },
      {
        name: "MacOS",
        href: `${download}macos`,
      },
    ],
  },
];