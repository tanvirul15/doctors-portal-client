import React from "react";
import "./Blog.css";
import BlogCard from "./BlogCard";
import wilson from "../../../images/wilson.png";

const blogData = [
  {
    title: "Check at least a doctor in a year for your teeth",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Cudi",
    authorImg: wilson,
    date: "23 April 2019",
  },
  {
    title: "Two time brush in a day can keep you healthy",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Sinthia",
    authorImg: wilson,
    date: "23 April 2019",
  },
  {
    title: "The tooth cancer is taking a challenge",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ",
    author: "Dr. Cudi",
    authorImg: wilson,
    date: "23 April 2019",
  },
];

const Blog = () => {
  return (
    <div className="container py-5">
      <h5 className="text-brand text-center">OUR BLOG</h5>
      <h2 className="text-center">From Our Blog News</h2>
      <div className="row mt-5">
        {blogData.map((blogItem) => (
          <BlogCard blogItem={blogItem} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
