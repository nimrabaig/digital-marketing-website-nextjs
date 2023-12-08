import Image from "next/image";
import React, { useRef } from "react";

import shape_1 from "@assets/img/brand/bing 1.svg";
import shape_2 from "@assets/img/brand/facebook 1.svg";
import shape_3 from "@assets/img/brand/instagram 1.svg";
import shape_4 from "@assets/img/brand/youtube 1.svg";
import shape_5 from "@assets/img/brand/reddit 1.svg";
import shape_6 from "@assets/img/brand/quora 1.svg";
import shape_7 from "@assets/img/brand/google 1.svg";
import shape_8 from "@assets/img/brand/adobe.svg";

import brand_thumb from "@assets/img/brand/img-1.png";
import bg_shape from "@assets/img/brand/shape-1.png";

// shape data
const shape_img = [
  { id: "1 mousemove__image", img: shape_1, label: "Bing" },
  { id: "2 mousemove__image", img: shape_2, label: "Facebook" },
  { id: "3 mousemove__image", img: shape_3, label: "Instagram" },
  { id: "4 mousemove__image", img: shape_4, label: "Youtube" },
  { id: "5 mousemove__image", img: shape_5, label: "reddit" },
  { id: "6 mousemove__image", img: shape_6, label: "Quora" },
  { id: "7 mousemove__image", img: shape_7, label: "Google" },
  { id: "8 mousemove__image", img: shape_8, label: "Adobe" },
];

const BrandArea = () => {
  const mouseRef = useRef(null);
  const handleMouseMove = (e) => {
    const r = mouseRef.current.getBoundingClientRect();
    mouseRef.current.style.setProperty(
      "--x",
      e.clientX - (r.left + Math.floor(r.width / 2))
    );
    mouseRef.current.style.setProperty(
      "--y",
      e.clientY - (r.top + Math.floor(r.height / 2))
    );
  };

  const handleMouseLeave = () => {
    mouseRef.current.style.setProperty("--x", 1);
    mouseRef.current.style.setProperty("--y", 1);
  };

  return (
    // <>
    //   <div
    //     id="mousemove"
    //     ref={mouseRef}
    //     onMouseMove={handleMouseMove}
    //     onMouseLeave={handleMouseLeave}
    //     className="tp-brand-area pt-160 p-relative"
    //   >
    //     <div className="container container-large">
    //       <div className="tp-brand-shape">
    //         <Image className="bg-shape" src={bg_shape} alt="theme-pure" />
    //       </div>
    //       <div className="row">
    //         <div className="col-lg-12">
    //           <div className="tp-brand-wrapper">
    //             <div className="tp-brand-shape">
    //               {shape_img.map((item, i) => (
    //                 <div
    //                   className={`shape-${item.id}`}
    //                   style={{
    //                     backgroundColor: "#fff",
    //                     borderRadius: "50%",
    //                     height: 100,
    //                     width: 100,
    //                   }}
    //                 >
    //                   <Image
    //                     key={i}
    //                     // className={`shape-${item.id}`}
    //                     style={{
    //                        position: "absolute",
    //                        left: "29%",
    //                        top: "29%"
    //                     }}
    //                     src={item.img}
    //                     alt="theme-pure"
    //                   />
    //                 </div>
    //               ))}
    //             </div>
    //             {/* <div className="tp-brand-thumb text-center fadeUp">
    //               <Image src={brand_thumb} alt="theme-pure" />
    //             </div> */}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        background: "transparent",
        alignItems: "center",
        height: "max-content",
        flexWrap: "wrap",
        margin: "15px 10px",
      }}
    >
      {shape_img.map((item, i) => (
        <div className="shapeWrapper">
          <Image
            key={i}
            src={item.img}
            alt={item.label}
            className="shapeImage"
          />
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default BrandArea;
