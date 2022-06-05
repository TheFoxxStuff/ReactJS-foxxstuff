import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div class="grid-item-card">
        <div class="card" onClick={() => this.props.onAdd(this.props.item)}>
          <img src={"./img/" + this.props.item.img} />
          <div class="card-price">{this.props.item.title}</div>
          <div class="card-price">{this.props.item.description}</div>
          <div class="card-title">$ {this.props.item.price} USD</div>
          <button onClick={() => this.props.onAdd(this.props.item)}>add</button>
        </div>
      </div>
    );
  }
}

export default Item;
