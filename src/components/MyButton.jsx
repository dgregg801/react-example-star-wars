import { useState } from "react";

/* const [count, setCount] = useState(0);
  
    function handleClick() {
    console.log("Handling the click event");
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
        I'm a button {count}
    </button> 
  )



/*
function MyButton() {

    const [count, setCount] = useState(0);

  
    function handleClick() {
    console.log("Handling the click event");
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
        I'm a button {count}
    </button> 
  )

}
*/

function MyButton(props) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello World");
console.log(props.foods);
  function handleClick() {
    console.log("Handling the click event");
    setCount(count + 1);
    setText(
      text === text.toUpperCase() ? text.toLowerCase() : text.toUpperCase()
    );
  }



  return (
    <div>
        <p>{`The current food is: ${props.foods[count % props.foods.length]}`}</p>
      <button onClick={handleClick}>I'm a button {count}</button>
      <p>{text}</p>
    </div>
  );
}
export default MyButton;
