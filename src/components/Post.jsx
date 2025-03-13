import React from "react";
import { usePosts } from "../context/PostContext";

function Post({ post }) {
  const { setSelectedPost } = usePosts()

  return (
    <div
      onClick={() => setSelectedPost(post.id)}
      className="border p-4 cursor-pointer mb-4 rounded-sm shadow-sm border-gray-300 hover:border-gray-400"
    >
      <h3 className="text-lg">{post.title}</h3>
      <h4 className="text-sm text-gray-400">By {post.author || "Joe"}</h4>
    </div>
  );
}

export default Post;
