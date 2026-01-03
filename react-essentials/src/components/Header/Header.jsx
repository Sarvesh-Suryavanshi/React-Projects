import reactImage from "../../assets/react-core-concepts.png";
import "../Header/Header.css";

const reactDescription = ["Fundamental", "Core", "Crucial"];

function generateRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[generateRandomInt(reactDescription.length - 1)]} React
        concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
