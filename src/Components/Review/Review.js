import React from "react";
import { Card, Col } from "react-bootstrap";

const Review = (props) => {
  const { profileImg, profileName, review } = props.review;
  return (
    <Col className="d-flex align-items-stretch" xl={6} lg={6}>
      <Card className="p-4">
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
      </Card>
    </Col>
  );
};

export default Review;
