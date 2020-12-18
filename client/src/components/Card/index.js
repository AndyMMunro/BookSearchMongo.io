import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"

class BootstrapCard extends React.Component{
  render (){
    return(

      <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
        With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default BootstrapCard;