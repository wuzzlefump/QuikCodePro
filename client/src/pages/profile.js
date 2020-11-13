import React from 'react'
import TheNav from '../components/thenav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Image from 'react-bootstrap/Image'



function Profile(){

    return(<>
<TheNav/>
<Container>
    <Row>
        <Col sm={12} md={3}>
            <Jumbotron style={{marginTop:"10%", display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <Form.Control size="sm" as="select">
                <option>Code type</option>
                <option>Javascript</option>
                <option>HTML</option>
                <option>CSS</option>
                <option>Mark Down</option>
                <option>Handlebars</option>
            </Form.Control>
            <br />
            <Button>Search</Button>
            {/* modal buttons will be mapped here */}
            </Jumbotron>
        </Col>
        <Col sm={12} md={6}>
            <Jumbotron style ={{marginTop:"5%", display: "flex", flexDirection:"column",alignItems:"center", justifyContent:"center" }}>
            {/* avatar image goes here */}
<hr />
            {/* skills / code fluency go here */}
            </Jumbotron>
        </Col>
        <Col sm={12} md={3}>
            <Jumbotron style ={{marginTop:"10%", display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
            <InputGroup size="sm" className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="User Search" />
        </InputGroup>
  <br />
  
  <Button>Search</Button>
  {/* users to connect with populate here */}
            </Jumbotron>
        </Col>
    </Row>
</Container>
{/* jokes @ bottom */}

</>)
    
}
export default Profile