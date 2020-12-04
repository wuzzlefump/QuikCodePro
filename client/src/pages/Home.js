import React, { useState, useContext, useEffect} from 'react';
import UserContext from '../utils/UserContext'
import LogInBro from '../components/loginbro'
import AceModalGlobal from '../components/codemodalglobal';
import Posts from '../components/posts'
import { Container, Row, Col, Jumbotron, Form, Button, FormGroup, Label, Input, InputGroup, InputGroupText, InputGroupAddon, CustomInput } from 'reactstrap';

import FooterPage from '../components/FooterPage'
import Login from '../components/Login/Login'
import Axios from 'axios';

const Home = () => {
  const { user, loggedIn, logout } = useContext(UserContext);
  const [globalInputState, setGlobalInputState] = useState({language:"html", keywords:""});
  const [snipList, setSnipList] = useState([]);
  const [feedList, setFeedList] = useState([]);



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
    setSnipList(arr)
  })}

  function feedFill(user) {Axios.get("/api/codes/findall").then(data=> {
    console.log(data.data)
    let results = data.data
    let feedArr = []
    results.forEach(item=> {
      if(item.public === true && user.following.includes(item.userId) ){
        feedArr.push(item)
      }
    })
    setFeedList(feedArr.reverse())
  })}

  useEffect(() => {
    if(user !== null){
    feedFill(user);
    }
  }
  ,[user, loggedIn]
  )


  

  return (<>
    {loggedIn ? (<>
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <Jumbotron style={{ marginTop: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", opacity: "0.7", paddingTop: "1rem" }}>
              <h4 className="mb-4">Global Code Search</h4>
              <FormGroup>
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
            {snipList.map(item => <><AceModalGlobal name={item.title} snip={item.snip} sniptwo={item.snipTwo} snipthree={item.snipThree} language={item.scriptType} languagetwo={item.scriptTypeTwo} languagethree={item.scriptTypeThree} keywords={item.keywords} comments={item.comments} Public={item.public} updated={item.updated} userId={item.userId} _id={item._id}/><br /></>)}
            </Jumbotron>
          </Col>
          <Col sm={12} md={8}>
            <Jumbotron style={{ marginTop: "1rem", opacity: "0.7", paddingTop: "1rem" }}>
              <h2 className="mb-4" style={{ textAlign: "center" }}>News Feed:</h2>
              {feedList.map((item) => <><Posts avatar= {item.avatar} author={item.author} name={item.title} title={item.title} snip={item.snip} sniptwo={item.snipTwo} snipthree={item.snipThree} language={item.scriptType} languagetwo={item.scriptTypeTwo} languagethree={item.scriptTypeThree} keywords={item.keywords} comments={item.comments} Public={item.public} updated={item.updated} userId={item.userId} _id={item._id} /></>)}
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
