import { SEARCH_BLOG } from "@/src/graphql/queries";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import React, { useEffect, useState } from "react";
import { BlogLoading, BlogsListing } from "./atom";

const SearchArea = () => {
  const router = useRouter();
  const [searchBlog] = useLazyQuery(SEARCH_BLOG);
  const [searchString, setSearch] = useState("");
  const setBlogs = useSetRecoilState(BlogsListing);
  const setLoading = useSetRecoilState(BlogLoading);
  const [onFocus, setFocus] = useState(false);
  const { search } = router.query;

  useEffect(() => {
    setSearch(search);
  }, [search])

  const onSubmit = (_search) => {
    setLoading(true);
    searchBlog({
      variables: {
        searchString: _search,
      },
    }).then((resp) => {
      setLoading(false);
      router.push(`/blog?search=${_search}`);
      if (resp?.data?.SearchBlogPost?.length > 0) {
        setBlogs(resp?.data?.SearchBlogPost);
      }
    });
  };

  return (
    <>
      <div className="sidebar__widget mb-30">
        <div className="sidebar__widget-content">
          <h3
            className="sidebar__widget-title"
            style={{ display: "flex", marginRight: "auto" }}
          >
            Search Here
          </h3>
          <div className="sidebar__search">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(e, "==")
                onSubmit(e.target[0].value);
              }}
            >
              <div className="sidebar__search-input-2">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchString}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">
                  <i className="far fa-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchArea;
