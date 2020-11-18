import React, {useState} from 'react'
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
                 <ReactAce mode={Language} theme="monokai" value={snip} setReadOnly={true} width={465} />
             </div>
          </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Save to your Library</Button>
            <Button variant="primary">Copy To Clipboard</Button>
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
