// BlogArea.js
import { useQuery } from "@apollo/client";
import { GET_BLOGS } from "@/src/graphql/queries";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RightArrowTwo from "@/src/svg/right-arrow-2";
import blog_shape_1 from "@assets/img/blog/shaep-2.png";
import blog_shape_2 from "@assets/img/blog/shaep-2.png";
import MiniLoader from "./loader";

const BlogArea = ({ service }) => {
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading) return <MiniLoader />;
  // if (error) return <p>Error: {error.message}</p>;

  const blogs = data?.AllBlogPosts || [];
  console.log(blogs);

  return (
    <>
      <section
        className={`tp-blog-3-area p-relative fix ${
          service ? "pb-100" : "pt-100 pb-90"
        }`}
      >
        <div className="tp-blog-3-shape">
          <Image className="shape-1" src={blog_shape_1} alt="theme-pure" />
          <Image className="shape-2" src={blog_shape_2} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-blog-3-title-wrapper text-center">
                <h3 className="tp-section-title">
                  Blogs
                </h3>
              </div>
            </div>
            {blogs.slice(0, 3).map((item, i) => (
              <div key={i} className="col-xl-4 col-md-6">
                <div className="tp-blog-3-wrapper mb-30 OneByOne">
                  <div className="tp-blog-3-thumb">
                    <Link href="/blog-details">
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
                      style={{ width: '100%', height: '240px' }} 
                    />
                  </div>
                    </Link>
                  </div>
                  <div className="tp-blog-3-content">
                    <div className="tp-blog-date" style={{ display: "flex", justifyContent: "space-between"}}>
                      <span>
                        <i className="fa-light fa-calendar-days"></i>
                        {item.createdAt
                          ?.split("T")[0]
                          .split("-")
                          .reverse()
                          .join("/")}
                      </span>
                      <span>{item?.authorName}</span>
                    </div>
                    <h3 className="tp-blog-3-title">
                      <Link href="/blog-details">{item.title}</Link>
                    </h3>
                  </div>
                  <div className="tp-blog-3-btn d-flex justify-content-between">
                    <div className="separator" />
                    <div className="read-more p-relative">
                      <Link
                        href={`/blog-details?categoryId=${item.categoryId}&postId=${item.id}`}
                      >
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
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArea;
