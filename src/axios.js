import axios from "axios";

const instance = axios.create({
  //API URL
  baseURL: "https://us-central1-clone-d6bd7.cloudfunctions.net/api ",
  // "http://localhost:5001/clone-d6bd7/us-central1/api",
});

export default instance;
