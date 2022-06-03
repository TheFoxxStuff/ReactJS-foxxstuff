import React, { Component } from "react";

export class Link extends Component {
  render() {
    return (
      <a class="link-a" href={this.props.link.href} target="_blank">
        <div class="link ">
          <div class="button ">{this.props.link.name}</div>
          <img
            width="28px "
            height="28px "
            src={"./img/icons/" + this.props.link.ico}
            class="link-icon"
          />
          <div class="link-bar " id="Bandcamp "></div>
        </div>
      </a>
    );
  }
}

export default Link;
