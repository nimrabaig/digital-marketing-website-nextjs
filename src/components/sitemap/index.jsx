import React from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderTwo from "@/src/layout/headers/header-2";
import FooterTwo from "@/src/layout/footers/footer-2";
import category_shape_1 from "@assets/img/category/shape-1.png";
import category_shape_2 from "@assets/img/category/shape-2.png";
import { useRef, useState, useEffect } from "react";

const Sitemap = () => {
  const services = [
    {
      title: "Link building",
      link: "services/seo/link-building-services",
    },
    {
      title: "Local SEO",
      link: "/services/seo/technical-seo",
    },
    { title: "Technical SEO", link: "/services/seo/technical-seo" },
  ];

  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const mouseRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const r = mouseRef.current.getBoundingClientRect();
      setX(e.clientX - (r.left + Math.floor(r.width / 2)));
      setY(e.clientY - (r.top + Math.floor(r.height / 2)));
    };

    const handleMouseLeave = () => {
      setX(1);
      setY(1);
    };

    const mouseElem = mouseRef.current;
    mouseElem.addEventListener("mousemove", handleMouseMove);
    mouseElem.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      mouseElem.removeEventListener("mousemove", handleMouseMove);
      mouseElem.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <>
      <HeaderTwo />
      <main>
        <section
          id="mousemove"
          ref={mouseRef}
          style={{ "--x": x, "--y": y, marginBottom: 130 }}
          className="tp-category-area p-relative fix pt-0 pb-120"
        >
          <div className="tp-category-shape">
            <Image
              className="shape-1 mousemove__image"
              src={category_shape_1}
              alt="theme-pure"
            />
            <Image
              className="shape-2 mousemove__image"
              src={category_shape_2}
              alt="theme-pure"
            />
          </div>

          <div className="container-fluid tp-form-wrap tp-form-wrap-one">
            <div className="row">
              <div className="col-md-12 text-center mt-30">
                <h2>Sitemap</h2>
                <ul
                  className="sitemap-list mt-20 ml-40"
                  style={{
                    listStyle: "none",
                    textAlign: "left",
                    position: "relative",
                    zIndex: 99,
                    fontSize: 18,
                  }}
                >
                  <li style={{ padding: "7px 0" }}>
                    <Link href="/">Home</Link>
                  </li>
                  <li style={{ padding: "7px 0" }}>
                    <Link href="/about-us">About us</Link>
                  </li>
                  <li style={{ padding: "7px 0" }}>
                    Services
                    <ul style={{ listStyle: "none" }} className="ml-20">
                      <li style={{ padding: "7px 0" }}>
                        <ul style={{ listStyle: "none" }}>
                          <li style={{ padding: "7px 0" }}>
                            <Link href="/services/search-engin-optimization">
                              Search engine optimization
                            </Link>
                            <ul style={{ listStyle: "none" }} className="ml-10">
                              {services.map((service, index) => (
                                <li key={index}>
                                  <Link href={service.link}>
                                    {`(${index + 1}) ${service.title}`}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li style={{ padding: "7px 0" }}>
                            <Link href="/services/search-engin-optimization">
                              Website design and development
                            </Link>
                          </li>
                          <li style={{ padding: "7px 0" }}>
                            <Link href="/services/social-media-marketing">
                              Social media marketing
                            </Link>
                          </li>
                          <li style={{ padding: "7px 0" }}>
                            <Link href="/services/pay-per-click">
                              Pay per click
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li style={{ padding: "7px 0" }}>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li style={{ padding: "7px 0" }}>
                    <Link href="/pricing">Pricing</Link>
                  </li>
                  <li style={{ padding: "7px 0" }}>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterTwo />
    </>
  );
};

export default Sitemap;
