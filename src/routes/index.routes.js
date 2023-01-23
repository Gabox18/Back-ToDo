import { Router } from "express";
import {
  getAllTask,
  postTask,
  putUpdateTask,
  deleteTask,
  putDone,
} from "../controller/controllerDB.js";

const router = Router();

router.get("/", getAllTask);

router.post("/tasks/add", postTask);

router.put("/tasks/edit/:id", putUpdateTask);

router.delete("/tasks/delete/:id", deleteTask);

router.put("/tasks/done/:id", putDone);

export default router;
