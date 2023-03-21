import { useState } from "react";

const useForm = (init = {}) => {
  const [data, setData] = useState(init);

  const setter = (field) => (e) => setData({ ...data, [field]: e.target.value });

  const get = (field) => data[field];

  const all = () => ({ ...data });

  return { setter, get, all };
};

export default useForm;
