import React from 'react'
import {Card, CardBody, CardText } from 'reactstrap'
import AceModalGlobal from './codemodalglobal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Posts({name, author, title, Public, snip, sniptwo, snipthree, language,
  languagetwo,languagethree,comments, userId, _id, keywords, avatar, updated}){

    return(<Card className="my-1"style={{ width: '100%',  display:"flex", flexDirection:"column",  justifyContent:"center" }}>
 
    <CardBody className=" ">
    <FontAwesomeIcon icon={avatar} size="3x" className = "my-auto mr-4 float-left"></FontAwesomeIcon>
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
  </Card>)
}
export default Posts