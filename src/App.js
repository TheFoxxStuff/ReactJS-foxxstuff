import React from "react";
import "./style.css";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Items from "./componets/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "name",
          img: "unnamed.png",
          description: "text text text",
          category: "test",
          price: "12.99"
        },
        {
          id: 2,
          title: "name2",
          img: "default_300.png",
          description: "text2 text2 text2",
          category: "test2",
          price: "11.99"
        },
        {
          id: 3,
          title: "naaaaksljdlaksame2",
          img: "Y.jpeg",
          description: "text2 text2 text2",
          category: "test2",
          price: "11.99"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div class="container">
          <Header />
          <div class="h1-text">Releases</div>
          <Items items={this.state.items} />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
