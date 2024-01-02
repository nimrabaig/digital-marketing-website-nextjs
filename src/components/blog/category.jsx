import {  GET_CATEGORIES } from "@/src/graphql/queries";
import {  useQuery } from "@apollo/client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { BlogLoading, CategoryId } from "./atom";


const Category = () => {
  const setCategoryId = useSetRecoilState(CategoryId);
  const [categories, setCategories] = useState([]);
  const setLoading = useSetRecoilState(BlogLoading);
  const [selected, setSelected] = useState(null);

  useQuery(GET_CATEGORIES, {
    fetchPolicy: "no-cache",
    onCompleted: (data) => {
        const _array = data?.CategoryListWithCount;
        _array.splice(1,1)
      setCategories(_array);
      setSelected(_array[0].id)
      setLoading(false);
    },
  });

  const SearchByCategory = (id) => {
    // setLoading(true);
    setCategoryId(id);
  };



  return (
    <>
      <div className="sidebar__widget mb-30">
        <h3
          className="sidebar__widget-title"
          style={{ display: "flex", marginRight: "auto" }}
        >
          Category
        </h3>
        <div className="sidebar__widget-content">
          <ul style={{ textAlign: "left" }}>
            {categories?.length > 0 &&
              categories?.map((item, i) => (
                <li key={i} className={`${selected === item?.id ? "selected" : ""}`}>
                  <Link href="/blog" onClick={() => {
                    SearchByCategory(item?.id);
                    setSelected(item?.id);
                  }}>
                    {item.name}
                    <span>{item.blogCount}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Category;
