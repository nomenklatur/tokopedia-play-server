import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  comment_id: {
    type: String,
    unique: true
  },
  username: {
    type: String
  },
  comment: {
    type: String
  }
});

const commentModel = mongoose.model('comment', commentSchema);

export default commentModel;
