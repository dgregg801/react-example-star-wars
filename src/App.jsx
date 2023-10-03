import { useState } from "react";
import "./App.css";

function App() {

  const [people, setPeople] = useState([{"name":"Yoda"}]);

  return (
    <div>
      <h1>Star Wars People</h1>
      <ul>
        {people.map(() => {
          return <li>{person.name}</li>
        })}
      </ul>
    </div>
  )

  
}

export default App;
