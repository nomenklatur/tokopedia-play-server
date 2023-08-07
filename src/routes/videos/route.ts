import { Router } from 'express';
import { getVideos } from '../../controllers/video_controller';

const VideoRoutes: Router = Router();

VideoRoutes.get('/', getVideos);

export default VideoRoutes;
