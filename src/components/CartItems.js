import React, { useState, useEffect } from "react";

export default function CartItems(props) {
  const [qtty, setQtty] = useState(0);
  const [amount, setAmmount] = useState(0);

  const incQtt = () => {
    setQtty(qtty + 1);
    props.addToOrder(props.id, props.name, props.price);
  };
  const decQtt = () => {
    if (qtty > 0) {
      setQtty(qtty - 1);
      props.removeFromOrder(props.id);
    } else {
      alert("no item is selected");
      setQtty(0);
    }
  };

  useEffect(() => {
    setAmmount(qtty * props.price);
  }, [qtty]);

  return (
    <div className="cart-item d-flex flex-row justify-content-around align-items-start shadow-sm">
      <div className="item-image">
        {/*card image*/}
        <img src={props.cartItemImage} alt="cartItem" />
      </div>

      <h4 className="item-title">{props.cartItemTitle}</h4>

      <div className="item-pricing d-flex flex-column justify-content-center align-items-center">
        <div className="cart-item-controller">
          {/* <i className="fas fa-minus minus" onClick={() => decrement(id)}></i> */}
          <button onClick={decQtt}>-</button>
          <input
            type="text"
            placeholder={qtty}
            disabled
            className="input-minplus text-center"
          />
          {/* <i className="fas fa-plus add" onClick={() => increment(id)}></i> */}
          <button onClick={incQtt}>+</button>
        </div>

        <div>
          <p className="selected-item-price fs-4">$ {amount}</p>
        </div>
        {/*cartItem price*/}
        {/*per unit*/}
        <p>
          ${props.cartItemPrice} per {props.cartItemUnit}
        </p>

        {/*add to cart*/}
        <Button variant="outline-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart-plus-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
