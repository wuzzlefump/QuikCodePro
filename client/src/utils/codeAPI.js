import axios from "axios";

export default {
  // Gets all snips
  getSnips: function() {
    return axios.get("/api/codes");
  },
  // Gets the snip with the given id
  getSnip: function(id) {
    return axios.get("/api/codes/" + id);
  },
  // Gets the snip with the given keywords
  getSnipsByKey: function(id) {
    return axios.get("/api/codes/" + keyword);
  },
  // Deletes the snip with the given id
  deleteSnip: function(id) {
    return axios.delete("/api/codes/" + id);
  },
  // Saves a snip to the database
  saveSnip: function(codeData) {
    return axios.post("/api/codes", codeData);
  }
};