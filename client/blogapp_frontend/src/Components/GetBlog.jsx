import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const GetBlog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const deleteBlog = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/delete/${id}`)
      .then((response) => {
        alert("Blog deleted successfully!");
        setBlogs(blogs.filter((blog) => blog.id !== id));
      })
      .catch((error) => {
        alert("Something went wrong while deleting...");
      });
  };
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/Homepage/")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        alert("Something went wrong...");
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-black text-white py-10">
      <div className="flex flex-row gap-4">
        {blogs.map((blog, index) => (
          <div className="w-60 h-80 bg-white rounded-2xl text-black p-4 flex flex-col">
            <h2 className="bg-red-700 w-6 h-6 flex items-center justify-center text-white text-xs rounded-full mb-3">
              {index + 1}
            </h2>

            <div className="flex-1 overflow-hidden">
              <h2 className="font-bold text-base">{blog.title}</h2>
              <h3 className="font-semibold text-sm text-gray-600 mt-1">
                {blog.name}
              </h3>
              <p className="text-sm mt-2 line-clamp-4">{blog.details}</p>
            </div>

            <p className="mt-auto pt-2 border-t border-gray-200 text-sm">
              <span className="font-bold">Submit date: </span>
              {blog.date}
            </p>

            <button
              className="bg-red-700 text-white text-sm font-medium py-2 rounded-md mt-2 hover:bg-red-800 transition-colors"
              onClick={() => {
                deleteBlog(blog.id);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button
        className="bg-white p-2 rounded-md text-red-600 mt-4"
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default GetBlog;
