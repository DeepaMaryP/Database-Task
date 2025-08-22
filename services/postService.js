import Post from "../model/post.js"

export const createPostService = async (data) => {
    try {
        const newItem = new Post(data)
        await newItem.save();
        return { success: true }

    } catch (error) {
        console.log(error);
        return { success: false }
    }
}

export const getPostService = async () => {
    try {
        const allPosts = await Post.find()
        return { success: true, allPosts }

    } catch (error) {
        console.log(error);
        return { success: false }

    }
}

export const updatePostById = async (id, data) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(id, data);
        if (updatedPost) {
            return { success: true, message: "Post updated succesfully" }
        } else {
            return { success: false, message: "Failed to update" }
        }

    } catch (error) {
        console.log(error);
        return { success: false }

    }
}

export const deletePostService = async(id) =>{
    try {
       await Post.findByIdAndDelete(id)
       return true;
    } catch (error) {
        console.log(error);
        return false;        
    }
}