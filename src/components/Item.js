import React from "react";

class Item extends React.Component {
  state = {
    isInCart: false,
  };

  handleClick = () => {
    this.setState({ isInCart: !this.state.isInCart });
  };

  render() {
    return (
      <li className={this.state.isInCart ? "in-cart" : ""}>
        <span>{this.props.name}</span>
        <span className="category">{this.props.category}</span>
        <button onClick={this.handleClick}>
          {this.state.isInCart ? "Remove From Cart" : "Add to Cart"}
        </button>
      </li>
    );
  }
}

export default Item;