import React, { Component } from "react";

export class Order extends Component {
  render() {
    return (
      <div class="card">
        <img src={"./img/" + this.props.item.img} />
        <div class="card-price">{this.props.item.title}</div>
        <div class="card-title">$ {this.props.item.price} USD</div>
        <button onClick={() => this.props.onDelete(this.props.item.id)}>
          X
        </button>
      </div>
    );
  }
}

export default Order;
