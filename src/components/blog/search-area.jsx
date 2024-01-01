import { SEARCH_BLOG } from "@/src/graphql/queries";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil";
import React, { useEffect, useState } from "react";
import { BlogLoading, BlogsListing } from "./atom";
import useDebounce from "@/src/hooks/useDebounce";

const SearchArea = () => {
  const router = useRouter();
  const [searchBlog] = useLazyQuery(SEARCH_BLOG);
  const [search, setSearch] = useState("");
  const debouncedValue = useDebounce(search, 800);
  const setBlogs = useSetRecoilState(BlogsListing);
  const setLoading = useSetRecoilState(BlogLoading);
  const [onFocus, setFocus] = useState(false);

  const onSubmit = (_search) => {
    setLoading(true);
    searchBlog({
      variables: {
        searchString: _search,
      },
    }).then((resp) => {
      setLoading(false);
      router.push("/blog?search=true");
      if (resp?.data?.SearchBlogPost?.length > 0) {
        setBlogs(resp?.data?.SearchBlogPost);
      }
    });
  };

  useEffect(() => {
    onFocus && onSubmit(debouncedValue);
  }, [debouncedValue])
  
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
              onClick={(e) => 
                e.preventDefault()}
            >
              <div className="sidebar__search-input-2">
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onMouseEnter={() => setFocus(true)}
                  onMouseLeave={() => setFocus(false)}
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
