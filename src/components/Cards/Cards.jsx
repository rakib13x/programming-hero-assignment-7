import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import CheckOut from "../Checkout/CheckOut";

const Cards = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    fetch("src/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
      })
      .catch((error) => {
        console.log("Error Fetching data", error);
      });
  }, []);
  return (
    <div className="w-9/12">
      <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 p-10">
        {jsonData.map((course) => (
          <SingleCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
