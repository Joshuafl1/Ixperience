import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import BlogList from "../../components/BlogList";
import Footer from "../../components/Footer";

import "./index.css";
import { useParams, Link } from "react-router-dom";

import blogService from "../../services/blogServices";
import categoryService from "../../services/categoryService";

export default function BlogsPage() {
  const { categoryId } = useParams();
  const [blogs, setBlogs] = useState();
  const [categories, setCategories] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const blogsRes = await blogService.getBlogsByCategoryId(categoryId);
      const categoriesRes = await categoryService.getCategories();

      setBlogs(blogsRes);
      setCategories(categoriesRes);
      setLoading(false);
    };

    fetchData();
  }, [categoryId]);

  const CategoriesList = ({ categoryId }) => {
    if (!categories && !categories?.length) {
      return null;
    }
    return categories.map((category) => {
      return categoryId === category.id ? (
        <link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "blue" }}
          onClick={() => setLoading(true)}
        >
          <p key={category.id}>{category.title}</p>
        </link>
      ) : (
        <link
          className="link"
          key={category.id}
          to={"/blogs/" + category.id}
          style={{ color: "black" }}
          onClick={() => setLoading(true)}
        >
          <p key={category.id}>{category.title}</p>
        </link>
      );
    });
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Heading />
        <div className="scroll-menu">
          <CategoriesList categoryId={categoryId} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p className="page-subtitle">Blog Posts</p>
        </div>
        <BlogList blogPosts={blogs} />
      </div>

      <Footer />
    </>
  );
}
