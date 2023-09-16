import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";
import CheckOut from "../Checkout/CheckOut";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = () => {
  const [jsonData, setJsonData] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCreditHours, setTotalCreditHours] = useState(20);

  const handleCourseSelect = (course) => {
    const newTotalCreditHours = totalCreditHours - course.credit;

    if (newTotalCreditHours < 0) {
      // Check if selecting the course would exceed the limit
      toast.error("Total credit hours cannot exceed 20");
    } else {
      setSelectedCourses([...selectedCourses, course]);
      setTotalCreditHours(newTotalCreditHours);
    }
  };

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
          <SingleCard
            key={course.id}
            course={course}
            onCourseSelect={handleCourseSelect}
          />
        ))}
      </div>
      <CheckOut
        selectedCourses={selectedCourses}
        totalCreditHours={totalCreditHours}
      />
    </div>
  );
};

export default Cards;
