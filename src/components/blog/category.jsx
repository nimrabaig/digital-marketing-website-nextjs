import { GET_BLOGS, GET_CATEGORIES } from "@/src/graphql/queries";
import { useLazyQuery, useQuery } from "@apollo/client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { BlogLoading, CategoryId } from "./atom";

const category_data = [
  { id: 1, category: "Cleaning", items: "03" },
  { id: 2, category: "Consultant", items: "05" },
  { id: 3, category: "Creative", items: "08" },
  { id: 4, category: "Technology", items: "06" },
];
const Category = () => {
  const setCategoryId = useSetRecoilState(CategoryId);
  const [categories, setCategories] = useState([]);
  const setLoading = useSetRecoilState(BlogLoading);
  useQuery(GET_CATEGORIES, {
    onCompleted: (data) => {
      setCategories(data?.DropdownCategory);
      setLoading(false);
    },
  });

  const SearchByCategory = (id) => {
    setLoading(true);
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
                <li key={i}>
                  <Link href="/blog" onClick={() => SearchByCategory(item?.id)}>
                    {item.name}
                    <span>{item.items}</span>
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
