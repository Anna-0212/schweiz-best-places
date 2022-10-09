import { useState } from 'react';
import { data } from './data'
import './App.css';

function App() {

  const [mountain, setMountain] = useState(0);
  const { id, image, name, description, showMore } = data[mountain];

  const [showText, setShowText] = useState(false);

  console.log(data[mountain])

  const previousMountain = () => {
    setMountain((mountain => {
      mountain --;

      if (mountain < 0) {
        return data.length -1;
      }
      return mountain;
    }))
  }

  const nextMountain = () => {
    setMountain((mountain => {
      mountain ++;
      setShowText(!showText)

      if (mountain > data.length -1) {
        mountain = 0;
      }

      return mountain;
    }))
  }

  return (
    <div className='big-container'> 
      <div className="container">
        <h1>My favorite places in Switzerland</h1> 
      </div>
      <div className="container">
        <h2> {id}. {name}</h2>
      </div>
      <div className="container">
        <img src={image} width="300px" alt="mountain" className="mountain" />
      </div>
      <div className="container">
        <p className='text'> {showText ? description : description.substring(0, 150) + "..."}
        <button className='btn-text-more' onClick ={() => setShowText(!showText)}> {showText ? "Show less" : "Show more"}</button>
        </p>
      </div>
      <div className="btn container">
        <button onClick = {previousMountain} className="btn-mountain">previous</button>
        <button onClick = {nextMountain} className="btn-mountain">next</button>
      </div>
    </div>
  );
}

export default App;

