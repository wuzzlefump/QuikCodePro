import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'

import {Button, Modal, ModalHeader,ModalBody, ModalFooter, Form, FormGroup,Input, InputGroup,InputGroupAddon}from 'reactstrap'


import ReactAce from 'react-ace';
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/mode/markdown';
import 'brace/mode/handlebars';
import 'brace/theme/monokai';
import $ from "jquery";


function AceModelUser({name, title, snip, sniptwo, snipthree, language, languagetwo, languagethree, comments,userId,_id, Public,keywords}){
  
    const [snipOne, setSnipOne] = useState(snip);
    const [snipTwo, setSnipTwo] = useState(sniptwo);
    const [snipThree, setSnipThree] = useState(snipthree);
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    const [snipState,setSnip] =useState({
      title:title,
      comments:comments,
      public:Public,
      languageOne:language,
      languageTwo:languagetwo,
      languageThree:languagethree,

    })
    const [showEditor2, setEditor2] =useState(false)
    const [showEditor3, setEditor3] =useState(false)
    useEffect(() => {

      if (sniptwo.length > 0) {
        setEditor2(true)
        setEditor3(false)
      } if (snipthree.length > 0) {
        setEditor2(true)
        setEditor3(true)
      }
    })

    function handleSnipInput(event){
      const { name, value } = event.target;
      setSnip({...snipState, [name]: value })
      console.log(snipState)
    }

    const [Language, setLanguage] = useState(language);
    const [LanguageTwo, setLanguageTwo] = useState(languagetwo);
    const [LanguageThree, setLanguageThree] = useState(languagethree)

    function languageSelect(event) {
        setLanguage($("#languageSelect").val());
        console.log("Working?", $("#languageSelect").val())
        handleSnipInput(event)
    }
    const ace1 = useRef(null);
    const ace2 = useRef(null);
    const ace3 = useRef(null);
    const textAreaRef1 = useRef(null);
    const textAreaRef2 = useRef(null);
    const textAreaRef3 = useRef(null);

    function toTextArea1() {
        setSnipOne(ace1.current.editor.getValue());
        console.log(snipOne)
    }
    function toTextArea2() {
        setSnipTwo(ace2.current.editor.getValue());
        console.log(snipTwo)
    }
    function toTextArea3() {
        setSnipThree(ace3.current.editor.getValue());
        console.log(snipThree)
    }

  function readEditor(){
  console.log(snipOne) 
  console.log(snipTwo) 
  console.log(snipThree) 
}

    function copyClipboard1() {
      textAreaRef1.current.select();
      document.execCommand('copy');
    }

    function copyClipboard2() {
      textAreaRef2.current.select();
      document.execCommand('copy');
    }

    function copyClipboard3() {
      textAreaRef3.current.select();
      document.execCommand('copy');
    }
    
    const updateSnip =()=>{axios.put('/api/codes/codes/'+_id,{_id:_id, userId:userId,title:snipState.title, comments:snipState.comments, pubic:snipState.Public, snip:snipOne, snipTwo:snipTwo, snipThree:snipThree, scriptType:snipState.languageOne, scriptTypeTwo:snipState.languageTwo, scriptTypeThree: snipState.LanguageThree, updated:Date.now, keywords:keywords }).then(data=> console.log(data)).catch(err=>console.log(err))}
    const deleteSnip =()=>{axios.delete()}
  
    return (

   <div>
    <Button color="primary" onClick={toggle}>{name}</Button>
    <Modal isOpen={modal} toggle={toggle} >
      <ModalHeader toggle={toggle} close={closeBtn}>{name}</ModalHeader>
      <ModalBody>

        {/* this is for the first editor */}
        
          <div>
            <div className="editor mb-2" >
              <ReactAce ref={ace1} name="editorOne"  mode={Language} theme="monokai" setReadOnly={false} width={465} onChange={toTextArea1} maxLines={Infinity} value={snipOne}/>
              <textarea   ref={textAreaRef1} value={snipOne} className="textArea"></textarea>
              <Button onClick={copyClipboard1} className="float-right m-1">Copy Code</Button>
            </div>
              <Input type="select" name="languageOne" value={language} id="exampleSelectMulti"  onChange={languageSelect}>
                  <option value="html">HTML</option>
                  <option value="javascript">Javascript</option>
                  <option value="css">CSS</option>
                  <option value="markdown">Mark Down</option>
                  <option value="handlebars">Handlebars</option>
              </Input>
          </div>
        {/* this is where the first editor ends */}

        {/* this is where the second editor begins */}
        { showEditor2 ?
          <div>
            <div className="d-flex">
              <div className="editor mt-3 mb-2">
                  <ReactAce ref={ace2} name="editorTwo" mode={LanguageTwo} theme="monokai" setReadOnly={false} width={465} maxLines={Infinity} value={sniptwo}  onChange={toTextArea2}/>
                  <textarea  ref={textAreaRef2} value={snipTwo} className="textArea"></textarea>
                    <Button onClick={copyClipboard2} className="float-right m-1">Copy Code</Button>
              </div>
            </div>
            <InputGroup size="sm">
            <InputGroupAddon addonType="prepend"></InputGroupAddon>
            <Input placeholder="Title" value={name} onChange={handleSnipInput}/>
            </InputGroup>
            <br></br>
            <Input name="languageTwo" value={languagetwo} type="select" id="languageSelect" onChange={languageSelect}>
                <option value="html">HTML</option>
                <option value="javascript">Javascript</option>
                <option value="css">CSS</option>
                <option value="markdown">Mark Down</option>
                <option value="handlebars">Handlebars</option>
            </Input>
          </div>
        : null }
        {/* this is where the second editor ends */}
          <br />
        
        {/* this is where the third editor begins */}
        { showEditor3 ?
          <div>
            <div className="d-flex">
              <div className="editor mt-3 mb-2">
                  <ReactAce ref={ace3} name="editorThree" mode={LanguageThree} theme="monokai" setReadOnly={false} width={465} maxLines={Infinity} value={snipthree}  onChange={toTextArea3}/>
                  <textarea  ref={textAreaRef3} value={snipThree} className="textArea"></textarea>
                    <Button onClick={copyClipboard3} className="float-right m-1">Copy Code</Button>
              </div>
            </div>
            <InputGroup size="sm">
            <InputGroupAddon addonType="prepend"></InputGroupAddon>
            <Input placeholder="Title" name="title" value={name} onChange={handleSnipInput}/>
            </InputGroup>
            <br></br>
            <Input name="languageThree" value={languagethree} type="select" id="languageSelect" onChange={languageSelect}>
                <option value="html">HTML</option>
                <option value="javascript">Javascript</option>
                <option value="css">CSS</option>
                <option value="markdown">Mark Down</option>
                <option value="handlebars">Handlebars</option>
            </Input>
          </div>
        : null }
        {/* this is where the third editor ends */}

      


          <Input name="public" size="sm" type="select" onChange={handleSnipInput}>
              <option>Sharing Preferences</option>
              <option>Private</option>
              <option>Public</option>

          </Input>
          <br></br>
          <Input type="textarea" value={comments} name="comments" id="exampleText" onChange={handleSnipInput} placeholder="notes" />
      </ModalBody>
      <ModalFooter style={{ display:"flex",justifyContent:"space-between"}}>
        <Button color="danger" onClick={deleteSnip}>Delete</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        <Button color="primary" onClick={updateSnip}>Update</Button>
      </ModalFooter> 
      
    </Modal>

  </div>




            
)


}
export default AceModelUser
