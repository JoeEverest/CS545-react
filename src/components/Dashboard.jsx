import React from "react";
import Posts from "./Posts";

const POSTS = [
    {
        id: 1,
        title: "Hello",
        author: "John Doe",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        comments: [],
    },
    {
        id: 2,
        title: "New Title",
        author: "Jane Doe",
        content: "Shorter Post",
        comments: [],
    },
    {
        id: 3,
        title: "Dogs",
        author: "Jack Reacher",
        content:
            "The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        comments: [],
    },
];

function Dashboard() {
    const [title, setTitle] = React.useState("Dashboard");
    const [selectedPost, setSelectedPost] = React.useState(null);

    const selectedPostIndex = POSTS.findIndex((post) => post.id === selectedPost);

    return (
        <div className="max-w-2xl mx-auto p-4 space-y-6">
            <h1 className="text-2xl font-semibold">{title}</h1>

            <Posts posts={POSTS} setSelectedPost={setSelectedPost} />

            <div className="flex gap-4">
                <input
                    type="text"
                    className="border p-2 rounded-sm shadow-sm border-gray-300 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    name=""
                    id=""
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Change title"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-sm shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    Change title
                </button>
            </div>

            {selectedPost && (
                <div>
                    <p className="text-lg font-semibold">
                        {POSTS[selectedPostIndex].title} by {POSTS[selectedPostIndex].author}
                    </p>
                    <p className="my-3 text-base">{POSTS[selectedPostIndex].content}</p>

                    <div className="flex gap-3 text-red-500 underline">
                        <a>Edit</a>
                        <a>Delete</a>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Dashboard;
