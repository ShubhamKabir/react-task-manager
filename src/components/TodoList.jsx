import TodoItem from "./TodoItem";

export default function TodoList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) return <p>No tasks yet</p>;

  return (
    <ul className="list">
      {tasks.map(task => (
        <TodoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}