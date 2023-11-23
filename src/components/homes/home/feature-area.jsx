import React from 'react';  
import Link from 'next/link';
import Image from 'next/image';

import AngleArrow from '@/src/svg/angle-arrow'; 
import LineArrowFive from '@/src/svg/line-arrow-5';

import feature_img_1 from "@assets/img/feature/mission.png";
import feature_img_2 from "@assets/img/feature/vision.png";
import shape_1 from "@assets/img/feature/shape-1.png"; 
import shape_2 from "@assets/img/feature/shape-2.png"; 
import shape_3 from "@assets/img/feature/img-shape.png"; 


const feature_content = {
    feature_data: [
        {
            id: 1,
            img: feature_img_1,
            title: "Our Mission",
            subTitle: " Driving Success as Your Digital Marketing Agency",
            description: <>At Lumenta Internet Marketing Agency Canada, we're here to help make your business dreams a reality. We use smart strategies based on data to guide you toward your goals. Lumenta Digital Marketing Services Canada’s focus is on providing practical, top-notch digital marketing and IT solutions that work for your business. As your trusted Digital Marketing Agency USA and Canada, we're like your compass in the ever-changing world of digital marketing services USA trends.</>,
        },
        {
            id: 2,
            img: feature_img_2,
            title: "Our Vision",
            subTitle: "Your Strategic Digital Marketing Agency",
            description: <>Imagine your business reaching new heights of success – that's what we envision at Lumenta Digital Marketing Service USA, your go-to Digital Marketing Agency. With our internet marketing agency USA expertise and a straightforward approach, we aim to take your business to a new level. Please think of us as your digital marketing services USA partners in success, where our smart thinking and strategic ideas drive your business forward with top-notch digital marketing services Canada.</>,
        },
    ],
    
}
const {feature_data} =  feature_content


const FeatureArea = ({about}) => {
    return (
        <> 
           <section className={`tp-feature-area ${about ? "feature-breadcrumb pb-100" : ""}`}>
            {about ? null : 
            <div className="tp-feature-shape">
               <Image src={shape_1} alt="theme-pure" />
            </div> 
            }
            <div className="container container-large">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="tp-feature-title-wrapper" style={{ marginTop: 30 }}>
                        {/* <span className="tp-section-title__pre">
                           feature <span className="title-pre-color">IT Solutions</span>
                           <AngleArrow />
                        </span> */}
                        <h3 className="tp-section-title">Lumenta Digital: Illuminating Possibilities, Igniting Results
                           <span className="title-right-shape"> 
                              <LineArrowFive />
                           </span>
                        </h3>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="tp-feature-wrapper p-relative">
                        <p>Grow your business at a substantial rate with Lumenta Technologies <br />
                        data-driven digital marketing strategies.</p>
                     </div>
                  </div>
               </div>
               <div className="row" style={{ justifyContent: "center"}}>
                {feature_data.map((item, i)  => 
                    <div key={i} className="col-lg-4 col-md-6 card"
                    >
                        <div className="tp-feature-item-box p-relative wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                        <div className="tp-feature-item p-relative mb-30">
                            <div className="tp-feature-item-shape">
                                <Image src={shape_2} alt="theme-pure" />
                            </div>
                            <div className="tp-feature-item-wrapper">
                                <div className="tp-feature-item-thumb">
                                    <div className="shape">
                                    <Image src={shape_3} alt="theme-pure" />
                                    </div>
                                    <Image src={item.img} className="thumb" alt="theme-pure" />
                                </div>
                                <div className="tp-feature-item-content">
                                    <h3 className="feature-title">
                                        <Link href="/about">{item.title}</Link>
                                        <p className="tp-feature-item-subTitle">{item.subTitle}</p>
                                    <span> 
                                        <AngleArrow />                                
                                    </span>
                                    </h3>

                                    <p style={{ padding: 10 }}>{item.description}</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="tp-feature-item-btn">
                            <Link href="/about"><i className="fa-regular fa-arrow-right"></i></Link>
                        </div> */}
                    </div>
                </div> 
                )} 
               </div>
            </div>
         </section> 
        </>
    );
};

export default FeatureArea;