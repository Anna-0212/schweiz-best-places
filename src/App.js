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

      if (mountain > data.length -1) {
        mountain = 0;
      }

      return mountain;
    }))
  }
  const showTextClick = (element) => {
    element.showMore = !element.showMore 
    setShowText(!showText)
  }
  

  return (
    <div> 
      <div className="container">
        <h1>My favorite places in Switzerland</h1> 
      </div>
      <div className="container">
        <h2> {id}. {name}</h2>
      </div>
      <div className="container">
        <img src={image} width="400px" alt="mountain" className="mountain" />
      </div>
      <div className="container">
        <p> {showText ? description : description.substring(0, 150) + "..."}
        <button onClick ={() => showTextClick(element)}> {showMore ? "Show less" : "Show more"}</button>
        </p>
      </div>
      <div className="btn container">
        <button onClick = {previousMountain} className="mountain">previous</button>
        <button onClick = {nextMountain} className="mountain">next</button>
      </div>
    </div>
  );
}

export default App;
