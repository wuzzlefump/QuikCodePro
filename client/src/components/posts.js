import React, { useEffect,useState, useContext } from 'react'
import {Card, CardBody, CardText } from 'reactstrap'
import AceModalGlobal from './codemodalglobal'
import axios from 'axios'
import UserContext from '../utils/UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'
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
import { faFrog } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'
const Avatars = [
  {
    "name": "Plant",
    "icon": faSeedling,
  },
  {
    "name": "Frog",
    "icon": faFrog,
  },
  {
    "name": "Wizard",
    "icon": faHatWizard,
  },
  {
    "name": "Burger",
    "icon": faHamburger,
  },
  {
    "name": "Guitar",
    "icon": faGuitar,
  },
  {
    "name": "Ghost",
    "icon": faGhost,
  },
  {
    "name": "Couch",
    "icon": faCouch,
  },
  {
    "name": "Drumstick",
    "icon": faDrumstickBite,
  },
  {
    "name": "Bird",
    "icon": faDove,
  },
  {
    "name": "Bomb",
    "icon": faBomb,
  },
  {
    "name": "Apple",
    "icon": faAppleAlt,
  },
  {
    "name": "Injured Person",
    "icon": faUserInjured,
  },
  {
    "name": "Ninja",
    "icon": faUserNinja,
  },
  {
    "name": "Person",
    "icon": faUser
  },
  {
    "name": "Tie Person",
    "icon": faUserTie
  }, {
    "name": "Hippo",
    "icon": faHippo
  }, {
    "name": "Dog",
    "icon": faDog
  }, {
    "name": "Home Slice",
    "icon": faBreadSlice
  }, {
    "name": "Cat",
    "icon": faCat
  }
]



function Posts({name, author, title, Public, snip, sniptwo, snipthree, language,
  languagetwo,languagethree,comments, userId, _id, keywords, avatar, updated}){

    const { user, loggedIn, logout } = useContext(UserContext);
    const [iconState,setIcon]=useState()
    const avatarPost = ()=>{
      Avatars.forEach(item=>{
        if(item.name===avatar){
         setIcon(item.icon)
        }
      })
    }
    // const upVote= ()=>{    axios.put('/api/codes/codes/like/'+_id,{_id:_id, votes:true, userId:user._id }).then(data=> console.log(data)).catch(err=>console.log(err))};
    // const downVote=()=>{    axios.put('/api/codes/codes/like/'+_id,{_id:_id, votes:false, userId:user._id }).then(data=> console.log(data)).catch(err=>console.log(err))};
    const Vote= ()=>{    axios.put('/api/codes/codes/like/'+_id,{_id:_id, votes:increment, userId:user._id }).then(data=> console.log(data)).catch(err=>console.log(err))};

    const [showUnclickedUpvote, setShowUnclickedUpvote] = useState(true)
    const [showClickedUpvote, setShowClickedUpvote] = useState(false)
    const [showUnclickedDownvote, setShowUnclickedDownvote] = useState(true)
    const [showClickedDownvote, setShowClickedDownvote] = useState(false)
    const [increment, setIncrement] = useState(0)

    function Upvote() {
      setShowUnclickedUpvote(false)
      setShowClickedUpvote(true)
      setShowUnclickedDownvote(true)
      setShowClickedDownvote(false)
      incrementFunction()
    }

    function unUpvote() {
      setShowUnclickedUpvote(true)
      setShowClickedUpvote(false)
      decrementFunction()
    }

    function Downvote() {
      setShowUnclickedDownvote(false)
      setShowClickedDownvote(true)
      setShowUnclickedUpvote(true)
      setShowClickedUpvote(false)
      decrementFunction()
    }

    function unDownvote() {
      setShowUnclickedDownvote(true)
      setShowClickedDownvote(false)
      incrementFunction()
    }

    function incrementFunction() {
      setIncrement(increment + 1)
      Vote()
    }

    function decrementFunction() {
      setIncrement(increment - 1)
      Vote()
    }

    // const [likes, setLikes]=useState()
    // const [dislikes,setDislikes] =useState()
    var thumbsUp = faThumbsUp
    var thumbsDown = faThumbsDown

    useEffect(()=>{avatarPost()},[])

    return(
    <Card className="my-1"style={{ width: '100%',  display:"flex", flexDirection:"column",  justifyContent:"center" }}>
      <CardBody className=" ">
      <div style={{ display:"flex", flexDirection:"column", float: "left", justifyContent: "center" }}>
          <div className="p-1">
            {showUnclickedUpvote ? <FontAwesomeIcon icon={thumbsUp} size="1.5x" className="my-auto mr-4 float-left" onClick={Upvote}></FontAwesomeIcon>: null}
            {showClickedUpvote ? <FontAwesomeIcon style={{ color: "blue" }} icon={thumbsUp} size="1.5x" className="my-auto mr-4 float-left" onClick={unUpvote}></FontAwesomeIcon>: null}
          </div>
            <div style={{border:"1px solid #007BFF", textAlign:"center", width:"25px" }}>{increment}</div>
          <div className="p-1">
            {showUnclickedDownvote ? <FontAwesomeIcon icon={thumbsDown} size="1.5x" className="my-auto mr-4 float-left" onClick={Downvote}></FontAwesomeIcon>: null}
            {showClickedDownvote ? <FontAwesomeIcon style={{ color: "red" }} icon={thumbsDown} size="1.5x" className = "my-auto mr-4 float-left" onClick={unDownvote}></FontAwesomeIcon>: null}
          </div>
        </div>
      <FontAwesomeIcon icon={iconState} size="3x" className = "my-auto mr-4 float-left"></FontAwesomeIcon>
        <p className="float-left mr-3 mt-3">
        <b>{author} </b>  created a code snippet: 
        </p>
        <div className="pt-2">
        <AceModalGlobal className="d-inline  " name={title} author={author} language={language} 
        snip={snip} avatar={avatar} comments={comments} title={title} 
        Public={Public} sniptwo= {sniptwo} snipthree={snipthree} 
        languagetwo={languagetwo} languagethree={languagethree} userId={userId}
        _id={_id} keywords={keywords} updated={updated}/>
        </div>
      </CardBody>
    </Card>
  )
}
export default Posts