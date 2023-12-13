import Link from "next/link";
import Image from "next/image";
import AngleArrow from "@/src/svg/angle-arrow";
import React, { useEffect, useRef, useState } from "react";

import category_shape_1 from "@assets/img/category/shape-1.png";
import category_shape_2 from "@assets/img/category/shape-2.png";

import category_icon_1 from "@assets/img/category/Consulting.svg";
import category_icon_2 from "@assets/img/category/planing.svg";
import category_icon_3 from "@assets/img/category/developement.svg";
import category_icon_4 from "@assets/img/category/marketing.svg";
import category_icon_5 from "@assets/img/category/conversion.svg";

const descriptions = [
  "Collaborate with our experts to shape a strategic digital roadmap that aligns with your brand's unique identity. ",
  "Craft bespoke strategies for digital triumphs, ensuring your brand stands out in the competitive online landscape. ",
  "Experience your brand come to life digitally, utilizing cutting-edge technologies for captivating online experiences. ",
  "Ignite brand awareness with targeted strategies, propelling your brand forward across various online platforms. ",
  "Optimize user experiences to transform clicks into conversions, achieving measurable success in the digital realm. ",
];

const CategoryArea = () => {
  const [x, setX] = useState(1);
  const [y, setY] = useState(1);
  const mouseRef = useRef(null);
  const [displayItem, setDisplayItem] = useState(null);

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
      <section
        id="mousemove"
        ref={mouseRef}
        style={{ "--x": x, "--y": y }}
        className="tp-category-area p-relative fix pt-120 pb-200"
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
          <span className="shape-3">
            <svg
              width="1093"
              height="128"
              viewBox="0 0 1093 128"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 50.9659C56.3481 18.4898 187.969 -31.1736 271.668 29.9813C376.292 106.425 498.092 148.394 553.787 115.918C609.482 83.4422 719.311 -19.4825 816.127 29.9813C912.943 79.4452 896.286 151.392 1092 110.422"
                stroke="currentColor"
              />
            </svg>
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-category-title-wrapper text-center">
                <h3 className="tp-section-title">
                  Our <span className="title-color">Digital</span> <br />{" "}
                  Marketing Process
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-6">
              <div className="tp-category-content-wrapper d-flex">
                <div
                  className="tp-category-content one"
                  onMouseEnter={() => setDisplayItem(0)}
                >
                  <div className="tp-category-icon">
                    <Image src={category_icon_1} alt="theme-pure" />
                    <h4 className="tp-category-content-title">Consulting</h4>
                  </div>
                </div>
                <div
                  className="tp-category-content two"
                  onMouseEnter={() => setDisplayItem(1)}
                  onMouseLeave={() => setDisplayItem(null)}
                >
                  <div className="tp-category-icon">
                    <Image src={category_icon_2} alt="theme-pure" />
                    <h4 className="tp-category-content-title">Planning</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 order-3 order-md-2">
              <div className="tp-category-content-wrapper d-flex">
                <div
                  className="tp-category-content three"
                  onMouseEnter={() => setDisplayItem(2)}
                  onMouseLeave={() => setDisplayItem(null)}
                >
                  <div className="tp-category-icon">
                    <Image src={category_icon_3} alt="theme-pure" />
                    <h4 className="tp-category-content-title">Development</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 order-2 order-md-3">
              <div className="tp-category-content-wrapper d-flex">
                <div
                  className="tp-category-content four"
                  onMouseEnter={() => setDisplayItem(3)}
                  onMouseLeave={() => setDisplayItem(null)}
                >
                  <div className="tp-category-icon">
                    <Image src={category_icon_4} alt="theme-pure" />
                    <h4 className="tp-category-content-title">Marketing</h4>
                  </div>
                </div>
                <div
                  className="tp-category-content five"
                  onMouseEnter={() => setDisplayItem(4)}
                  onMouseLeave={() => setDisplayItem(null)}
                >
                  <div className="tp-category-icon">
                    <Image src={category_icon_5} alt="theme-pure" />
                    <h4 className="tp-category-content-title">Conversion</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {displayItem !== null && <div className="description">{descriptions[displayItem]}</div>}
        </div>
      </section>
    </>
  );
};

export default CategoryArea;
