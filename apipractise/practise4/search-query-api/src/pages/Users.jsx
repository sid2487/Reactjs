import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import UserCard from "../components/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState(searchParams.get("search") || "");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setSearchParams({ search: input.trim() });
    } else {
      setSearchParams({});
    }
  };

  const query = searchParams.get("search") || ""; // Gets the latest search term from the URL (?search=value).

  // filter the users array to only include users whose name includes the search query.
  const filterUsers = users.filter((user) => 
    user.name.toLowerCase().includes(query.toLowerCase())
);
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",}}>
        <h2>User List</h2>
        
        <form onSubmit={handleSearch} style={{ marginBottom: '1rem'}}>
            <input 
            type="text" 
            placeholder="Search by Name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>

        {filterUsers.length > 0 ? (
            filterUsers.map((user) => <UserCard key={user.id} user={user} />)
        ) : (
            <p>No Users found.</p>
        ) }
    </div>
  )
};

export default Users;