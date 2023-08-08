import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  video_id: {
    type: String,
    unique: true
  },
  thumbnail_url: {
    type: String,
    unique: true
  }
});

const videoModel = mongoose.model('video', videoSchema);

export default videoModel;
