import React from "react";
import CheckOut from "../Checkout/CheckOut";
const SingleCard = ({ course }) => {
  return (
    <>
      <div className="h-90">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={course.image} alt="Course" className="w-full h-30" />
          </figure>
          <div className="card-body">
            <h2 className="font-bold">{course.title}</h2>
            <p>{course.description}</p>
            <div className="card-actions justify-between">
              <div>Price: {course.price}</div>
              <div>Credit: {course.credit}</div>
            </div>
            <button className="bg-blue-500 h-8 rounded text-white">
              Select
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
