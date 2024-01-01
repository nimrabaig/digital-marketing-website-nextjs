import Link from "next/link";
import React, { useEffect, useState } from "react";

import thumb_1 from "@assets/img/blog/details/side-1.jpg";
import thumb_2 from "@assets/img/blog/details/side-2.jpg";
import thumb_3 from "@assets/img/blog/details/side-3.jpg";
import Image from "next/image";
import Calendar from "@/src/svg/calendar";
import { GET_FEATURED_BLOGS } from "@/src/graphql/queries";
import { useQuery } from "@apollo/client";
import moment from "moment";

const recent_post_data = [
  {
    id: 1,
    img: thumb_1,
    date: "July 21, 2021",
    title: <>The Benefits of Hiring a Cleaning </>,
  },
  {
    id: 2,
    img: thumb_2,
    date: "July 21, 2021",
    title: <>How Often Should You Schedule Professional</>,
  },
  {
    id: 3,
    img: thumb_3,
    date: "July 21, 2021",
    title: <>How to Keep Your Home Safe </>,
  },
];

const RecentPost = () => {
  const [featuredBlogs, setFeturedBlogs] = useState([]);
  const { data } = useQuery(GET_FEATURED_BLOGS, {
    variables: {
      skip: 0,
      take: 3,
    },
  });

  useEffect(() => {
    if (data?.FeaturedBlogs) {
      setFeturedBlogs(data?.FeaturedBlogs);
    }
  }, [data]);
  return (
    <>
      <div className="sidebar__widget mb-30">
        <h3
          className="sidebar__widget-title"
          style={{ display: "flex", marginRight: "auto" }}
        >
          Featured Post
        </h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {featuredBlogs?.length > 0 &&
              featuredBlogs?.map((item, i) => (
                <div
                  key={i}
                  className="rc__post mb-20 d-flex align-items-center"
                >
                  <div className="rc__post-thumb mr-20">
                    <Link href={`/blog-details/${item?.slug}`}>
                      <Image
                        src={item?.coverPhotoURL}
                        alt="theme-pure"
                        sizes="100vw"
                        width={0}
                        height={0}
                        style={{ width: "90%", height: "100%" }}
                      />
                    </Link>
                  </div>
                  <div
                    className="rc__post-content"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                      alignSelf: "flex-start"
                    }}
                  >
                    <div className="rc__meta">
                      <span>
                        <Calendar />   {moment(item?.createdAt).format("MMM DD, YYYY ")}
                      </span>
                    </div>
                    <h3 className="rc__post-title">
                      <Link href="/blog-details">{item?.title}</Link>
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPost;
