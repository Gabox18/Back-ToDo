import { Router } from "express";
import Task from "../models/Task.js";

const router = Router();

router.get("/", async (req, res) => {
  const activeTasks = await Task.find().lean(); //funcion find() buscar registros //lean() formatea a obj clasico de JS
  console.log(activeTasks);
  res.send(activeTasks);
});

router.post("/tasks/add", async (req, res) => {
  try {
    const taskSave = await Task(req.body).save();
    console.log(taskSave);
    res.send("enviado");
  } catch (error) {
    console.log("post Error", error);
  }
});
export default router;
