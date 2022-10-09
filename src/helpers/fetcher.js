import axios from "axios";

export const fetchPosts = async () => {
  const {data} = await axios.get(import.meta.env.VITE_API_ENDPOINT + "/posts");
  return data;
};

