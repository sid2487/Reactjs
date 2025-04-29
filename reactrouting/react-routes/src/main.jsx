import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { Route, Routes, useParams, NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
};

const Home = () => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((data) => data.json())
      .then((data) => {
        setPost(data)
      });
      
  } , []);

  return (
    <div>
      <div className="post-container">
        {posts.map((post) => (
          <NavLink style={{ display: "block"}} to={`/post/${post.id}`}>{post.title}</NavLink>
        ))}
      </div>
    </div>
  );
}

const Setting = () => {
  return <h2>Setting</h2>
}

const MyUser = () => {
  const params = useParams();

  console.log('params', params)
  return (
    <div>
      <h1>Hello my name is {params.userName}</h1>
    </div>
  )
};

const PostPage = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  console.log(params)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    .then(data => data.json())
    .then(data => setData(data))
  }, [])

  console.log("Data", data)

  if(data === null) return <p>Loading....</p>
  return (
    <div>
      <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
    </div>
  )
}



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path='/post/:postId' element={<PostPage />} />
        <Route path="account">
          <Route path="profile" element={<Home />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        // dynamic routing
        <Route path='/user/:userName' element={<MyUser />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
