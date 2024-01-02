import post_data from "@/src/data/post-data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useLayoutEffect, useState } from "react";

import RecentPost from "./recent-post";
import Category from "./category";
import Tags from "./tags";
import SearchArea from "./search-area";
import UserProfile from "./user-profile";
import moment from "moment";
import RightArrowTwo from "@/src/svg/right-arrow-2";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_BLOGS } from "@/src/graphql/queries";
import MiniLoader from "@/src/common/loader";
import { useRecoilState, useRecoilValue } from "recoil";
import { BlogsListing, BlogLoading, CategoryId } from "./atom";
import { useRouter } from "next/router";

const PostboxArea = () => {
  const limit = 10;
  const router = useRouter();
  const { search } = router.query;
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotaCount] = useState(0);
  const categoryId = useRecoilValue(CategoryId);
  const [blogs, setBlogs] = useRecoilState(BlogsListing);
  const [mobileView, setMobileView] = useState(false);
  const [loading, setLoading] = useRecoilState(BlogLoading);
  const [getBlogs] = useLazyQuery(GET_BLOGS, {
    variables: {
      categoryId: categoryId,
      skip,
      limit,
    },
    onCompleted: (data) => {
      setLoading(false);
      setTotaCount(data?.AllBlogPosts[0]?.total_count);
      setBlogs(data?.AllBlogPosts);
    },
  });

  useEffect(() => {
    if (!search) getBlogs();
  }, [search]);

  useLayoutEffect(() => {
    function onChangeScreenSize() {
      if (window.innerWidth <= 990) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    }
    window.addEventListener("resize", onChangeScreenSize);
    onChangeScreenSize();
    return () => window.removeEventListener("resize", onChangeScreenSize);
  }, []);

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
        <div className="blogs-container">
          <div className="row">
            {mobileView && (
              <div
                className="col-xxl-4 col-xl-5 col-lg-6 col-md-7"
                style={{
                  margin: "0px auto 40px",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div className="sidebar__wrapper">
                  <SearchArea />
                  <Category />
                </div>
              </div>
            )}
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="blog-cards-container">
                {blogs?.length > 0 ? (
                  blogs?.map((item, i) => (
                    <div key={i} className="card-container">
                      <div className="tp-blog-3-wrapper mb-30 OneByOne">
                        <div className="tp-blog-3-thumb">
                          <Link href={`/blog-details/${item.slug}`}>
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
                            <Link href={`/blog-details/${item.slug}`}>
                              {item.title}
                            </Link>
                          </h3>
                        </div>
                        <div
                          className="tp-blog-3-btn d-flex justify-content-between"
                          style={{ textAlign: "left" }}
                        >
                          <div className="separator" />
                          <div className="read-more p-relative  d-flex justify-content-between">
                            <Link href={`/blog-details/${item.slug}`}>
                              Read More
                              <span>
                                {" "}
                                <RightArrowTwo />
                              </span>
                            </Link>
                            <span>{item?.category?.name}</span>
                          </div>
                          {/* <div className="fvrt">
                      <span>
                        <i className="fa-light fa-heart"></i>
                      </span>
                    </div> */}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <span style={{ alignSelf: "flex-start" }}>
                    No Results Found
                  </span>
                )}
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
              {blogs?.length > 0 ? (
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
                            if (
                              skip <= totalCount &&
                              totalCount > skip + limit
                            ) {
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
              ) : (
                <></>
              )}{" "}
            </div>
            {!mobileView && (
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="sidebar__wrapper">
                  {/* <UserProfile />  */}
                  <SearchArea />
                  <Category />
                  <RecentPost />
                </div>
              </div>
            )}

            {mobileView && (
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="sidebar__wrapper">
                  <RecentPost />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostboxArea;
