import axios from "axios";

//link from where the API is fetched
//GOOGLEAPIs has been used here
//key can be found in Main.jsx file

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});