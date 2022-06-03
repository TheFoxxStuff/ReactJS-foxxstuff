import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div class="grid-item-card">
        <a href="">
          <div class="card">
            <img src={"./img/" + this.props.item.img} />
            <div class="card-price">{this.props.item.title}</div>
            <div class="card-price">{this.props.item.description}</div>
            <div class="card-title">$ {this.props.item.price} USD</div>
          </div>
        </a>
      </div>
    );
  }
}

export default Item;
