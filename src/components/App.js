import React from "react";
import ShoppingList from "./ShoppingList";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };

  handleDarkModeClick = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode });
  };

  render() {
    const appClass = this.state.isDarkMode ? "App dark" : "App light";

    return (
      <div className={appClass}>
        <header>
          <h2>Shopping List</h2>
          <button onClick={this.handleDarkModeClick}>
            {this.state.isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        <ShoppingList />
      </div>
    );
  }
}

export default App;