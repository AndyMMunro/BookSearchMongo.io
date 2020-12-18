import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';

class BootstrapJumbotron extends React.Component{
  render(){
  return (
      <Jumbotron fluid>
          <h1>GOOGLE BOOK SEARCH AND SAVE</h1>
          <p>
            Search the books you want to read and save them for later you Cant 
            read every thing at once.
          </p>
      </Jumbotron>
    );
  } 
}
export default BootstrapJumbotron;
