import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="notfound text-danger text-center">404</h1>
      <h1 className="text-secondary text-center">No Results Found</h1>
      <div className="m-5 p-5">
        <Link className="text-danger text-center" to="/home">
          <h5>Back to home</h5>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
