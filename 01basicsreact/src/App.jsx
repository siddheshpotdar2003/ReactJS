import { useState } from "react";
import Card from "./Card";

function App() {
  const [counter, setCounter] = useState(0);

  const product1 = {
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg",
    name: "Bottle",
    price: "$48",
  };

  const product2 = {
    href: "#",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg",
    name: "Mechanical Pencil",
    price: "$35",
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex p-8">
        <Card product={product1} />
        <Card product={product2} />
      </div>
    </>
  );
}

export default App;
