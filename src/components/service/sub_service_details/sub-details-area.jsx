import React from "react";
import Image from "next/image";
import RightSymbol from "@/src/svg/right-symbol";
import { sub_service_data } from "@/src/data/sub_service_data";
import { useRouter } from "next/router";

const SeoDetailsPostbox = () => {
  const router = useRouter();
  const slug = router.query.id;
  const index = sub_service_data.findIndex((service) => service.slug === slug);
  const data = sub_service_data[index];
  console.log(data);
  return (
    <>
      <section className="postbox__area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="postbox__wrapper">
                <article className="postbox__item format-image mb-50 transition-3">
                  {/* <div className="postbox__thumb m-img">
                    <Image src={thumb_1} alt="theme-pure" />
                  </div> */}
                  <div className="postbox__content">
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <h3
                        className="postbox__title"
                        style={{ textAlign: "center"}}
                      >
                        {data?.title}
                      </h3>
                      <p className="postbox__description">
                        {data?.description}
                      </p>
                    </div>
                    <div
                      className="postbox__text"
                      style={{ textAlign: "center" }}
                    >
                      <div className="postbox__list">
                        <div className="row">
                          <div className="col-xl-6 col-lg-12">
                            <h4>{data?.content_heading}</h4>
                            <div
                              className="postbox__text"
                              style={{
                                textAlign: "justify",
                                padding: "20px 0",
                              }}
                            >
                              {data?.content}
                            </div>
                          </div>
                          <div className="col-xl-5 col-lg-12">
                            <div className="posbox__list-img">
                              <Image
                                src={data?.img}
                                alt="theme-pure"
                                height={300}
                                style={{ marginTop: 60 }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <p>{data?.des_3}</p> */}

                      <div className="postbox__blockquote p-relative">
                        {/* <div className="postbox__blockquote-shape">
                                       <Image src={quate_icon} alt="theme-pure" />
                                    </div> */}
                        <blockquote>
                          <p>{data?.block_qoute}</p>
                        </blockquote>
                      </div>
                      <div
                        className="row justify-content-center"
                        style={{ textAlign: "center" }}
                      >
                        <h3
                          className="postbox__title"
                          style={{ textAlign: "center" }}
                        >
                          {data?.heading}
                        </h3>
                        {/* <p style={{ fontSize: 24 }}>{data?.paragraph2}</p> */}
                        {data?.services?.map((item, i) => (
                          <div key={i} className="col-lg-5 col-md-5 col-sm-10">
                            <div className="tp-service-wrapper text-center mb-30">
                              <h3
                                className="offer-title"
                                style={{
                                  paddingBottom: "8px",
                                  color: "#ff8d0b",
                                }}
                              >
                                {item.title}
                              </h3>
                              <p className="para">{item.des}</p>
                              <div className="tp-offer-wrapper-thumb"></div>
                              <div className="tp-offer-wrapper-btn"></div>
                            </div>
                            <br />
                          </div>
                        ))}
                      </div>

                      <div className="postbox__content">
                        <h3 className="postbox__title">
                          {data?.footer_heading}
                        </h3>
                        <div className="postbox__text">{data?.footer_des}</div>
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

export default SeoDetailsPostbox;
