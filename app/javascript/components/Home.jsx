import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Video Note Taker</h1>
        <p className="lead">
          Find a video and make your personalized notes while you watch
        </p>
        <hr className="my-4" />
        <Link
          to="/search"
          className="btn btn-lg custom-button"
          role="button"
        >
          Search Videos
        </Link>
      </div>
    </div>
  </div>
);