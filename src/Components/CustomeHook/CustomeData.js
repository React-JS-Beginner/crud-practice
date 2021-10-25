import { useEffect } from "react";
import { useState } from "react";

const CustomeData = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default CustomeData;
