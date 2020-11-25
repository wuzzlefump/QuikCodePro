import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import ReactAce from 'react-ace';
// import {split as SplitEditor} from 'react-ace';
import brace from 'brace';
// import "./modal.css";
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/theme/monokai';
import {Button,Input, InputGroup,InputGroupAddon}from 'reactstrap'
import './Editor.css'
import $ from "jquery";
import codeAPI from "../utils/codeAPI";


export default function Editor() {
    const [Language1, setLanguage1] = useState("html");
    const [Language2, setLanguage2] = useState("html");
    const [Language3, setLanguage3] = useState("html");
    const [showResults2, setShowResults2] = useState(false);
    const [showResults3, setShowResults3] = useState(false);
    const [textArea1, setTextArea1] = useState("")
    const [textArea2, setTextArea2] = useState("")
    const [textArea3, setTextArea3] = useState("")
    const [snipNote, setNote]=useState("")

    const [snipData, setSnipData] = useState({
        title: '',
        userId: '',
        public: '',
        scriptType: '',
        snip: '',
        scriptTypeTwo: '',
        snipTwo: '',
        scriptTypeThree: '',
        snipThree: '',
        keywords: '',
        dateCreated: '',
        comments: '',
      });
    
      const saveFromEditor = (event) => {
        event.preventDefault();
        try {
          const codeData = {
            title: snipData.title,
            userId: snipData.userId,
            public: snipData.public,
            scriptType: snipData.codeType,
            snip: snipData.snip,
            scriptTypeTwo: snipData.scriptTypeTwo,
            snipTwo: snipData.scriptTypeTwo,
            scriptTypeThree: snipData.scriptTypeTwo,
            snipThree: snipData.scriptTypeTwo,
            keywords: snipData.keywords,
            dateCreated: snipData.dateCreated,
            comments: snipData.comments
          };
          codeAPI.saveSnip(codeData)
        } catch (error) {
          console.log('App -> error', error);
        }
      }

    function handleNoteChange(event){
        const change= event.target.value;
        setNote(change)
        console.log(snipNote)
    }

    // function saveSnip(){
    //     //post call goes
    // }

    function languageSelect1() {
        setLanguage1($("#languageSelect1").val());
        console.log(Language3)
      }
    function languageSelect2() {
        setLanguage2($("#languageSelect2").val());
        console.log(Language3)
    }
    function languageSelect3() {
        setLanguage3($("#languageSelect3").val());
        console.log(Language3)
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

    return (
        <div>
            <div className="d-flex row justify-content-center">
                <Button color="primary" onClick={addEditor1} className="mb-3 mr-2">One Editor</Button>
                <Button color="primary" onClick={addEditor2} className="mb-3 mr-2">Two Editors</Button>
                <Button color="primary" onClick={addEditor3} className="mb-3">Three Editors</Button>
            </div>
            <div className="d-flex row justify-content-center">
                <div className="editor mr-5">
                    <ReactAce ref={ace1} onChange={toTextArea1} mode={Language1} theme="monokai" setReadOnly={false} value={textArea1}/>
                    <textarea  ref={textAreaRef1} value={textArea1} className="textArea"></textarea>
                    <Button color="primary" onClick={toClipBoard1} className="float-right m-1">Copy Code</Button> 
                    <label className="mb-0 mt-3 ml-1" for="formGroupExampleSearch">Language</label>
                    <select class="form-control" id="languageSelect1" onChange={languageSelect1}>
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
                    <div className="editor mr-5">
                    {/* <button type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button> */}
                    <ReactAce ref={ace2} onChange={toTextArea2} mode={Language2} theme="monokai" setReadOnly={false} value={textArea2}/>
                    <textarea  ref={textAreaRef2} value={textArea2} className="textArea"></textarea>
                    <Button color="primary" onClick={toClipBoard2} className="float-right m-1">Copy Code</Button>
                    <label className="mb-0 mt-3 ml-1" for="formGroupExampleSearch">Language</label>
                    <select class="form-control" id="languageSelect2" onChange={languageSelect2}>
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
                            <div className="editor ml-3 mr-5">
                            {/* <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button> */}
                            <ReactAce ref={ace2} onChange={toTextArea2} mode={Language2} theme="monokai" setReadOnly={false} value={textArea2}/>
                            <textarea  ref={textAreaRef2} value={textArea2} className="textArea"></textarea>
                            <Button color="primary" onClick={toClipBoard2} className="float-right m-1">Copy Code</Button>
                            <label className="mb-0 mt-3 ml-1" for="formGroupExampleSearch">Language</label>
                            <select class="form-control" id="languageSelect2" onChange={languageSelect2}>
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
                            <div className="editor">
                            {/* <button type="button" class="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button> */}
                            <ReactAce ref={ace3} onChange={toTextArea3} mode={Language3} theme="monokai" setReadOnly={false} value={textArea3}/>
                            <textarea  ref={textAreaRef3} value={textArea3} className="textArea"></textarea>
                            <Button color="primary" onClick={toClipBoard3} className="float-right m-1">Copy Code</Button>
                            <label className="mb-0 mt-3 ml-1" for="formGroupExampleSearch">Language</label>
                            <select class="form-control" id="languageSelect3" onChange={languageSelect3}>
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
            
            <form>
                <div class="form-group col-md mt-3" style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", borderRadius:5}}>
                <InputGroup size="sm">
            <InputGroupAddon addonType="prepend"></InputGroupAddon>
            <Input placeholder="Title" />
            </InputGroup>
                <br></br>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="snipNote" placeholder="Add notes here" onChange={handleNoteChange}></textarea>
                </div>
            </form>
            <Button color="primary">Submit</Button>
        </div>
    )
}