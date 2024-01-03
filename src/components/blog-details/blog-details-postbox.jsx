import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import { GET_BLOG, GET_BLOG_BY_SLUG } from "@/src/graphql/queries";
import { useLazyQuery } from "@apollo/client";
import readingTime from "reading-time";
import MiniLoader from "@/src/common/loader";
import moment from "moment";
import SearchArea from "../blog/search-area";
import RecentPost from "../blog/recent-post";
import Category from "../blog/category";

const BlogDetailsPostbox = () => {
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const slug = router.query.id;
  const [getBlogData] = useLazyQuery(GET_BLOG_BY_SLUG, {
    variables: { slug }, // Assuming postId is a string and needs to be converted to a number
    onCompleted: (data) => {
      if (data?.ViewBlogPostBySlug.success) setBlog(data?.ViewBlogPostBySlug);
      else router.push("/404");
    },
  });

  useEffect(() => {
    if (slug) {
      getBlogData();
    }
  }, [slug]);

  if (!blog) return <MiniLoader />;
  else
    return (
      <>
        <section className="postbox__area pt-80 pb-100">
          <div className="container">
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                <div className="postbox__wrapper">
                  <article className="postbox__item format-image mb-50 transition-3">
                    <h2 className="postbox__title">{blog?.title}</h2>
                    {/* <div className="postbox__thumb m-img"> */}

                    {/* </div> */}
                    <div className="postbox__content">
                      <div className="postbox__meta">
                        <span>
                          <i class="fa-solid fa-pen-nib"></i> By{" "}
                          {blog?.authorName}
                        </span>
                        <span>
                          <i className="fa-light fa-calendar-days"></i>
                          {moment(blog?.date).format("MMMM Do YYYY ")}
                        </span>
                        <span>
                          <Link href="">
                            <i className="fa-regular fa-clock"></i>
                            {`${readingTime(parse(blog?.content))?.text} `}
                          </Link>
                        </span>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "relative",
                        }}
                      >
                        <Image
                          src={blog?.coverPhotoURL}
                          alt="theme-pure"
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>

                      <div className="postbox__text">
                        <p>{parse(blog?.content)}</p>
                      </div>
                    </div>
                  </article>
                  {/* <div className="postbox__comment mb-50">
                           <h3 className="postbox__comment-title">(04) Comment</h3>
                           <ul>
                              {comment_reply.map((comment_reply, index) =>
                                 <li key={index} className={comment_reply?.children_cls}>
                                    <div className="postbox__comment-box p-relative">
                                       <div className="postbox__comment-info d-flex">
                                             <div className="postbox__comment-avater mr-20">
                                                <Image src={comment_reply.img} alt="theme-pure" />
                                             </div>
                                             <div className="postbox__comment-name">
                                                <h5>{comment_reply.name}</h5>
                                                <span className="post-meta">{comment_reply.date}</span>
                                             </div>
                                       </div>
                                       <div className="postbox__comment-text ml-65">
                                          <p>{comment_reply.comment}</p>
                                          {comment_reply.reply_icon &&
                                          <div className="postbox__comment-reply">
                                             <span>
                                                <ReplyIcon /> 
                                                </span>
                                          </div> 
                                          }
                                       </div>
                                    </div>
                                 </li>
                              )} 
                           </ul>
                        </div> */}
                  {/* <div className="postbox__comment-form">
                           <h3 className="postbox__comment-form-title">Write a comment</h3> 
                           <CommentForm />
                           <p className="ajax-response"></p>
                        </div> */}
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="sidebar__wrapper">
                  <SearchArea />
                  <Category />
                  <RecentPost />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default BlogDetailsPostbox;
