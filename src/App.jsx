import { useState } from "react";
import FilmsList from "./components/filmsList";
import './App.css';

function App(props) {
  let [list, setList] = useState(["ready", "set", "GO"]);
  let [text, setText] = useState("") 

    function onSubmit(event) {
      event.preventDefault();
      
      let updatedList = [...list, text];
      setList(updatedList);
      setText("");

    }
 
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={onSubmit}>
        <input type="text" name="text" id="text" value={text} onChange={(event) => setText(event.target.value)} />
        <button type="submit">add</button>
        </form>
        <ul>
          {list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>;
          })}
        </ul>
        <FilmsList />
      </div>
    )
  
}


export default App;
