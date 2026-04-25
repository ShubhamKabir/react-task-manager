import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <input
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "8px", width: "100%" }}
      />

      {filteredUsers.map(user => (
        <div
          key={user.id}
          className="user-card"
          style={{
            padding: "14px",
            margin: "10px 0",
            background: "rgba(255,255,255,0.05)",
            borderRadius: "10px",
            border: "1px solid rgba(255,255,255,0.1)"
          }}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}