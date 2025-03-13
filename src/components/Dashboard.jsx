import React from "react";
import Posts from "./Posts";
import PostDetails from "./PostDetails";
import { usePosts } from "../context/PostContext";

function Dashboard() {
  const [title, setTitle] = React.useState("Dashboard");
  const [temp, setTemp] = React.useState("");
  const { selectedPost, setSelectedPost, refetch, setRefetch } = usePosts()

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">{title}</h1>

        <div className="flex gap-4">
          <input
            type="text"
            name=""
            id=""
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Change title"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 text-xs rounded-sm shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={() => setTitle(temp)}
          >
            Change title
          </button>
        </div>
      </div>

      <Posts />

      {selectedPost && (
        <PostDetails id={selectedPost} refetchPosts={() => {
          setRefetch(!refetch);
          setSelectedPost(null)
        }} />
      )}

    </div>
  );
}

export default Dashboard;
