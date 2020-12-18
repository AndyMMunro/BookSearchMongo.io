import React from "react";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Form from "../components/Form";
// import SearchDisplay from "../components/SearchDisplay"
import Card from "../components/Card"

function Home () {

return (
    <Container style={{ minHeight: "100vh" }}>
        <Wrapper>
          <Form/>
          <Card/>
          {/* <SearchDisplay/> */}
        </Wrapper>
    </Container>
  );

};

export default Home;