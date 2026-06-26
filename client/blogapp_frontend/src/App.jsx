import React, { useState } from "react";
import axios from "axios";
import GetBlog from "./Components/GetBlog";
import { Routes, Route, useNavigate } from "react-router-dom";
const App = () => {
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/addblog/', {
      name: name,
      title: title,
      details: details,
    })
      .then(response => {
        alert("Data Added In API successfully.")
        setName("")
        setTitle("")
        setDetails("")
      })
      .catch(error => {
        alert("Something went wrong...")
      })
  }

  return (
    <Routes>
      <Route path="/" element={
        <div className="flex justify-center items-center min-h-screen w-full flex-col bg-black ">
          <div className="bg-red-600 h-[450px] w-1/5 flex flex-col justify-center px-5 gap-4 rounded-lg ">
            <form className=" flex flex-col justify-center" onSubmit={handleSubmit}>
              <label htmlFor="name" className="text-white font-medium mb-1"> Name: </label>
              <input
                type="text"
                placeholder="Enter your name"
                id="name"
                className="bg-white p-1 outline-none text-sm rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="title" className="text-white font-medium mt-2 mb-1"> Title: </label>
              <input
                type="text"
                placeholder="Enter title here"
                id="title"
                className="bg-white p-1 outline-none text-sm rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label htmlFor="details" className="text-white font-medium mt-2 mb-1"> Details: </label>
              <textarea
                placeholder="Add your description"
                id="details"
                className="bg-white p-1 outline-none text-sm h-20 rounded-md "
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
              <button className="bg-white mt-5 p-2 rounded-md text-red-600"> Submit </button>
            </form>

            <button
              className="bg-white p-2 rounded-md text-red-600"
              onClick={() => navigate('/blogs')}
            >
              Show all blogs
            </button>
          </div>
        </div>
      } />

      <Route path="/blogs" element={<GetBlog />} />
    </Routes>
  );
};

export default App;