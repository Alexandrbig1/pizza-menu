import React from "react";
import ReactDOM from "react-dom/client";
import pizza from "./data.json";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizza;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2 style={{ color: "rgba(2, 5, 5, 0.60)" }}>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizza.map((pizza) => (
              <Pizza pizzaData={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}

      {/* <ul>
        <Pizza pizzaData={pizza} />
      </ul> */}
    </main>
  );
}

function Pizza({ pizzaData }) {
  // if (props.pizzaData.soldOut) return null;

  const { name, photoName, ingredients, price } = pizzaData;
  return (
    <li className={`pizza ${pizzaData.soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{pizzaData.soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
  // return props.pizzaData.map(
  //   ({ name, photoName, ingredients, price }) => {
  //     return (
  //       <li key={name} className="pizza">
  //         <img src={photoName} alt={name} />
  //         <div>
  //           <h3>{name}</h3>
  //           <p>{ingredients}</p>
  //           <span>{price}</span>
  //         </div>
  //       </li>
  //     );
  //   }
  // );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We`re currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
