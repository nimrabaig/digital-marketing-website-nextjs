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
    link: "/about",
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
      { link: "/services/1", title: "Search Engine Optimization" },
      { link: "/services/2", title: "Website Design & Development" }, 
      { link: "/services/3", title: "Social Media Marketing" }, 
      { link: "/services/4", title: "Pay Per Click" }, 
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
