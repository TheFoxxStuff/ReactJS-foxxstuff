import React from "react";
import "./style.css";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Items from "./componets/Items";
import Links from "./componets/Links";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      links: [
        {
          id: 1,
          name: "Vk",
          href: "https://vk.com/thefoxxstuff",
          ico: "Vk-28.svg"
        },
        {
          id: 2,
          name: "Youtube",
          href: "https://thefoxxstuff.bandcamp.com",
          ico: "Youtube-28.svg"
        },
        {
          id: 3,
          name: "Bandcamp",
          href: "https://thefoxxstuff.bandcamp.com",
          ico: "Bandcamp-28.svg"
        }
      ],
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
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  render() {
    return (
      <div>
        <div class="container">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Links links={this.state.links} />
          <Items items={this.state.items} onAdd={this.addToOrder} />
          <div class="h1-text">Links</div>
          <Footer />
        </div>
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
