import React from "react";

const CheckOut = () => {
  return (
    <div className="absolute pr-6 w-3/12 top-24 right-0">
      <div className="card bg-gray-50 shadow-xl">
        <figure></figure>
        <div className="card-body">
          <p className="text-blue-500 font-bold border-b border-gray-300 pb-4">
            Credit Hour Remaining 7 hr
          </p>
          <div>
            <p className="font-bold pt-2 border-b border-gray-300 pb-4">
              Course Name
            </p>
          </div>
          <div>
            <p className="border-b border-gray-300 pb-4">Total Credit Hour:</p>
          </div>
          <div>
            <p className="">Total Price:{} USD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
