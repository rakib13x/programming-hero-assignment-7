import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
const SingleCard = ({ course, onCourseSelect }) => {
  const handleSelectClick = () => {
    onCourseSelect(course);
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={course.image} alt="Course" className="w-full h-30" />
      </figure>
      <div className="card-body">
        <h2 className="font-bold">{course.title}</h2>
        <p className="md:text-sm">{course.description}</p>
        <div className="flex justify-between">
          <div>
            <FontAwesomeIcon icon={faDollarSign} /> Price: {course.price}
          </div>
          <div>
            <FontAwesomeIcon icon={faBook} /> Credit: {course.credit}
            hr
          </div>
        </div>
        <button
          className="bg-blue-500 h-8 rounded text-white"
          onClick={handleSelectClick}
        >
          Select
        </button>
      </div>
    </div>
  );
};
export default SingleCard;
