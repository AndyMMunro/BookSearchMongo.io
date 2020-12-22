import React from "react";
import {useState, useEffect} from "react";
import Axios from "axios";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import SearchForm from "../components/SearchForm";
// import SearchDisplay from "../components/SearchDisplay"
import Card from "../components/Card"

function Home () {
  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  // const [card, setCard] = useState([]);

    useEffect(() => {
      if(!search) {
        // pulls the api data from the utils/API.js->Utils/API.js->here 
        return Axios.get("api/apiroute")
        .then(results => {
          console.log(results,"testing page response");

          if (res.data.length === 0){
            throw new error("please enter a search");
          }
          if (res.data.status === "error"){
            throw new error (results.data.message)
          }
          setBookData(results.data.volumeInfo)
        })
        .catch (error => setError(error));
        }else{
          BookSearch(search)
        }
    },[search]);
    
    const handleInputChange = event => {
      event.preventDefault()
      setSearch(event.target.value);
      // sets display of the data in the card component
      setBookData(BookSearch(search));
    };
    
function BookSearch(search){
  let searchData = []
  
  searchData = bookData.filter(data => 
    data.title.toLowerCase().includes(search))
    // console.log(search);
    console.log(search, "testing search")
    return searchData;
  }

return (
    <Container style={{ minHeight: "100vh" }}>
        <Wrapper>
          <SearchForm
            handleInputChange = {handleInputChange}
            results = {search}
          />
          <Card/>
        </Wrapper>
    </Container>
  );

};

export default Home;