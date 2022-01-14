import React, { Component } from "react";
import { CardList } from "./components/card-list/CardList.component";
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monster) => this.setState({ monsters: monster }));
  }
  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter((monsters) =>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monster={filteredMonsters} />
      </div>
    );
  }
}

export default App;
