import { useEffect } from "react";
import { useState } from "react";

const CustomeData = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://dry-beach-93316.herokuapp.com/comments")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default CustomeData;
