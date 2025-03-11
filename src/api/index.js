import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:8080/",
})

export async function getAllPosts() {
    const { data } = await api.get("/posts");
    return data
}
export async function getPostById(id) {
    const { data } = await api.get(`/posts/${id}`);
    return data
}
export async function deletePostById(id) {
    const { data } = await api.delete(`/posts/${id}`)
    return data
}
export async function createPost(post) {
    const { data } = api.post(`/posts?userId=1`, post)
    return data
}