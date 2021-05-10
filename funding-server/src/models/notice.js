import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
    n_title: String,
    n_content: String,
    n_cateCode: String,
    n_date: {
        type: Date,
        default: Date.now()
    },
    n_like: Number,
    n_image: String
});

const Post = mongoose.model('notice', PostSchema);

export default Post;