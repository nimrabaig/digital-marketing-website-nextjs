import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    home_icon: <HomeIcon />,
    title: "Home",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About Us",
    link: "/about-us",
    active: "",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Services",
    link: "",
    active: "",
    sub_menus: [
      {
        link: "/services/search-engin-optimization",
        title: "search-engine-optimization",
        has_dropdown: true,
        active: "",
        sub_menus: [
          {
            link: "/services/seo/link-building-services",
            title: "Link Building Services ",
            has_dropdown: false,
          },
          {
            link: "/services/seo/technical-seo",
            title: "Technical SEO",
            has_dropdown: false,
          },
          {
            link: "/services/seo/local-seo",
            title: "Local SEO",
            has_dropdown: false,
          },
        ],
      },
      {
        link: "/services/website-design-and-Development",
        title: "Website Design & Development",
      },
      {
        link: "/services/social-media-marketing",
        title: "Social Media Marketing",
      },
      { link: "/services/pay-per-click", title: "Pay Per Click" },
    ],
  },
  // {
  //   id: 4,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Pages",
  //   link: "/about",
  //   active: "",
  //   sub_menus: [
  //     { link: "/portfolio", title: "Portfolio" },
  //     { link: "/portfolio-details", title: "Portfolio Details" },
  //     { link: "/team", title: "Team" },
  //     { link: "/team-details", title: "Team Details" },
  //     { link: "/404", title: "404" },
  //   ],
  // },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/blog",
    active: "",
    sub_menus: [],
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Pricing",
    link: "/pricing",
    active: "",
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
];
export default menu_data;
