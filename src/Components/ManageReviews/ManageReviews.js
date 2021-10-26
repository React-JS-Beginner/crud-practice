import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const ManageReviews = () => {
  const [comments, setComments] = useState([]);

  const element = (
    <FontAwesomeIcon className="fs-5 text-danger" icon={faTimesCircle} />
  );

  useEffect(() => {
    fetch('http://localhost:5000/comments')
      .then((res) => res.json())
      .then((data) => setComments(data));
    // .then((data) => console.log(data));
  }, []);

  //Delete
  const deleteHandler = (id) => {   
      fetch(`http://localhost:5000/comments/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deleleCount > 0) {
            const remainingComments = comments.filter(
              (comment) => comment._id !== id
            );
            setComments(remainingComments);
          }
        });
    
  };

  return (
    <div>
      <h3 className="text-uppercase text-center mt-5 mb-5">
        Manage <span className="text-success">reviews</span>
      </h3>
      <Container className="mb-5 pb-5 px-5">
      
      <Row className="g-5">
        {

        comments.map((comment) => (
         <Col key={comment._id} comment={comment} className="d-flex align-items-stretch" xl={6} lg={6}>
         <Card className="p-4 d-flex flex-row align-items-baseline">
           
             <div>
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
                 src={comment.profileImg}
                 alt=""
               />
             </div>
   
             <div>
               <p>
                 <strong>{comment.profileName}</strong> <br />
                 {comment.review}
               </p>
             </div>
             </div>

           <Link onClick={()=>{deleteHandler(comment._id)}} to="#">{element}</Link>
         </Card>
       </Col>          
        ))

        }
      </Row>
    </Container>
    </div>
  );
};

export default ManageReviews;

//key={comment._id} comment={comment}