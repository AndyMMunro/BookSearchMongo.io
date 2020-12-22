import React from "react";
// import {useEffect, useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Axios from "axios";


function SearchForm(props){


  return (

    <Form>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Search Your Book</Form.Label>
        <Form.Control type="search" placeholder="Search"  />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
  </Form>
        
  );
};

export default SearchForm;