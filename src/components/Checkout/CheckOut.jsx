import React from "react";

const CheckOut = ({ selectedCourses }) => {
  if (!Array.isArray(selectedCourses)) {
    selectedCourses = [];
  }

  const totalCreditHours = selectedCourses.reduce(
    (total, course) => total + course.credit,
    0
  );
  const totalPrice = selectedCourses.reduce(
    (total, course) => total + course.price,
    0
  );

  return (
    <div className="w-3/12 mt-4 ml-auto">
      <div className="card bg-gray-50 shadow-xl">
        <div className="card-body">
          <h2 className="text-blue-500 font-bold text-xl mb-4">
            Checkout Summary
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
            <strong>Total Credit Hours:</strong> {totalCreditHours}
          </div>
          <div className="mb-2">
            <strong>Total Price:</strong> {totalPrice} USD
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
