import { api } from '../services/api'

export const getPosts = async () => {
    try {
        const { data } = await api.get('/posts');
        if (data) {
            return data;
        }
        return [];
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export const getPostBySlug = async (id) => {
    try {
        const { data, error } = await api.get(`/post?select=id${id}`);
        if (error) {
            throw new Error(error.message);
        }
        return data.length ? data[0] : null;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
}