import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./nav-menu";
import useSticky from "@/src/hooks/use-sticky";

import logo_img from "@assets/img/logo/lumenta-logo.png";
import logo_shape from "@assets/img/hero/hero-2/logo-shape.png";
import SearchPopup from "@/src/modals/search-popup";
import Sidebar from "@/src/modals/sidebar";

const HeaderTwo = () => {
  const { sticky } = useSticky();
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="tp-header-2-area tp-header-height p-relative">
  
        <div
          id="header-sticky"
          className={`tp-header-2-bottom header__sticky p-relative ${
            sticky && "tp-header-sticky"
          }`}
        >
          <div
            className="tp-header-2-bottom-inner p-relative"
            style={{
              backgroundImage: `url(/assets/img/hero/hero-2/header-bg.png)`,
            }}
          >
            <div className="container-fluid gx-0">
              <div className="row gx-0 align-items-center">
                <div className="col-xxl-2 col-xl-2 col-lg-9 col-md-5">
                  <div className="tp-header-2-main-left d-flex align-items-center justify-content-xl-center justify-content-xxl-end p-relative">
                    <div className="tp-header-2-logo">
                      <Link href="/">
                        <Image
                          src={logo_img}
                          alt="theme-pure"
                          width={140}
                          height={40}
                        />
                      </Link>
                      {/* <Image
                        src={logo_shape}
                        className="logo-shape"
                        alt="theme-pure"
                      /> */}
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-7 d-none d-xl-block">
                  <div className="tp-main-menu-2-area d-flex align-items-center">
                    <div className="tp-main-menu">
                      <nav id="tp-mobile-menu">
                        <NavMenu />
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-7">
                  {/* <div className="tp-header-2-right d-none d-xxl-block">
                                 <div className="tp-header-2-main-right d-flex align-items-center justify-content-xxl-end">
                                    <div className="tp-header-2-phone d-flex align-items-center">
                                       <div className="tp-header-2-phone-icon">
                                          <i className="fa-solid fa-phone"></i>
                                       </div>
                                       <div className="tp-header-2-phone-content">
                                          <span>Phone: <br /> <a href="tel:01900678956">+88 1900 6789 56</a></span>
                                       </div>
                                    </div>
                                    <div className="tp-header-2-btn">
                                       <Link href="/contact">Get an Quatre <i className="fa-regular fa-angle-right"></i></Link>
                                    </div>
                                    <div className="tp-header-search search-open-btn d-none d-xxl-block"  onClick={() => setSearchOpen(true)}>
                                       <button> <i className="fa-regular fa-magnifying-glass"></i></button>
                                    </div>
                                 </div>
                              </div> */}
                  <div className="tp-header-2-mobile-menu d-flex justify-content-end d-block">
                  <div className="tp-header-2-phone align-items-center">
                                       <div className="tp-header-2-phone-icon">
                                          <i className="fa-solid fa-phone"></i>
                                       </div>
                                       <div className="tp-header-2-phone-content">
                                          <a href="tel:16138072399">+1 (613) 807 - 2399</a>
                                       </div>
                                    </div>
                    <div
                      className="tp-header-2-hamburger-btn offcanvas-open-btn"
                      onClick={() => setSidebarOpen(true)}
                      style={{
                        backgroundImage: `url(/assets/img/icon/header-hamburger-shape.png)`,
                      }}
                    >
                      <button className="hamburger-btn">
                        <span>
                          <svg
                            width="29"
                            height="24"
                            viewBox="0 0 29 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 1.13163C0 0.506972 0.499692 0 1.11538 0H20.4487C21.0644 0 21.5641 0.506972 21.5641 1.13163C21.5641 1.7563 21.0644 2.26327 20.4487 2.26327H1.11538C0.499692 2.26327 0 1.7563 0 1.13163ZM27.8846 10.5619H1.11538C0.499692 10.5619 0 11.0689 0 11.6935C0 12.3182 0.499692 12.8252 1.11538 12.8252H27.8846C28.5003 12.8252 29 12.3182 29 11.6935C29 11.0689 28.5003 10.5619 27.8846 10.5619ZM14.5 21.1238H1.11538C0.499692 21.1238 0 21.6308 0 22.2555C0 22.8801 0.499692 23.3871 1.11538 23.3871H14.5C15.1157 23.3871 15.6154 22.8801 15.6154 22.2555C15.6154 21.6308 15.1157 21.1238 14.5 21.1238Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default HeaderTwo;
