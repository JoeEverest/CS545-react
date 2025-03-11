import React, { useEffect, useState } from 'react'
import { deletePostById, getPostById } from '../api'

function PostDetails({ id, refetchPosts }) {
    const [post, setPost] = useState()
    const [isLoading, setIsLoading] = useState(true)

    async function fetchPostContent(postId) {
        try {
            const res = await getPostById(postId)
            setPost(res)
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchPostContent(id)
    }, [id])

    async function deletePost() {
        try {
            deletePostById(id).then(() => {
                refetchPosts()
            })

        } catch (error) {
            console.log(error);

        }
    }

    if (isLoading) {
        return <div className="animate-pulse p-4 cursor-pointer mb-4 bg-gray-200 rounded-sm shadow-sm border-gray-300 hover:border-gray-400">Loading...</div>
    }
    return (
        <div>
            <p className="text-lg font-semibold">
                {post.title} by{" "}
                {post.author || "Joe"}
            </p>
            <p className="my-3 text-base">{post.content}</p>

            <div className="flex gap-3 text-red-500 underline">
                <a>Edit</a>
                <button onClick={deletePost} className='underlined'>Delete</button>
            </div>

            <div className="border-l-4 py-3 border-gray-300 pl-4 mt-4 space-y-3">
                <h3 className='text-base font-medium'>Comments</h3>
                {post.comments.map((item, index) => (<div key={index} className='space-y-2 border-b border-gray-200 pb-2'>
                    <p className='text-sm text-gray-700'>
                        {item.name}
                    </p>
                    <p className='text-xs text-gray-500'>By user</p>
                </div>))}
            </div>
        </div>
    )
}

export default PostDetails