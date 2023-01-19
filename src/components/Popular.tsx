/* eslint-disable react/jsx-key */

type Recipe = {
  title: string;
  image: string;
};

//import {ReceiptPercentIcon} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Image from "next/image";
function Popular() {
  useEffect(() => {
    getPopular();
  }, []);
  const [popular, setPopular] = useState([]);
  const data = "";
  const getPopular = async () => {
    if (data == "") {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=aeaeaf5cc3c3406dae1f877eccab04a7&number=3`
      );
      const data = await api.json();
      console.log(data);
      setPopular(data.recipes);
    }
  };

  return (
    <div>
      {popular.map(() => {
        return (
          <div className="">
            <h3>Popular picks</h3>
            {popular.map((recipe: Recipe) => {
              return (
                <div className="min-h-full  rounded-3xl">
                  <p>{recipe.title}</p>

                  <Image src={recipe.image} alt={recipe.title} />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Popular;
