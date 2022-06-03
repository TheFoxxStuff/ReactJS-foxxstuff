import React, { Component } from "react";
import Item from "./Item";

export class Items extends Component {
  render() {
    return (
      <main>
        <div class="grid-cards">
          {this.props.items.map((el) => (
            <Item key={el.id} item={el} />
          ))}
        </div>
      </main>
    );
  }
}

export default Items;
