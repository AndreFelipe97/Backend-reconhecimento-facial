import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import ReconhecimentoController from './controller';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/', upload.single('image'), new ReconhecimentoController().index);

export default routes;