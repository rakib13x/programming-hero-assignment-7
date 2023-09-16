import React, { useEffect, useState } from "react";
import SingleCard from "../CardDetail/CardDetail";
import CheckOut from "../Checkout/CheckOut";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = () => {
  const [jsonData, setJsonData] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCreditHours, setTotalCreditHours] = useState(20);

  const handleCourseSelect = (course) => {
    const courseNumber = selectedCourses.length + 1;

    if (
      selectedCourses.some((selectedCourse) => selectedCourse.id === course.id)
    ) {
      toast.error("You can't select the same course more than once");
    } else if (totalCreditHours - course.credit < 0) {
      toast.error("Total credit hours cannot exceed 20");
    } else {
      const updatedTotalCreditHours = totalCreditHours - course.credit;
      setSelectedCourses([...selectedCourses, { ...course, courseNumber }]);
      setTotalCreditHours(updatedTotalCreditHours);
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
    <div className="w-9/12 ">
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
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Cards;
