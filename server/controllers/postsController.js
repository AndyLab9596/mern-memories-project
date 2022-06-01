import PostMessage from '../models/postMessage.js';
import { StatusCodes } from 'http-status-codes';

const getPosts = async (req, res) => {
    const posts = await PostMessage.find({});
    res.status(StatusCodes.OK).json({ posts, amount: posts.length })
}

const createPost = async (req, res) => {
    const post = req.body;
    console.log('post', post);
    // const newPost = await PostMessage.create(req.body);
}

// const createPost = async (req, res) => {
//     const post = req.body;
//     const newPost = new PostMessage(post);
//     await newPost.save();
// }

export {
    getPosts,
    createPost
}