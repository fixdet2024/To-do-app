import { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import toast from "react-hot-toast";

function App() {
  const [tasks, setTasks] = useState([]);
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3301/api/tasks")
      .then((res) => setTasks(res.data))
      .catch((err) => console.error("Error al obtener tareas:", err));
  }, []);

  const handleAddTask = async (e) => {
  e.preventDefault();

      if (titulo.trim() === "") {
        toast.error("El título no puede estar vacío");
        return;
      }

      toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          axios.post("http://localhost:3301/api/tasks", { titulo })
            .then(resolve)
            .catch(reject);
        }, 2000); 
      }),
      {
        loading: "Agregando tarea...",
        success: (res) => {
          setTasks((prev) => [...prev, res.data]);
          setTitulo("");
          return <b>¡Tarea agregada con éxito!</b>;
        },
        error: <b>No se pudo agregar la tarea</b>,
      }
    );
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3301/api/tasks/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error al eliminar tarea:", error);
    }
  };

  const toggleComplete = async (id, nuevoEstado) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completado: nuevoEstado } : task
      )
    );

    try {
      await axios.put(`http://localhost:3301/api/tasks/${id}`, {
        completado: nuevoEstado,
      });
      console.log("Tarea actualizada en la base de datos");
    } catch (err) {
      toast.error("Error al actualizar tarea en el servidor");
      console.error("Error al actualizar tarea:", err);

      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, completado: !nuevoEstado } : task
        )
      );
    }
  };
  const tareasPendientes = tasks.filter(task => !task.completado);
  const tareasCompletadas = tasks.filter(task => task.completado);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Lista de tareas con React & Mysql</h1>

      <TaskForm 
        titulo={titulo}
        setTitulo={setTitulo}
        handleAddTask={handleAddTask}
      />

      {/* Tareas Pendientes */}
      {tareasPendientes.length > 0 && (
        <details open>
          <summary style={{ fontWeight: "bold", fontSize: "18px", cursor: "pointer" }}>
            Tareas Pendientes ({tareasPendientes.length})
          </summary>
          <TaskList
            task={tareasPendientes}
            handleDelete={handleDelete}
            toggleComplete={toggleComplete}
          />
        </details>
      )}

      {/* Tareas Completadas */}
      {tareasCompletadas.length > 0 && (
        <details>
          <summary style={{ fontWeight: "bold", fontSize: "18px", cursor: "pointer" }}>
            Tareas Completadas ({tareasCompletadas.length})
          </summary>
          <TaskList
            task={tareasCompletadas}
            handleDelete={handleDelete}
            toggleComplete={toggleComplete}
          />
        </details>
      )}
    </div>
  );
}

export default App;
