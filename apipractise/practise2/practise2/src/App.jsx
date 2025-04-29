import { useEffect, useState } from 'react'
import './App.css'
import { fetchAllUsers } from './api/api';
import CardList from './components/CardList';
import User from './components/User';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchAllUsers();
      // console.log(data)
      setUsers(data);
      setLoading(false);
    };

    getUsers();
  }, []);

  const userIdToDisplay = 2;
  const selectedUser = users.find((user) => user.id === userIdToDisplay);

  return (
    // <div>
    //   User's Data
    //   {loading ? <p>Loading...</p> : <CardList users={users} />}
    // </div>

    <div>
      <h1>Single User Detail</h1>
      {selectedUser ? <User user={selectedUser} /> : <p>User not Found</p>}
    </div>
  );
}

export default App;
