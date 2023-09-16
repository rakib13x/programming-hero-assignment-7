import React from "react";

const CheckOut = ({ selectedCourses, totalCreditHours }) => {
  const checkOutStyle = {
    position: "absolute",
    top: "6rem",
    right: "2rem",
  };

  const borderStyle = {
    borderBottom: "1px solid #ccc",
    paddingBottom: "0.8rem",
  };

  return (
    <div style={checkOutStyle} className="w-3/12 rounded bg-gray-50 shadow-xl ">
      <div className="card-body">
        <h2
          style={borderStyle}
          className="text-blue-500  font-bold text-xl mb-4"
        >
          Credit Hour Remaining: {totalCreditHours} hr
        </h2>
        <div style={borderStyle} className="mb-2">
          <strong>Selected Courses:</strong>
          <ul>
            {selectedCourses.map((course) => (
              <li key={course.id}>
                {course.courseNumber}. {course.title}
              </li>
            ))}
          </ul>
        </div>
        <div style={borderStyle} className="mb-2">
          <strong>Total Credit Hours:</strong> {20 - totalCreditHours}
        </div>
        <div className="mb-2">
          <strong>Total Price:</strong>{" "}
          {selectedCourses.reduce((total, course) => total + course.price, 0)}{" "}
          USD
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
