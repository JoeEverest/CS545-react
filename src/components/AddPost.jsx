import React, { useState } from 'react'
import { createPost } from '../api';

function AddPost() {
    const [postDetails, setPostDetails] = useState({
        title: "",
        content: "",
        author: ""
    })

    function handleChange(e) {
        setPostDetails({
            ...postDetails,
            [e.target.name]: e.target.value
        })
    }


    async function handleSubmit(e) {
        e.preventDefault()
        console.log(postDetails);

        //validation
        if (postDetails.title.length === 0 || postDetails.content.length === 0 || postDetails.author.length === 0) {
            alert("All fields are required")
            return
        }

        try {
            await createPost(postDetails)
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='shadow rounded p-3'>
            <h3 className='text-lg font-medium mb-4'>Add Post</h3>

            <form onSubmit={handleSubmit} className='space-y-3'>
                <div>
                    <label htmlFor="">Title</label>

                    <input type='text' name='title' onChange={handleChange} value={postDetails.title} />
                </div>

                <div>
                    <label htmlFor="">Author</label>

                    <input type='text' name='author' onChange={handleChange} value={postDetails.author} />
                </div>
                <div>
                    <label htmlFor="">Content</label>

                    <textarea type='text' name='content' onChange={handleChange} value={postDetails.content} />
                </div>

                <button className='bg-blue-500 text-white px-4 py-2 rounded-sm shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Add Post</button>
            </form>
        </div>
    )
}

export default AddPost