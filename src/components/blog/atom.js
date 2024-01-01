import { atom } from "recoil";

export const BlogsListing = atom({
  key: "BlogsListing",
  default: []
});

export const BlogLoading = atom({
  key: "BlogLoading",
  default: true
});

export const CategoryId = atom({
  key: "CategoryId",
  default: ""
})