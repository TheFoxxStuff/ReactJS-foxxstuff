import React, { Component } from "react";
import Link from "./Link";

export class Links extends Component {
  render() {
    return (
      <main>
        <div class="h1-text">Links</div>
        {this.props.links.map((el) => (
          <Link key={el.id} link={el} />
        ))}
      </main>
    );
  }
}

export default Links;
