import React from "react";
import styles from "./MealsSection.module.css";
import Card from "./Card";
import FoodItem from "./FoodItem";
const MealsSection = () => {
  const FOODS_LIST = [
    {
      id: 1,
      name: "Pizza",
      price: 10.99,
      description: "Cheese and pepperoni pizza.",
    },
    {
      id: 2,
      name: "Burger",
      price: 7.99,
      description: "Classic beef burger with veggies.",
    },
    {
      id: 3,
      name: "Salad",
      price: 5.49,
      description: "Fresh mixed greens with dressing.",
    },
    {
      id: 4,
      name: "Sushi",
      price: 15.99,
      description: "Assorted sushi rolls.",
    },
    {
      id: 5,
      name: "Pasta",
      price: 8.49,
      description: "Spaghetti with marinara sauce.",
    },
    {
      id: 6,
      name: "Steak",
      price: 19.99,
      description: "Grilled sirloin steak with potatoes.",
    },
  ];
  return (
    <main className={styles["meals-section"]}>
      <Card>
        {FOODS_LIST.map((food) => (
          <FoodItem key={food.id} item={food} />
        ))}
      </Card>
    </main>
  );
};

export default MealsSection;
