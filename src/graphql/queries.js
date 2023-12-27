// queries.js
import { gql } from "@apollo/client";

export const GET_BLOGS = gql`
  query Query($categoryId: String, $skip: Int, $take: Int) {
    AllBlogPosts(categoryId: $categoryId, skip: $skip, take: $take)
  }
`;

export const GET_BLOG = gql`
  query Query($viewBlogPostId: Int!) {
    ViewBlogPost(id: $viewBlogPostId)
  }
`;

export const GET_BLOG_BY_SLUG = gql`
query Query($slug: String!) {
  ViewBlogPostBySlug(slug: $slug)
}`
