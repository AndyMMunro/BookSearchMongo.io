import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button"
import Axios from "axios";

// class BootstrapCard extends React.Component{
  //   constructor(props){
    //     super(props)
    //   } 
function BootstrapCard (props){
      // render (){
        console.log(props, "card props test");
        // Axios.get("/api/apiroute")
        // .then(apiroute => {
        //   console.log(apiroute, "testing card response");
        // })
  return(
    // {...props.result.volumeInfo.title}
    // <Card>
    //   <Card.Header></Card.Header>
    //   <Card.Img variant="top" src="holder.js/100px160" />
    //   <Card.Body>
    //   <Card.Title {...props.results.volumeInfo.title}>Special title treatment</Card.Title>
    //   <Card.Text>
    //   With supporting text below as a natural lead-in to additional content.
    //   </Card.Text>
    //   <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
    <div>
      <table className="emp-list" >
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">
                      Name
                    </th>
                </tr>
            </thead>
            <tbody>
            {props.results.map((result) => (
                <tr className="employee-data" key={result.id} >  
                    <td className="emp-list-name" >
                      <p>{result.volumeInfo.title}</p>
                    </td>
                                      
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )}
        

export default BootstrapCard;