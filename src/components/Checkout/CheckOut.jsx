import React from "react";

const CheckOut = ({ selectedCourses, totalCreditHours }) => {
  return (
    <div className="w-3/12 mt-4 ml-auto">
      <div className="card bg-gray-50 shadow-xl">
        <div className="card-body">
          <h2 className="text-blue-500 font-bold text-xl mb-4">
            Credit Hour Remaining: {totalCreditHours} hr
          </h2>
          <div className="mb-2">
            <strong>Selected Courses:</strong>
            <ul>
              {selectedCourses.map((course) => (
                <li key={course.id}>
                  {course.courseNumber}. {course.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-2">
            <strong>Total Credit Hours:</strong> {20 - totalCreditHours} / 20
          </div>
          <div className="mb-2">
            <strong>Total Price:</strong>{" "}
            {selectedCourses.reduce((total, course) => total + course.price, 0)}{" "}
            USD
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
