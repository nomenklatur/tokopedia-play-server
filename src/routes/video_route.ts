import { Router } from 'express';
import { getVideos, getVideo } from '../controllers/video_controller';

const VideoRoutes: Router = Router();

VideoRoutes.get('/', getVideos);
VideoRoutes.get('/:video_id', getVideo);

export default VideoRoutes;
