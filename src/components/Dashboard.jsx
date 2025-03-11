import React, { useState } from "react";
import Posts from "./Posts";
import PostDetails from "./PostDetails";
import AddPost from "./AddPost";



function Dashboard() {
  const [title, setTitle] = React.useState("Dashboard");
  const [temp, setTemp] = React.useState("");
  const [selectedPost, setSelectedPost] = React.useState(null);
  const [refetch, setRefetch] = useState(false)

  const [addPost, setAddPost] = useState(false)


  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{title}</h1>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-sm shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => setAddPost(!addPost)}
        >
          {addPost ? "Close" : "Add Post"}
        </button>
      </div>

      <Posts setSelectedPost={setSelectedPost} refetch={refetch} />



      {addPost ? <AddPost /> : <>
        <div className="flex gap-4">
          <input
            type="text"
            name=""
            id=""
            className="w-fit"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Change title"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-sm shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => setTitle(temp)}
          >
            Change title
          </button>
        </div>

        {selectedPost && (
          <PostDetails id={selectedPost} refetchPosts={() => {
            setRefetch(!refetch);
            setSelectedPost(null)
          }} />
        )}
      </>}
    </div>
  );
}

export default Dashboard;
