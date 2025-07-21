import "./TaskForm.css"

const TaskForm = ({titulo, setTitulo, handleAddTask}) => {
  return (
    <form onSubmit={handleAddTask}>
        <input type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)} 
        placeholder='Escribeuna tarea...'/>
        <button type='submit'>Agregar</button>
    </form>
  )
}

export default TaskForm