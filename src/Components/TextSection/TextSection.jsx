import "../TextSection/TextSection.css";
import IconCart from "../../../public/assets/Images/icon-cart.svg";

function TextSection() {
  return (
    <div id="RootTextContainer">
      <div id="TextContainer">
        <span>Perfume</span>
        <h1>
          Gabrielle <br />
          Essence Eau
          <br /> De Parfum
        </h1>
        <p>
          {" "}
          A floral, solar and voluptuous interpretation composed by
          <br /> Olivier Polge, Perfumer-Creator
          <br /> for the House of CHANEL.
        </p>
        <ul>
          <li id="CustomLiStyle">$149.99</li>
          <li>
            <s>$169.99</s>
          </li>
        </ul>
        <button id="btn">
          <img src={IconCart}></img> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default TextSection;
