import React, { useState, useRef, useContext } from "react";
import ReactDOM from "react-dom";
import ReactAce from 'react-ace';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
// import {split as SplitEditor} from 'react-ace';
import brace from 'brace';
// import "./modal.css";
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/theme/monokai';
import {Button,Input, InputGroup,InputGroupAddon, Container, Alert}from 'reactstrap'
import './Editor.css'
import $ from "jquery";
import codeAPI from "../utils/codeAPI";
import UserContext from '../utils/UserContext';


export default function Editor() {
    const [Language1, setLanguage1] = useState("html");
    const [Language2, setLanguage2] = useState("");
    const [Language3, setLanguage3] = useState("");
    const [showResults2, setShowResults2] = useState(false);
    const [showResults3, setShowResults3] = useState(false);
    const [textArea1, setTextArea1] = useState("")
    const [textArea2, setTextArea2] = useState("")
    const [textArea3, setTextArea3] = useState("")
    const [snipNote, setNote]=useState("")
    const [snipTitle, setTitle]=useState("")
    const [privacy, setPrivacy]=useState(false)
    const [showAlert, setShowAlert] =useState(false);


    const handlePrivacy=(e)=>{
       let setting = e.target.value
       if (setting === "public"){
           setPrivacy(true)
       }else{
         setPrivacy(false)
       }
    }

    const addAlert = () => {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }

      const saveFromEditor = (event) => {
        // event.preventDefault();
        try {
          const codeData = {
            title: snipTitle,
            userId: user._id,
            public: privacy,
            scriptType: Language1,
            snip: textArea1,
            scriptTypeTwo: Language2,
            snipTwo: textArea2,
            scriptTypeThree: Language3,
            snipThree: textArea3,
            keywords: tagArray.join(","),
            updated:Date.now,
            comments: snipNote,
            author: user.username,
            avatar: user.avatar
          };
          codeAPI.saveSnip(codeData)
          clearCode();
          addAlert();
        } catch (error) {
          console.log('App -> error', error);
        }
      }

    function handleNoteChange(event){
        const noteChange= event.target.value;
        setNote(noteChange)
    }

    function handleTitleChange(event){
        const titleChange= event.target.value;
        setTitle(titleChange)
    }

    // function clearEditor(){
    //     //post call goes
    // }

    function languageSelect1() {
        setLanguage1($("#languageSelect1").val());
      }
    function languageSelect2() {
        setLanguage2($("#languageSelect2").val());

    }
    function languageSelect3() {
        setLanguage3($("#languageSelect3").val());

    }
    function addEditor1() {
        setShowResults2(false)
        setShowResults3(false)
    }
    function addEditor2() {
        setShowResults2(true)
        setShowResults3(false)
    }
    function addEditor3() {
        setShowResults2(false)
        setShowResults3(true)
    }

    function clearCode(){
        ace1.current.editor.session.setValue("")
        if (showResults2 === true) {
            ace2.current.editor.session.setValue("")
        } if (showResults3 === true) {
            ace2.current.editor.session.setValue("")
            ace3.current.editor.session.setValue("")
        }
        setLanguage1("html")
        setLanguage2("")
        setLanguage3("")
        setTags(["example tag"]);
        setTitle("")
        setNote("")
        addEditor1();
    }

    const ace1 = useRef(null);
    const ace2 = useRef(null);
    const ace3 = useRef(null);
    const textAreaRef1 = useRef(null);
    const textAreaRef2 = useRef(null);
    const textAreaRef3 = useRef(null);
    function toTextArea1() {
        setTextArea1(ace1.current.editor.getValue());
        console.log(textArea1)
    }
    function toTextArea2() {
        setTextArea2(ace2.current.editor.getValue());
        console.log(textArea2)
    }
    function toTextArea3() {
        setTextArea3(ace3.current.editor.getValue());
        console.log(textArea3)
    }
    function toClipBoard1() {
        textAreaRef1.current.select();
        document.execCommand('copy')
    }
    function toClipBoard2() {
        textAreaRef2.current.select();
        document.execCommand('copy')
    }
    function toClipBoard3() {
        textAreaRef3.current.select();
        document.execCommand('copy')
    }

    //tag functionality
    const [tags, setTags] = React.useState(["example tag"])
    //creating the array of tags to be added to snipData
    const tagArray = tags.map(tag => tag);
    const { user } = useContext(UserContext);

    return (
        <div>
            <div className="d-flex row justify-content-center">
                <Button color="primary" onClick={addEditor1} className="mb-3 mr-2">One Editor</Button>
                <Button color="primary" onClick={addEditor2} className="mb-3 mr-2">Two Editors</Button>
                <Button color="primary" onClick={addEditor3} className="mb-3">Three Editors</Button>
            </div>
            <div className="d-flex row justify-content-center top-pad">
                <div className="editor left-pad-2 right-pad bottom-pad">
                    <ReactAce ref={ace1} onChange={toTextArea1} mode={Language1} theme="monokai" setReadOnly={false} value={textArea1}/>
                    <textarea  ref={textAreaRef1} value={textArea1} className="textArea"></textarea>
                    <Button color="primary" onClick={toClipBoard1} className="float-right m-1">Copy Code</Button> 
                    <label className="mb-0 mt-3 ml-1 languageSelect" for="formGroupExampleSearch">Language</label>
                    <select className="form-control languageSelect" id="languageSelect1" onChange={languageSelect1}>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="handlebars">Handlebars</option>
                        <option value="javascript">JavaScript</option>
                        <option value="markdown">Markdown</option>
                        <option value="sql">SQL</option>
                    </select>
                </div>
                <div>
                    { showResults2 ? 
                    <div className="editor left-pad bottom-pad">
                    {/* <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button> */}
                    <ReactAce ref={ace2} onChange={toTextArea2} mode={Language2} theme="monokai" setReadOnly={false} value={textArea2}/>
                    <textarea  ref={textAreaRef2} value={textArea2} className="textArea"></textarea>
                    <Button color="primary" onClick={toClipBoard2} className="float-right m-1">Copy Code</Button>
                    <label className="mb-0 mt-3 ml-1" for="formGroupExampleSearch">Language</label>
                    <select className="form-control languageSelect" id="languageSelect2" onChange={languageSelect2}>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="handlebars">Handlebars</option>
                        <option value="javascript">JavaScript</option>
                        <option value="markdown">Markdown</option>
                        <option value="sql">SQL</option>
                    </select>
                    </div> : null }
                </div>
                <div>
                    { showResults3 ?
                    <div className="d-flex row justify-content-center">
                        <div>
                            <div className="editor left-pad bottom-pad">
                            {/* <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button> */}
                            <ReactAce ref={ace2} onChange={toTextArea2} mode={Language2} theme="monokai" setReadOnly={false} value={textArea2}/>
                            <textarea  ref={textAreaRef2} value={textArea2} className="textArea"></textarea>
                            <Button color="primary" onClick={toClipBoard2} className="float-right m-1">Copy Code</Button>
                            <label className="mb-0 mt-3 ml-1" for="formGroupExampleSearch">Language</label>
                            <select class="form-control languageSelect" id="languageSelect2" onChange={languageSelect2}>
                                <option value="html">HTML</option>
                                <option value="css">CSS</option>
                                <option value="handlebars">Handlebars</option>
                                <option value="javascript">JavaScript</option>
                                <option value="markdown">Markdown</option>
                                <option value="sql">SQL</option>
                            </select>
                            </div>
                        </div>
                        <div>
                            <div className="editor left-pad bottom-pad">
                            {/* <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button> */}
                            <ReactAce ref={ace3} onChange={toTextArea3} mode={Language3} theme="monokai" setReadOnly={false} value={textArea3}/>
                            <textarea  ref={textAreaRef3} value={textArea3} className="textArea"></textarea>
                            <Button color="primary" onClick={toClipBoard3} className="float-right m-1">Copy Code</Button>
                            <label className="mb-0 mt-3 ml-1" for="formGroupExampleSearch">Language</label>
                            <select className="form-control languageSelect" id="languageSelect3" onChange={languageSelect3}>
                                <option value="html">HTML</option>
                                <option value="css">CSS</option>
                                <option value="handlebars">Handlebars</option>
                                <option value="javascript">JavaScript</option>
                                <option value="markdown">Markdown</option>
                                <option value="sql">SQL</option>
                            </select>
                            </div>
                        </div>
                    </div> : null }
                </div>
            </div>
            <Container>
                <div>
                <label className="mb-2 mt-3  " for="formGroupExampleSearch">Visibility</label>
                    <select  onChange={handlePrivacy} className="form-control input-group-lg ">
                        <option value="private">Private</option> {/* might have to change value to true or false I think */}
                        <option value="public">Public</option>
                    </select>
                </div>
                <div className="my-4" >
                    <ReactTagInput  tags={tags} onChange={(newTags) => setTags(newTags)} />
                </div>
                <form>
                    <div class="" style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", borderRadius:5}}>
                    <InputGroup size="sm">
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input value={snipTitle} className="title" placeholder="Title" onChange={handleTitleChange}/>
                </InputGroup>
                    <br></br>
                    <textarea value={snipNote} class="form-control" id="exampleFormControlTextarea1" rows="3" name="snipNote" placeholder="Add notes here" onChange={handleNoteChange}></textarea>
                    {showAlert? (<Alert color="success"> You have successfully added this code to your library</Alert>): null}                    
</div>
                </form>
                <Button color="primary mt-3" onClick={saveFromEditor}>Submit</Button>
            </Container>
        </div>
    )
}
