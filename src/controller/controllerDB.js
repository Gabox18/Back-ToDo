import Task from "../models/Task";

export const getAllTask = async (req, res) => {
  try {
    const activeTasks = await Task.find().lean(); //funcion find() buscar registros //lean() formatea a obj clasico de JS
    res.status(200).send(activeTasks);
  } catch (err) {
    console.log("error GetAllTask--->", err);
    res.status(400).json({ error: err.message });
  }
};

export const postTask = async (req, res) => {
  try {
    const taskSave = await Task(req.body).save();
    res.status(200).send(taskSave);
  } catch (err) {
    console.log("post Error--->", err);
    res.status(400).json({ error: err.message });
  }
};

export const putUpdateTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body);
    const taskUpdate = await Task.findById(id);
    res.status(200).send(taskUpdate);
  } catch (error) {
    console.log("put Error--->", error);
    res.status(400).json({ error: err.message });
  }
};
