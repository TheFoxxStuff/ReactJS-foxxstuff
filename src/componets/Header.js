import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <div class="header-template">
        <a href=" ">
          <div class="logo-text ">TheFoxxStuff</div>
        </a>
      </div>
      <FaShoppingCart
        onClick={() => setCartOpen((cartOpen = !cartOpen))}
        className={`cart ${cartOpen && "active"}`}
      />
      {cartOpen && (
        <div>
          <h2>Корзина</h2>
        </div>
      )}
    </div>
  );
}
