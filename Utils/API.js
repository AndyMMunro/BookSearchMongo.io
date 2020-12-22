const axios = require("axios");

// this calls the api and gets the data asked for thorough the query variable

module.exports = {
  findAll: function(req, res) {
    const { query: params } = req;
    
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + "harry potter" + "&key=AIzaSyCwmIFj-NSX_bW6RlX-1WEUi8haqluutEM", {
        params
      })
      .then(results =>
        results.data.items.filter(
          // this is the specific data desired
          result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLinks &&
            result.volumeInfo.imageLinks.thumbnail
        )
      )
      // this parses the data into a JSON formate and assigns it the variable of books
      .then(apibooks => (res.json(apibooks)));
      // .catch(error => res.status(422)) 

   }
}

// import axios from "axios";
// const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&key=AIzaSyCwmIFj-NSX_bW6RlX-1WEUi8haqluutEM";

// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };
