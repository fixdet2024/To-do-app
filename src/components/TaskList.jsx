import TaskItem from './TaskItem'
import "./TaskList.css"

const TaskList = ({ task, handleDelete, toggleComplete }) => {
  return (
    <ul>
      {task.map((t) => (
        <TaskItem
          key={t.id}
          task={t}
          oneDelete={handleDelete}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};


export default TaskList
