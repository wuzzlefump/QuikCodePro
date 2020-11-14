import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'


function AceModelUser({name, title}){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
          <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <h1>Ace editor goes here</h1>
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder={name} />
        </Form.Group>
        <Form.Control size="sm" as="select">
                <option>Code type</option>
                <option>Javascript</option>
                <option>HTML</option>
                <option>CSS</option>
                <option>Mark Down</option>
                <option>Handlebars</option>
            </Form.Control>
            <br />
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Keywords" />
              </Form.Group>

              <Form.Control size="sm" as="select">
                <option>Sharing Preferences</option>
                <option>Private</option>
                <option>Public</option>
                <option>Followers only</option>
            </Form.Control>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Delete
            </Button>
            <Button variant="primary">Update</Button>
          </Modal.Footer>
        </Modal>
      </>)

}
export default AceModelUser
