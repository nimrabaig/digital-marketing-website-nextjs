import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Tags from "../blog/tags";
import Category from "../blog/category";
import SearchArea from "../blog/search-area";
import RecentPost from "../blog/recent-post";
import UserProfile from "../blog/user-profile";
import CommentForm from "@/src/forms/comment-form";

import thumb_1 from "@assets/img/services/service-details/img-1.jpg";
import thumb_2 from "@assets/img/services/service-details/seo-img.png";
import thumb_3 from "@assets/img/blog/details/blog-3.jpg";

import person_1 from "@assets/img/blog/details/comment-1.jpg";
import person_2 from "@assets/img/blog/details/comment-2.jpg";

import quate from "@assets/img/blog/details/quate.jpg";
import RightSymbol from "@/src/svg/right-symbol";
import VideoPopup from "@/src/modals/video-popup";
import ReplyIcon from "@/src/svg/reply-icon";
import service_data from "@/src/data/service-data";
import { useRouter } from "next/router";

const BlogDetailsPostbox = () => {
  const router = useRouter();
  const index = router.query.id - 1;
  const data = service_data[index];

  return (
    <>
      <section className="postbox__area pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="postbox__wrapper">
                <article className="postbox__item format-image mb-50 transition-3">
                  {/* <div className="postbox__thumb m-img">
                    <Image src={thumb_1} alt="theme-pure" />
                  </div> */}
                  <div className="postbox__content">
                    <h3 className="postbox__title">{data?.heading1}</h3>
                    <div className="postbox__text">
                      <p>{data?.des_1}</p>
                      <p>{data?.des_2}</p>

                      <div className="postbox__list">
                        <div className="row">
                          <div className="col-xl-6 col-lg-12">
                            <div className="postbox__list-content">
                              <ul>
                                {data?.check_list1.map((item, i) => (
                                  <li key={i}>
                                    <span className={item.active}>
                                      {item.icon}
                                    </span>
                                    {item.title}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div className="col-xl-5 col-lg-12">
                            <div className="posbox__list-img">
                              <Image
                                src={thumb_2}
                                alt="theme-pure"
                                height={300}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <p>{data?.des_3}</p>

                      <div className="postbox__blockquote p-relative">
                        {/* <div className="postbox__blockquote-shape">
                                       <Image src={quate_icon} alt="theme-pure" />
                                    </div> */}
                        <blockquote>
                          <p>{data?.blockquote}</p>
                        </blockquote>
                      </div>
                      <div
                        className="row justify-content-center"
                        style={{ textAlign: "center" }}
                      >
                        <h3 className="postbox__title">{data?.heading2}</h3>
                        <p style={{ fontSize: 24 }}>
                          We guarantee to bring high-quality, relevant traffic.
                        </p>
                        {data?.services?.map((item, i) => (
                          <div key={i} className="col-lg-5 col-md-5 col-sm-10">
                            <div className="tp-service-wrapper text-center mb-30">
                              <h3
                                className="offer-title"
                                style={{ paddingBottom: "8px" }}
                              >
                                {item.title}
                              </h3>
                              <p className="para">
                                {item.description}
                              </p>
                              <div className="tp-offer-wrapper-thumb"></div>
                              <div className="tp-offer-wrapper-btn"></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="postbox__content">
                        <h3 className="postbox__title">{data?.heading3}</h3>
                        <div className="postbox__text">
                          <p>{data?.paragraph3}</p>
                        </div>
                      </div>

                      <div className="postbox__content">
                        <h3 className="postbox__title">{data?.heading4}</h3>
                        <div className="postbox__text">
                          <p>{data?.paragraph4}</p>
                          <div className="postbox__list-content">
                            <ul>
                              {data?.check_list4
                                .slice(0, data.check_list4.length / 2)
                                .map((item, i) => (
                                  <li key={i}>
                                    <span className={item.active}>
                                      <RightSymbol />
                                    </span>
                                    {item}
                                  </li>
                                ))}
                            </ul>
                            <ul>
                              {data?.check_list4
                                .slice(data.check_list4.length / 2)
                                .map((item, i) => (
                                  <li key={i}>
                                    <span className={item.active}>
                                      <RightSymbol />
                                    </span>
                                    {item}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPostbox;
