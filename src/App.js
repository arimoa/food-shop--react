import React from "react";
import Header from "./components/Header/Header";
import MealsSection from "./components/Meals Section/MealsSection";
import GoToTopBtn from "./components/UI/GoToTopBtn";
import { CartContextProvider } from "./store/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <Header />
      <MealsSection />
      <GoToTopBtn />
    </CartContextProvider>
  );
};

export default App;
