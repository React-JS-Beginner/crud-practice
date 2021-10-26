import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Review = (props) => {
  const { _id, profileImg, profileName, review } = props.review;
  const element = <FontAwesomeIcon className="fs-5 text-danger" icon={faTimesCircle} />;
  return (
    <Col className="d-flex align-items-stretch" xl={6} lg={6}>
      
      <Card className="p-4 d-flex flex-row align-items-baseline">
      
        <Link 
        to={`/comments/${_id}`} 
        className="text-decoration-none text-dark">
          <div>
            <span className="d-none">Hidden Text</span>
            <br />
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
        </Link>

        <Link><div>{element}</div></Link>
        
      </Card>
      
    </Col>
  );
};

export default Review;
