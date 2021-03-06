import React from "react";
import { Container, Row } from "react-bootstrap";
import CustomeData from "../CustomeHook/CustomeData";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = CustomeData();
  return (
    <Container className="mb-5 pb-5 px-5">
      <h3 className="text-center mt-5 mb-5 pb-3 px-5">
        REVIEWS OF OUR BELOVED <span className="text-success">CLIENTS</span>
      </h3>
      <Row className="g-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
