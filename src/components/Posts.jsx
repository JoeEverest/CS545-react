import React from "react";
import Post from "./Post";

function Posts({ posts, setSelectedPost }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Posts</h2>
      <div className="grid grid-cols-3 gap-3">
        {posts.map((post) => (
          <Post post={post} key={post.id} setSelectedPost={setSelectedPost} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
