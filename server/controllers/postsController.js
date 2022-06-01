import PostMessage from '../models/postMessage.js';
import { StatusCodes } from 'http-status-codes';

const getPosts = async (req, res) => {
    const posts = await PostMessage.find({});
    res.status(StatusCodes.OK).json({ posts, amount: posts.length })
}

const createPost = (req, res) => {
    res.send('Create Post')
}

export {
    getPosts,
    createPost
}