import { Router } from "express";
import {
  getAllTask,
  postTask,
  putUpdateTask,
} from "../controller/controllerDB.js";

const router = Router();

router.get("/", getAllTask);

router.post("/tasks/add", postTask);

router.put("/edit/:id", putUpdateTask);

export default router;
