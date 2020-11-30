import React, { useState, useContext, useEffect } from 'react';
import './Profile.scss';
import { Button, Container, Row, Col, Jumbotron, Form, InputGroup, InputGroupText, InputGroupAddon, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Label, FormGroup, CustomInput } from 'reactstrap';
import { Link } from 'react-router-dom';
import UserContext from '../../utils/UserContext';
import AceModalUser from '../../components/codemodaluser'
import FollowModal from '../../components/followModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
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
import { faFrog } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import AvatarOption from '../../components/avatarOp'
import FooterPage from '../../components/FooterPage'
import Login from '../../components/Login/Login'
import Axios from 'axios';


const Avatars = [
  {
    "name": "Plant",
    "icon": faSeedling,
    "size": "7x"
  },
  {
    "name": "Frog",
    "icon": faFrog,
    "size": "7x"
  },
  {
    "name": "Wizard",
    "icon": faHatWizard,
    "size": "7x"
  },
  {
    "name": "Burger",
    "icon": faHamburger,
    "size": "7x"
  },
  {
    "name": "Guitar",
    "icon": faGuitar,
    "size": "7x"
  },
  {
    "name": "Ghost",
    "icon": faGhost,
    "size": "7x"
  },
  {
    "name": "Couch",
    "icon": faCouch,
    "size": "7x"
  },
  {
    "name": "Drumstick",
    "icon": faDrumstickBite,
    "size": "7x"
  },
  {
    "name": "Bird",
    "icon": faDove,
    "size": "7x"
  },
  {
    "name": "Bomb",
    "icon": faBomb,
    "size": "7x"
  },
  {
    "name": "Apple",
    "icon": faAppleAlt,
    "size": "7x"
  },
  {
    "name": "Injured Person",
    "icon": faUserInjured,
    "size": "7x"
  },
  {
    "name": "Ninja",
    "icon": faUserNinja,
    "size": "7x"
  },
  {
    "name": "Person",
    "icon": faUser,
    "size": "7x"
  },
  {
    "name": "Tie Person",
    "icon": faUserTie,
    "size": "7x"
  }, {
    "name": "Hippo",
    "icon": faHippo,
    "size": "7x"
  }, {
    "name": "Dog",
    "icon": faDog,
    "size": "7x"
  }, {
    "name": "Home Slice",
    "icon": faBreadSlice,
    "size": "7x"
  }, {
    "name": "Cat",
    "icon": faCat,
    "size": "7x"
  }
]



const Profile = () => {

  const [currentUser,setCurrentUser] =useState()
  const [avatarState, setAvatar] = useState()

  function initialAvatar(avatar){
const currentAvatar= avatar
Avatars.forEach(item => {
  if (currentAvatar === item.name) {
    setAvatar(item.icon)
  }
})
  }

  function avatarInputChange(event) {
    const currentAvatar = event.target.value;
    Avatars.forEach(item => {
      if (currentAvatar === item.name) {
        setAvatar(item.icon)
      }
    })
    handleUserFormInput(event)
  };
  // lists for code snippets and users
  const [snipList, setSnipList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [userSearchState, setUserSearchState] = useState({})
  const [userFormState, setUserFormState] = useState({})
  const [privateInputState, setPrivateInputState] = useState({language:"html",
keywords:""})

  function handlePrivateInput(event) {
    const { name, value } = event.target;
    setPrivateInputState({ ...privateInputState, [name]: value })
    console.log(privateInputState)
  }

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setUserSearchState({ ...userSearchState, [name]: value })
    console.log(userSearchState)
  }

  const handleUserFormInput = (event) => {
    const { name, value } = event.target;
    setUserFormState({ ...userFormState, [name]: value })
    console.log(userFormState)
  }

  const privateSearchCode = () => {Axios.get("/api/codes/findall").then(data=>{
    console.log(data.data)
    console.log("TEST", data.data)
    let results = data.data
    let arr =[]
    results.forEach(item=>{

      if(item.userId=== user._id && item.keywords.includes(privateInputState.keywords) && item.scriptType.toUpperCase()===privateInputState.language.toUpperCase()){

        arr.push(item)
        console.log("TEST2", item)
      }
    })
    console.log(arr)
    setSnipList(arr)
  }) }

  const userSearch = () => {Axios.get("/api/users/").then(data=>{
    console.log(data.data)
    let x = []
    data.data.forEach(item=>{
      if(item.username.toLowerCase().includes(userSearchState.search.toLowerCase())){
      x.push(item)
     }
    })
    setUserList(x)
    console.log(x)
  }).catch(err=>console.log(err)) }

  const updateUser = () => {Axios.put('/api/users/profile/update',{_id:user._id, avatar:userFormState.avatar, bio:userFormState.bio}).then(data=>{
    console.log(data)
  })}

  const { user, loggedIn, logout } = useContext(UserContext);

 useEffect(()=>{
console.log(user)
setCurrentUser(user)
if(user !== null){
  initialAvatar(user.avatar)
}
},[loggedIn,user,userList,snipList])
  return (<>
    {loggedIn ? (<>

      <Container>
        <Row>
          <Col sm={12} md={3}>
            <Jumbotron style={{ marginTop: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", opacity: "0.7", paddingTop: "2rem" }}>
              <h4 className="mb-3">Private Code Search</h4>
              <FormGroup>
                
                <CustomInput type="select" id="exampleCustomSelect" onChange={handlePrivateInput} name="language" >
                  <option value="">Select a Language</option>
                  <option>JavaScript</option>
                  <option>HTML</option>
                  <option>CSS</option>
                  <option>Mark Down</option>
                  <option>Handlebars</option>
                </CustomInput>
              </FormGroup>
              
              <br />
              <InputGroup size="sm" className="mb-3" onChange={handlePrivateInput}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText id="Keywords"></InputGroupText>
                </InputGroupAddon>
                <Input name="keywords" aria-label="Small" aria-describedby="Keywords" placeholder="KeyWords" />
              </InputGroup>
              <Button color="primary" onClick={privateSearchCode}>Search</Button>
              <br />
              {snipList.map(item => <><AceModalUser keywords={item.keywords} name={item.title} snip={item.snip} sniptwo={item.snipTwo} snipthree={item.snipThree} language={item.scriptType} languagetwo={item.scriptTypeTwo} languagethree={item.scriptTypeThree} updated={item.updated} userId={item.userId} _id={item._id} Public={item.public} comments={item.comments}/><br /></>)}
            </Jumbotron>
          </Col>
          <Col sm={12} md={6}>
            <Jumbotron style={{ marginTop: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", opacity: "0.7", paddingTop: "3rem" }}>
              <FontAwesomeIcon icon={avatarState} size="7x"></FontAwesomeIcon>
              <br></br>
              <FormGroup className ="mb-0 pb-0">
                
              <CustomInput  size="sm" type="select" name="avatar" onChange={avatarInputChange}>
            <option >{user.avatar}</option>
            {Avatars.map(item =><AvatarOption name={item.name}></AvatarOption>)}
            </CustomInput>
            </FormGroup>
              <hr />
            <h4 className="mb-4 mt=0 pt-0">{user.username}</h4>
              <textarea style={{ width: "80%" }} rows="7" name="bio" onChange={handleUserFormInput} placeholder="Write Your Bio Here" value={user.bio}></textarea>
              <br />
              <Button color="primary" onClick={updateUser}>Update</Button>
            </Jumbotron>

          </Col>
          <Col sm={12} md={3}>
            <Jumbotron style={{ marginTop: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", opacity: "0.7", paddingTop: "2rem" }}>
              <h4 className="mb-3">Follow a User</h4>
              <InputGroup size="sm" className="mb-3" onChange={handleUserInput}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText id="user-search"></InputGroupText>
                </InputGroupAddon>
                <Input aria-label="Small" aria-describedby="user-search" placeholder="User Search" name="search" />
              </InputGroup>
              <br />

              <Button color="primary" onClick={userSearch}>Search</Button>
              <br />
              {userList.map(item => <><FollowModal name={item.username} bio={item.bio} /> <br /></>)}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <br></br>

    </>) : (
      <Login></Login>
      )}

  </>
  )
};

export default Profile;
