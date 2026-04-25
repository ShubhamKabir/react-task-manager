export default function TodoItem({ task, onDelete, onToggle }) {
  return (
    <li className="item">
      <span
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {task.text}
      </span>

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}