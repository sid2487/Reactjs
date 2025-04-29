import { useState, useEffect } from 'react'
import './App.css'
import { fetchUsers } from './api/api';
import CardList from './components/CardList';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      // data.forEach(user => {
      //     console.log(user.address.city);
      // })
      setUsers(data);
      setLoading(false);
    };

    getUsers();
  }, []);
  return (
   <div>
    <h1>API Practise</h1>
    {loading ? <p>Loading....</p> : <CardList users={users} />}
   </div>
  )
}

export default App
