import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/comments", data).then((res) => {
      // console.log(res);
      if (res.data.insertedId) {
        // alert("Review Posted");
        reset();
      }
    });
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
        <input className="mb-3 p-2" placeholder="Name" {...register("profileName")} />
        <input
          className="mb-3 p-2"
          placeholder="Image URL"
          {...register("profileImg")}
        />
        <textarea
          className="mb-3 p-2"
          placeholder="Review"
          {...register("review")}
        />
        <Button className="w-25" variant="success" type="submit">
          Post
        </Button>
      </Form>
    </div>
  );
};

export default AddReview;
