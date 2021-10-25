import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="mb-5 pb-3">
      <h3 className="text-center mt-5 mb-5">
        OUR BELOVED <span className="text-success">CLIENTS</span>
      </h3>

      <Form
        className="d-flex flex-column w-25 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input className="mb-3 p-2" placeholder="Name" {...register("name")} />
        <input
          className="mb-3 p-2"
          placeholder="Image URL"
          {...register("img")}
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
