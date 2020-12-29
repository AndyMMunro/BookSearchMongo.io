import React from "react";
import {useState, useEffect} from "react";
import Axios from "axios";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import SearchForm from "../components/SearchForm";
import Card from "../components/Card"

function Home () {
  const [bookData, setBookData] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  // const [card, setCard] = useState([]);
  console.log(bookData, "testing book data");


    useEffect(() => {
      if(!search) {
        // console.log(search, "test search");
        // pulls the api data from the back utils/API.js->front utils/API.js->here 
         Axios.get("api/apiroute/")
        .then(res => {
          // console.log(res,"testing page response");

          if (res.data.length === 0){
            throw new error("please enter a search");
          }
          if (res.data.status === "error"){
            throw new error (res.data.message)
          }
          setBookData(res.data)
          // setCard(res.data.volumeInfo)
          console.log(res.data, "testing book setBookData");
        })
        .catch (error => setError(error));
        }else{
          BookSearch(search)
        }
    },[]);
    

    const handleInputChange = event => {
      event.preventDefault()
      setSearch(event.target.value);

      Axios.get("api/apiroute?title=" + event.target.value)
      .then(res => {
        console.log(res,"testing page response");
        setBookData(res.data);

        if (res.data.length === 0){
          throw new error("please enter a search");
        }
        if (res.data.status === "error"){
          throw new error (res.data.message)
        }
              })        // setCard(res.data.volumeInfo)
        // console.log(res.data, "testing book setBookData");
      // sets display of the data in the card component
      // setBookData(BookSearch(search));
    };
    
function BookSearch(search){
  let searchData = []
  
  searchData = bookData.filter(data => 
    data.volumeInfo.title.toLowerCase().includes(search))
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
          <Card 
            results={bookData} 
            />
        </Wrapper>
    </Container>
  );

};

export default Home;