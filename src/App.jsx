import Header from "../src/component/Header";
import Hero from "./component/Hero";
import CartDetail from "./component/CartDetail";
import { useState } from "react";
import product1 from "./assets/image-product-1.jpg";
import product2 from "./assets/image-product-2.jpg";
import product3 from "./assets/image-product-3.jpg";
import product4 from "./assets/image-product-4.jpg";

const products = [product1, product2, product3, product4];

function App() {
  const [quantity, setQuantity] = useState(1);
  const [cartQuantity, setCartQuantity] = useState(0); // for cart
  return (
    <div className="overflow-x-hidden w-full lg:max-w-[1110px] md:max-w-[608px] max-w-[375px] mx-auto py-[19px] md:py-[28px]">
      <Header cartQuantity={cartQuantity} products={products} />
      <Hero
        products={products}
        quantity={quantity}
        setQuantity={setQuantity}
        setCartQuantity={setCartQuantity}
      />
    </div>
  );
}

export default App;
