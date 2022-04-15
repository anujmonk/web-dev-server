import mongoose from 'mongoose';
const schema = mongoose.Schema({
    _id: Number,
    topic: String,
    postedBy: {
      username: String
    },
    verified: Boolean,
    handle: String,
    time: String,
    title: String,
    tuit: String,
    attachments: {
      video: String
    },
    'logo-image': String,
    'avatar-image': String,
    stats: {
      comments: String,
      retuits: String,
      likes: String,
      dislikes: String
    }
  }, {collection: 'tuits'});
export default schema;