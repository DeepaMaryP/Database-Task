import { model, Schema } from "mongoose";

const postSchema = new Schema(
    {
        title: {type: String, required : true},
        content: {type:String, required: true}
    }
)

const Post = model('post',postSchema)

export default Post