import "./TaskItem.css";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

const TaskItem = ({ task, oneDelete, toggleComplete }) => {
  const handleDelete = () => {
    oneDelete(task.id);
    toast.success("Tarea eliminada");
  };

  const handleToggle = () => {
    const nuevoEstado = !task.completado;
    toggleComplete(task.id, nuevoEstado);

    toast.success(nuevoEstado ? "Tarea completada" : "Tarea pendiente");
  };

  return (
    <li className={task.completado ? "completado" : ""}>
      <label className="task-label">
        <input
          type="checkbox"
          checked={task.completado}
          onChange={handleToggle}
        />
        {task.titulo}
      </label>

      <div className="task-actions">
        <span className={task.completado ? "badge done" : "badge pending"}>
          {task.completado ? "Completada" : "Pendiente"}
        </span>
        <button onClick={handleDelete} className="delete-btn" title="Eliminar tarea">
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
