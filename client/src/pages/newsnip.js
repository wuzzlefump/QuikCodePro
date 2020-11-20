import React from 'react'
import TheNav from '../components/thenav'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Editor from '../components/Editor'
import FooterPage from '../components/FooterPage'

function NewSnip(){

    return(<>
    <TheNav/>
    {/* giant ace editor goes here */}
    <Jumbotron style={{opacity:"0.8"}}>
        <Editor />
        {/* code title goes here */}
        {/* code type input goes here */}
        {/* keywords input goes here */}
        {/* savecode */}
    </Jumbotron>
    <FooterPage/>
    </>
    )

}
    export default NewSnip