import post_data from "@/src/data/post-data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import RecentPost from "./recent-post";
import Category from "./category";
import Tags from "./tags";
import SearchArea from "./search-area";
import UserProfile from "./user-profile";
import moment from "moment";
import RightArrowTwo from "@/src/svg/right-arrow-2";
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "@/src/graphql/queries";
import MiniLoader from "@/src/common/loader";

const PostboxArea = () => {
  const limit = 10;
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotaCount] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const { loading, data } = useQuery(GET_BLOGS, {
    variables: {
      skip,
      limit,
    },
  });

  useEffect(() => {
    if (data?.AllBlogPosts?.length > 0) {
      setTotaCount(data?.AllBlogPosts[0]?.total_count);
      setBlogs(data?.AllBlogPosts);
    }
  }, [data]);

  if (loading) return <MiniLoader />;

  const getPages = () => {
    let pages = 1;
    if (totalCount < limit) {
      return (pages += Math.floor(totalCount / limit));
    } else if (totalCount > limit) {
      return (pages = Math.ceil(totalCount / limit));
    } else {
      return (pages = 1);
    }
  };

  return (
    <>
      <section className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="postbox__wrapper">
                {blogs?.map((item, i) => (
                  <div key={i} className="col-xl-4 col-md-6">
                    <div className="tp-blog-3-wrapper mb-30 OneByOne">
                      <div className="tp-blog-3-thumb">
                        <Link href={`/blog-details/${item.id}`}>
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "relative",
                            }}
                          >
                            <Image
                              src={item?.coverPhotoURL}
                              alt="theme-pure"
                              width={0}
                              height={240}
                              sizes="100vw"
                              style={{ width: "100%", height: "240px" }}
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="tp-blog-3-content">
                        <div
                          className="tp-blog-date"
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span>
                            <i className="fa-light fa-calendar-days"></i>
                            {moment(item?.createdAt).format("Do MMM YYYY ")}
                          </span>
                          <span>{item?.authorName}</span>
                        </div>
                        <h3
                          className="tp-blog-3-title"
                          style={{ textAlign: "left" }}
                        >
                          <Link href={`/blog-details/${item.id}`}>
                            {item.title}
                          </Link>
                        </h3>
                      </div>
                      <div
                        className="tp-blog-3-btn d-flex justify-content-between"
                        style={{ textAlign: "left" }}
                      >
                        <div className="separator" />
                        <div className="read-more p-relative">
                          <Link href={`/blog-details/${item.id}`}>
                            Read More
                            <span>
                              {" "}
                              <RightArrowTwo />
                            </span>
                          </Link>
                        </div>
                        {/* <div className="fvrt">
                      <span>
                        <i className="fa-light fa-heart"></i>
                      </span>
                    </div> */}
                      </div>
                    </div>
                  </div>
                ))}
                {/* {post_data.map((item, i) => 
                            <article key={i} className="postbox__item format-image mb-50 transition-3">
                                <div className="postbox__thumb w-img">
                                <Link href="/blog-details">
                                    <Image src={item.thumb} alt="theme-pure" />
                                </Link>
                                <div className="postbox__tag">
                                    <p>{item.catagory}</p>
                                </div>
                                </div>
                                <div className="postbox__content">
                                <div className="postbox__meta">
                                    <span><i className="fa-light fa-calendar-days"></i>{item.date}</span>
                                    <span><Link href="#"><i className="fal fa-comments"></i> Comments ({item.comments})</Link></span>
                                    <span><Link href="#"><i className="fa-regular fa-clock"></i>{item.upload_time}</Link></span>
                                </div>
                                <h3 className="postbox__title">
                                    <Link href="/blog-details">{item.title}</Link>
                                </h3>
                                <div className="postbox__text">
                                    <p>{item.description}</p>
                                </div>
                                <div className="postbox__read-more">
                                    <Link href="/blog-details" className="tp-btn">read more</Link>
                                </div>
                                </div>
                            </article>
                        
                        )} */}
              </div>
              <div className="basic-pagination text-center">
                <nav>
                  <ul>
                    <li>
                      <span
                        onClick={() => {
                          if (skip > 0) {
                            setSkip(skip - limit);
                            setCurrentPage(currentPage - 1);
                          }
                        }}
                      >
                        <i className="fa-regular fa-angles-left"></i>
                      </span>
                    </li>
                    {[...Array(getPages())].map((_, i) => (
                      <li>
                        <span
                          onClick={() => {
                            setCurrentPage(i + 1);
                            setSkip(i * limit);
                          }}
                          className={`${
                            currentPage === i + 1 ? "current" : ""
                          }`}
                        >
                          {i + 1}
                        </span>
                      </li>
                    ))}
                    <li>
                      <span
                        onClick={() => {
                          if (skip <= totalCount && totalCount > skip + limit) {
                            setSkip(skip + limit);
                            setCurrentPage(currentPage + 1);
                          }
                        }}
                      >
                        <i className="fa-regular fa-angles-right"></i>
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            {/* <div className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="sidebar__wrapper"> 
                        <UserProfile /> 
                        <SearchArea />
                        <RecentPost />
                        <Category />
                        <Tags /> 
                     </div>
                  </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostboxArea;
