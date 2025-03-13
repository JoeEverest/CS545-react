import React from "react";
import Dashboard from "./components/Dashboard";
import { PostProvider } from "./context/PostContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostDetails from "./components/PostDetails";
import NewPost from "./components/NewPost";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <PostProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/post/:id" element={<PostDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </PostProvider>
    </BrowserRouter>
  );
}

export default App;
