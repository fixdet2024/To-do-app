import express from "express";
import { db } from "../db.js";

const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * FROM tasks", (err, data) => {
    if (err) {
      console.error("Error al obtener tareas:", err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });
});

router.post("/", (req, res) => {
  const { titulo } = req.body;
  console.log("Tarea recibida:", titulo);

  db.query("INSERT INTO tasks (titulo) VALUES (?)", [titulo], (err, result) => {
    if (err) {
      console.error("Error al insertar tarea:", err);
      return res.status(500).json(err);
    }
    return res.json({ id: result.insertId, titulo });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM tasks WHERE id = ?", [id], (err) => {
    if (err) {
      console.error("Error al eliminar tarea:", err);
      return res.status(500).json(err);
    }
    return res.sendStatus(204);
  });
});
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { completado } = req.body;

  if (typeof completado === "undefined") {
    return res.status(400).json({ error: "Campo 'completado' requerido" });
  }

  const sql = "UPDATE tasks SET completado = ? WHERE id = ?";
  db.query(sql, [completado, id], (err, result) => {
    if (err) {
      console.error("Error al actualizar tarea:", err);
      return res.status(500).json({ error: "Error del servidor" });
    }

    res.json({ id, completado });
  });
});


export default router;
