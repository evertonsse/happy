import { Router } from "express";
import multer from 'multer';

import uploadCongig from './config/upload'

import OrphanagesController from "./controllers/OrphanagesController";

const routes = Router();
const upload = multer(uploadCongig);

routes.get("/orphanages",  OrphanagesController.index );
routes.get("/orphanages/:id",  OrphanagesController.show );
routes.post("/orphanages", upload.array('images') ,OrphanagesController.create );

export default routes;
