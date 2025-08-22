import { createPostService, deletePostService, getPostService, updatePostById } from "../services/postService.js";

export const addPost = async (req, res) => {
    const result = await createPostService(req.body)
    if (result.success) {
        res.status(201).json({ success: "true", message: 'Post created succesfully' })
    } else {
        return new Error('Failed to create new post')
    }
}

export const getPosts = async (req, res) => {
    const response = await getPostService();
    if (response.success)
        return res.status(200).send(response);
    else {
        return new Error('Failed to get posts')
    }
}

export const updatePosts = async (req, res) => {
    const response = await updatePostById(req.params.postId, req.body)
    if (response.success) {
        return res.status(200).send(response)
    } else {
        return new Error('Failed to update post')
    }
}


export const deletePosts = async(req,res) =>{
    const response = await deletePostService(req.params.postId)
     if (response) {
        return res.status(200).json({success:true, message:"Post deleted successfully"})
    } else {
        return new Error('Failed to delete post')
    }
}