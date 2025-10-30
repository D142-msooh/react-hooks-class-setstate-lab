import React from "react";
import Item from "./Item";

class ShoppingList extends React.Component {
  state = {
    selectedCategory: "All",
    items: [
      { id: 1, name: "Bananas", category: "Produce" },
      { id: 2, name: "Milk", category: "Dairy" },
      { id: 3, name: "Bread", category: "Bakery" },
      { id: 4, name: "Apples", category: "Produce" },
      { id: 5, name: "Cheese", category: "Dairy" }
    ],
  };

  handleFilterChange = (e) => {
    this.setState({ selectedCategory: e.target.value });
  };

  render() {
    const itemsToDisplay = this.state.items.filter((item) => {
      return this.state.selectedCategory === "All" 
        ? true 
        : item.category === this.state.selectedCategory;
    });

    return (
      <div className="ShoppingList">
        <div className="Filter">
          {/* MUST match test exactly: option must be "All" */}
          <select name="filter" value={this.state.selectedCategory} onChange={this.handleFilterChange}>
            <option value="All">All</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
          </select>
        </div>

        {/* MUST have className="Items" */}
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              category={item.category}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;