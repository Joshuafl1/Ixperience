import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";
import BlogGrid from "../../components/BlogGrid";
import CategoriesList from "../../components/CategoriesList";
import Footer from "../../components/Footer";

import blogService from "../../Services/blogService";
import categoryService from "../../Services/categoryService";

export default function Home() {
  const [blogs, setBlogs] = useState();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRes = await blogService.getBlogs();
        const categoryRes = await categoryService.getCategories();
        setBlogs(blogsRes);
        setCategories(categoryRes);
      } catch (err) {
        console.error("fetchBlogs error", err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
      <Heading />
      <div className="container">
        <SubHeading subHeading={"Recent blog posts"} />
        <BlogGrid blogPosts={blogs} />
        <CategoriesList categories={categories} />
        <Footer />
      </div>
    </>
  );
}
