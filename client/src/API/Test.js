import axios from "axios";

/* what is api foalder 
    we create her an instance using axios.create to our api 
 */

const exempleAPI = axios.create({
  baseURL: "https://swapi.co/api/",
  headers: {
    "X-Requested-With": "XMLHttpRequest"
    //"X-Requested-With": "XMLHttpRequest",
    // "Access-Control-Allow-Origin": "*"
  }
});

export default exempleAPI;