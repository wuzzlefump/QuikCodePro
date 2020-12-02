import React from 'react'
import {Card, CardBody, CardText } from 'reactstrap'
import AceModalGlobal from './codemodalglobal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Posts({name, author, title, Public, snip, sniptwo, snipthree, language,
  languagetwo,languagethree,comments, userId, _id, keywords, avatar, updated}){

    return(<Card className="my-1 py-0"style={{ width: '100%',  display:"flex", flexDirection:"column",  justifyContent:"center" }}>
 
    <CardBody>
    <FontAwesomeIcon icon={avatar} size="3x" className = "mt-2 mr-3 float-left"></FontAwesomeIcon>
      <CardText>
       {author} Created a code snippet Titled {name} click the button to visit it
      </CardText>
      <AceModalGlobal name={title} author={author} language={language} 
      snip={snip} avatar={avatar} comments={comments} title={title} 
      Public={Public} sniptwo= {sniptwo} snipthree={snipthree} 
      languagetwo={languagetwo} languagethree={languagethree} userId={userId}
      _id={_id} keywords={keywords} updated={updated}/>
    </CardBody>
  </Card>)
}
export default Posts