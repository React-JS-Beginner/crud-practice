import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://dry-beach-93316.herokuapp.com/comments", data)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          // alert("Review Posted");
          reset();
          setSuccess("Review Posted Successfully!");
        }
      });
  };

  //Remove Success Text
  const successTextRemover = () => {
    setSuccess("");
  };

  return (
    <div className="mb-5 pb-3">
      <h3 className="text-center mt-5 mb-5 text-uppercase">
        post your <span className="text-success">review</span>
      </h3>

      <Form
        className="d-flex flex-column w-25 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          onClick={successTextRemover}
          className="mb-3 p-2"
          placeholder="Name"
          {...register("profileName")}
        />
        <input
          onClick={successTextRemover}
          className="mb-3 p-2"
          placeholder="Image URL"
          {...register("profileImg")}
        />
        <textarea
          onClick={successTextRemover}
          className="mb-3 p-2"
          placeholder="Review"
          {...register("review")}
        />
        <Button className="w-25" variant="success" type="submit">
          Post
        </Button>
      </Form>
      <p className="text-center text-success mt-5 fs-5">{success}</p>
    </div>
  );
};

export default AddReview;
