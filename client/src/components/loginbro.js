import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function LogInBro(){


    return(
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection: "column", marginTop: "10%"}}>
        
        <Card bg="secondary"
        text='white'
        style={{ width: '40rem' }}
        className="mb-2" style={{ opacity:".8"}}>
            <Card.Header style={{textAlign:"center"}}>Quik Code Say</Card.Header>
            <Card.Body style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection: "column", opacity:".8"}}>
            <h4>You Must Log in to view this page </h4>
            <Link to="/login">
                <Button> Login </Button>
            </Link>
            </Card.Body>

        </Card>
      </div>)
}
export default LogInBro