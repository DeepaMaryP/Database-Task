import { Router } from "express";
import { addPost, deletePosts, getPosts, updatePosts } from '../controllers/postController.js'

const router = Router();

router.route('/addPosts').post(addPost)
router.route('/getPosts').get(getPosts)
router.route('/updatePost/:postId').put(updatePosts)
router.route('/delPosts/:postId').delete(deletePosts)

export default router