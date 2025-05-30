import { useEffect, useState } from 'react'
import './App.css'
import { getPosts } from '.';
import PostCard from './components/PostCard';
import CardImage from './components/CardImage';
import JokesCard from './components/JokesCard';
import AdviseCard from './components/AdviseCard';

function App() {
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);
  const [jokes, setJokes] = useState(null);
  const [advise, setAdvise] = useState(null);

  // useEffect(() => {
  //   getPosts().then((posts) => setData(posts))
  // })

  const fetchImage = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      if(!res.ok) {
        console.log("Failed to fetch the image");
      }

      const data = await res.json();
      setImage(data.message);
      console.log(data.message)
    } catch (error) {
      console.error("Image not Found", error);
    }
  };
  
  const randomJoke = async () => {
    try {
      const res = await fetch("https://v2.jokeapi.dev/joke/Programming");
      if(!res.ok) {
        console.log("Failed to fetch jokes");
      }

      const data = await res.json();
      if(data.type === "single"){
        setJokes(data.joke);
      } else if(data.type === "twopart"){
        setJokes(`${data.setup} - ${data.delivery}`);
      }
      console.log(data);
    } catch (err) {
      console.error("Jokes not Found", err);
    }
  };

  const randomAdvise = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      if(!res.ok){
        console.log("Failed to Fetch the api");
      }

      const data = await res.json();
      setAdvise(data.slip.advice);
      console.log(data)
    } catch (error) {
      console.error("Advise not Found", err.message);
    }
  }

  useEffect(() => {
    fetchImage();
    randomJoke();
    randomAdvise();
  }, [])

  



  return (
    <>
      <AdviseCard advise={advise} />
      <button onClick={randomAdvise}>Next Advice</button>

      <JokesCard joke={jokes} />
      <button onClick={randomJoke}>Next Joke</button>

      <CardImage image={image} />
      <button
        style={{ cursor: "pointer", borderRadius: "5px" }}
        onClick={() => fetchImage()}
      >
        Next Image
      </button>

      {data ? (
        data.map((e) => <PostCard key={e.id} title={e.title} body={e.body} />)
      ) : (
        <p>No Data</p>
      )}
    </>
  );
}

export default App
