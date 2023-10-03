import ClassExercise from "./components/NewFileExercise";
import MyButton from "./components/MyButton";
import "./App.css";

function App() {

  
  const list = ["apples", "pears", "bananas", "mangoes"];

  const x = "Don't Click Me!";
  return (
    <div>
      <h1 className="myCoolClass">Welcome to my app</h1>
      <p>{x}</p>
      <MyButton foods={list}/>
      {list.map((element, index, array) => {
        return <li key={element + index}>{element}</li>;
      })}
    </div>
  );
}

export default App;
