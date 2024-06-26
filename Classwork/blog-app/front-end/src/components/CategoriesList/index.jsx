import React from "react";
import PropTypes from "prop-types";

import "./index.css";

import EditButtons from "../EditButtons";
export default function CategoriesList({ categories, onEdit, onDelete }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!categories) {
    return null;
  }

  console.log("categories", categories);
  return (
    <div className="category-list">
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            className="card"
            style={{ borderRadius: "0px", border: "none" }}
            onClick={() => {
              console.log("TODO: Navigate to categories page");
            }}
          >
            <div
              className="card-body w-100"
              style={{
                backgroundColor: category.color + "33",
                position: "relative",
                zIndex: 0,
              }}
            >
              <h5 className="card-title">{category.title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                {category.description.substring(1, 100)} ...
              </p>
            </div>
            {user && user?.token && onEdit && onDelete && (
              <EditButtons
                onEdit={() => {
                  onEdit(category);
                }}
                onDelete={() => {
                  onDelete(category);
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

CategoriesList.prototype = {
  categories: PropTypes.array.isRequired,
};
