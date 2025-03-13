import React from 'react'
import { createPost } from '../api';

function NewPost() {
    const formRef = React.useRef()

    // async function handleSubmit(e) {
    //         e.preventDefault()
    //         console.log(postDetails);

    //         //validation
    //         if (postDetails.title.length === 0 || postDetails.content.length === 0 || postDetails.author.length === 0) {
    //             alert("All fields are required")
    //             return
    //         }

    //         try {
    //             await createPost(postDetails)
    //             window.location.reload()
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = formRef.current

        const formValues = {
            title: formData.title.value,
            content: formData.content.value,
        }

        //validation
        if (formValues.title.length === 0 || formValues.content.length === 0) {
            alert("All fields are required")
            return
        }

        //max content length 200
        if (formValues.content.length > 200) {
            alert("Content should be less than 200 characters")
            return
        }

        try {
            await createPost(formValues)
            window.location.reload()
        }
        catch (error) {
            console.log(error);
        }
        // reset form
        formData.reset()
    }

    return (
        <div>

            <h3 className='text-lg font-medium mb-4'>Create new Post</h3>
            <form ref={formRef} onSubmit={handleSubmit} className='space-y-3'>
                <div>
                    <label htmlFor="">Title</label>

                    <input type='text' name='title' />
                </div>

                <div>
                    <label htmlFor="">Author</label>

                    <input type='text' name='author' />
                </div>
                <div>
                    <label htmlFor="">Content</label>

                    <textarea type='text' name='content' />
                </div>

                <button className='bg-blue-500 text-white px-4 py-2 rounded-sm shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>Add Post</button>
            </form>
        </div>
    )
}

export default NewPost