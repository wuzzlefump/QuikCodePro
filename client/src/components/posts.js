import React, { useEffect,useState } from 'react'
import {Card, CardBody, CardText } from 'reactstrap'
import AceModalGlobal from './codemodalglobal'
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

    const [iconState,setIcon]=useState()
    const avatarPost = ()=>{
      Avatars.forEach(item=>{
        if(item.name===avatar){
         setIcon(item.icon)
        }
      })
    }

    var thumbsUp = faThumbsUp
    var thumbsDown = faThumbsDown

    useEffect(()=>{avatarPost()},[])

    return(
    <Card className="my-1"style={{ width: '100%',  display:"flex", flexDirection:"column",  justifyContent:"center" }}>
      <CardBody className=" ">
        <div style={{ display:"flex", flexDirection:"column", float: "left" }}>
          <div className="p-1">
            <FontAwesomeIcon icon={thumbsUp} size="1.5x" className = "my-auto mr-4 float-left"></FontAwesomeIcon>
          </div>
          <div className="p-1">
            <FontAwesomeIcon icon={thumbsDown} size="1.5x" className = "my-auto mr-4 float-left"></FontAwesomeIcon>
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