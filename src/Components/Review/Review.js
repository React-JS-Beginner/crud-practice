import React from "react";
import { Col } from "react-bootstrap";

const Review = (props) => {
  const { profileImg, profileName, review } = props.review;
  return (
    <Col xl={6} lg={6}>
      <div>
        <img
          className="
      rounded-circle
      border border-5 border-white
      shadow
      mb-3
      "
          style={{
            height: "60px",
            width: "60px",
          }}
          src={profileImg}
          alt=""
        />
      </div>

      <div>
        <p>
          <strong>{profileName}</strong> <br />
          {review}
        </p>
      </div>
    </Col>
  );
};

export default Review;
