import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

const SingleComment = () => {
  const [comment, setComment] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/comments/${id}`)
      .then((res) => res.json())
      .then((data) => setComment(data));
    // .then((data) => console.log(data));
  }, []);

  //profileName
  //profileImg
  //review

  return (
    <div>
      <h3 className="text-uppercase text-center mt-5 mb-5">
        Every Single <span className="text-success">review</span>
      </h3>
      <div className="d-flex justify-content-center">
        <Card className="w-50 p-4 d-flex flex-row align-items-center">
          <div className="px-3">
            <img
              className="rounded-circle border border-5 border-white shadow"
              style={{
                height: "100px",
                width: "100px",
              }}
              src={comment.profileImg}
              alt=""
            />
          </div>

          <div className="mx-3">
            <p>
              <strong>{comment.profileName}</strong> <br />
              {comment.review}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SingleComment;
