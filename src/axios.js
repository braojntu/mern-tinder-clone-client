import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-tinder-clone-server.herokuapp.com",
});

export default instance;
