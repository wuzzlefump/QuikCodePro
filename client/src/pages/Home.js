import React, { useState, useContext } from 'react';
import UserContext from '../utils/UserContext'
import LogInBro from '../components/loginbro'
import AceModalGlobal from '../components/codemodalglobal'
import Posts from '../components/posts'
import { Container, Row, Col, Jumbotron, Form, Button, FormGroup, Label, Input, InputGroup, InputGroupText, InputGroupAddon, CustomInput } from 'reactstrap';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { faGhost } from '@fortawesome/free-solid-svg-icons'
import { faCouch } from '@fortawesome/free-solid-svg-icons'
import { faDrumstickBite } from '@fortawesome/free-solid-svg-icons'
import { faDove } from '@fortawesome/free-solid-svg-icons'
import { faBomb } from '@fortawesome/free-solid-svg-icons'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import { faUserInjured } from '@fortawesome/free-solid-svg-icons'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { faHippo } from '@fortawesome/free-solid-svg-icons'
import { faBreadSlice } from '@fortawesome/free-solid-svg-icons'
import { faCat } from '@fortawesome/free-solid-svg-icons'
import { faBug } from '@fortawesome/free-solid-svg-icons'
import { faPoo } from '@fortawesome/free-solid-svg-icons'
import { faFrog } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import FooterPage from '../components/FooterPage'
import Login from '../components/Login/Login'
import Axios from 'axios';

const Home = () => {
  const { user, loggedIn, logout } = useContext(UserContext);
  const [globalInputState, setGlobalInputState] = useState({lanuage:"html", keywords:""});
  const [snipList, setSnipList] = useState([]);

  const postsexample = [{ name: "example 1", author: "Bob", language: "Html", snip: "<p>Hello World</p>", avatar: faCat, note: "Quality Stuff" }, { name: "example 2", author: "Tim", language: "Html", snip: "<p>Good night moon</p>", avatar: faDog, note: "Some Good Code Here" }]

  function handleGlobalInput(event) {
    const { name, value } = event.target;
    setGlobalInputState({...globalInputState, [name]: value})
    console.log(globalInputState)
  }

  const globalSearchCode = () => {Axios.get("/api/codes/findall").then(data=> {
    console.log(data.data)
    let results = data.data
    let arr = []
    results.forEach(item=> {
      if(item.public === true && item.keywords.includes(globalInputState.keywords) && item.scriptType.toUpperCase() === globalInputState.language.toUpperCase()){
        arr.push(item)
      }
    })
    console.log(arr)
    setSnipList(arr)
  })}

  return (<>
    {loggedIn ? (<>
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <Jumbotron style={{ marginTop: "10%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", opacity: "0.7" }}>
              <h4>Global Code Search</h4>
              <FormGroup>
                <Label for="exampleCustomSelect">Select a Language</Label>
                <CustomInput type="select" id="exampleCustomSelect" onChange={handleGlobalInput} name="language" >
                  <option value="">Select</option>
                  <option>JavaScript</option>
                  <option>HTML</option>
                  <option>CSS</option>
                  <option>Mark Down</option>
                  <option>Handlebars</option>
                </CustomInput>
              </FormGroup>
              <br />
              <InputGroup size="sm" className="mb-3" onChange={handleGlobalInput}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText id="Keywords"></InputGroupText>
                </InputGroupAddon>
                <Input name="keywords" aria-label="Small" aria-describedby="Keywords" placeholder="KeyWords" />
              </InputGroup>
              <Button color="primary" onClick={globalSearchCode}>Search</Button>
              <br />
            {snipList.map(item => <><AceModalGlobal name={item.title} snip={item.snip} sniptwo={item.snipTwo} snipthree={item.snipThree} language={item.scriptType} languagetwo={item.scriptTypeTwo} languagethree={item.scriptTypeThree} updated={item.updated} userId={item.userId} _id={item._id}/><br /></>)}
            </Jumbotron>
          </Col>
          <Col sm={12} md={8}>
            <Jumbotron style={{ marginTop: "5%", opacity: "0.7" }}>
              <h2 style={{ textAlign: "center" }}>News Feed:</h2>
              {postsexample.map((item) => <><Posts name={item.name} snip={item.snip} author={item.author} language={item.language} avatar={item.avatar} note={item.note} /><br /></>)}
            </Jumbotron>
          </Col>
        </Row>
      </Container>


    </>
    ) : (
        <Login />
      )}

  </>
  )
}
export default Home;
