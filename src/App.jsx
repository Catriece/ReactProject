import { Component } from "react";
import FilmsList  from "./components/filmsList";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: ["ready", "set", "go"],
      text: "",
      films: [],
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

    onSubmit(event) {
      event.preventDefault();
      
      let updatedList = [...this.state.list, this.state.text];
      this.setState({list: updatedList, text: ""});

    }

  render () {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
        <input type="text" name="text" id="text" value={this.state.text} onChange={(event) => this.setState({ text: event.target.value })} />
        <button type="submit">add</button>
        </form>
        <ul>
          {this.state.list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>;
          })}
        </ul>
        <FilmsList />
      </div>
    )
  }
}


export default App;
