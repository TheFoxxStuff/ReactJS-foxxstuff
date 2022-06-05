import React, { Component } from "react";

export class Order extends Component {
  render() {
    return (
      <div class="card" onClick={() => this.props.onDelete(this.props.item.id)}>
        <img src={"./img/" + this.props.item.img} />
        <div class="card-price">{this.props.item.title}</div>
        <div class="card-title">$ {this.props.item.price} USD</div>
        <button>X</button>
      </div>
    );
  }
}

export default Order;
