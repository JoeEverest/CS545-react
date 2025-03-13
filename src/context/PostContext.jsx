import { createContext, useContext, useState } from "react";


const PostContext = createContext()

function PostProvider({ children }) {
    const [selectedPost, setSelectedPost] = useState(null);
    const [refetch, setRefetch] = useState(false);

    return (
        <PostContext.Provider value={{ selectedPost, setSelectedPost, refetch, setRefetch }}>
            {children}
        </PostContext.Provider>
    )
}

function usePosts() {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error("usePosts must be used within a PostProvider");
    }
    return context;
}

export { PostProvider, PostContext, usePosts };