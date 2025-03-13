import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getAllPosts } from "../api";
import { usePosts } from "../context/PostContext";

function Posts() {

  const { refetch, } = usePosts()

  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function fetchPosts() {
    try {
      const res = await getAllPosts()
      setPosts(res);

    } catch (error) {
      console.log(error);

    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [refetch])

  if (isLoading) {
    return <>Loading...</>
  }


  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Posts</h2>
      <div className="grid grid-cols-3 gap-3">
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
