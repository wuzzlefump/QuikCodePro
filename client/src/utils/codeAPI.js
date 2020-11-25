import axios from "axios";

export default {
  // Gets all snips
  getSnips: function() {
    return axios.get("/api/codes/findall");
  },
  // Gets the snip with the given id
  getSnip: function(id) {
    return axios.get("/api/codes/findone" + id);
  },
  // Gets the snip with the given keywords
  getSnipsByKey: function(keyword) {
    return axios.get("/api/codes/key" + keyword);
  },
  // Deletes the snip with the given id
  deleteSnip: function(id) {
    return axios.delete("/api/codes/delete" + id);
  },
  // Saves a snip to the database
  saveSnip: function(codeData) {
      console.log(codeData)
    return axios.post("/api/codes/save", codeData);
  }
};