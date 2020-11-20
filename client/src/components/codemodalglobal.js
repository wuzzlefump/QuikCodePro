import React, {useState, useRef} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ReactAce from 'react-ace';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/mode/markdown';
import 'brace/mode/handlebars';
import 'brace/theme/monokai';
import $ from "jquery";



function AceModelGlobal({name, title, note, author, snip}){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Language, setLanguage] = useState("html");

    function languageSelect() {
        setLanguage($("#languageSelect").val());
        console.log("Working?", $("#languageSelect").val())
      }
    
    const [textArea1, setTextArea1] = useState("")
    const ace1 = useRef(null);
    const textAreaRef1 = useRef(null);
    
    function toTextArea1() {
      setTextArea1(ace1.current.editor.getValue());
    }
    function copyClipboard() {
      console.log(ace1.current.editor.getValue())
      textAreaRef1.current.select();
      document.execCommand('copy');
    }

    const SaveGlobal =()=>{}
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          {name}
        </Button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
          <Modal.Title>{name+" by "+author}</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <div className="d-flex">
             <div className="editor">
                 <ReactAce ref={ace1} onChange={toTextArea1} mode={Language} theme="monokai" value={snip} setReadOnly={true} width={465}  maxLines={Infinity}/>
                 <textarea  ref={textAreaRef1} value={snip} className="textArea"></textarea>
             </div>
          </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button onClick={SaveGlobal} variant="primary">Save to your Library</Button>
            <Button onClick={copyClipboard} variant="primary">Copy To Clipboard</Button>
          </Modal.Footer>
          <Accordion defaultActiveKey="0">
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Code Note
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
    <Card.Body>{note}</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
        </Modal>
      </>)

}
export default AceModelGlobal
