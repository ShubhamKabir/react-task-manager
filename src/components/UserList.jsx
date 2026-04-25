import { useEffect, useState } from "react";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <ErrorMsg message={error} />;

  return (
    <div>
      <input
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          marginBottom: "10px",
          padding: "8px",
          width: "100%"
        }}
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