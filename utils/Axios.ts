import axios from "axios";

const url = process.env.NEXT_PUBLIC_BASE_URL;

// instance for axios
const Axios = axios.create({
  baseURL: url,
});

export default Axios;
