import React, {useState, useContext} from 'react'
import Axios from "axios";

import {Modal, Button, ModalHeader, ModalBody, ModalFooter, Alert} from 'reactstrap'
import UserContext from '../utils/UserContext';



function FollowModal({name, bio, id}){
  const { user } = useContext(UserContext);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [showFollowAlert, setShowFollowAlert] =useState(false);
  const [showUnfollowAlert, setShowUnfollowAlert] =useState(false);

  const addFollowAlert = () => {
    setShowFollowAlert(true);
    setTimeout(() => {
      setShowFollowAlert(false);
    }, 3000);
  }

  const addUnfollowAlert = () => {
    setShowUnfollowAlert(true);
    setTimeout(() => {
      setShowUnfollowAlert(false);
    }, 3000);
  }

  const followUser =() => { 
    
    console.log("fired", id)
    addFollowAlert()
    return Axios.put("/api/users/follow", {following:id, followers:user._id}); 
    
}

const unfollowUser =() => { 
    
  console.log("fired", id)
  addUnfollowAlert()
  return Axios.put("/api/users/unfollow", {following:id, followers:user._id}); 
  
}
    return (   
       <div>
      <Button color="primary" onClick={toggle}>{name}</Button>
      <Modal isOpen={modal} toggle={toggle} >
    <ModalHeader toggle={toggle} charCode="X">{name}</ModalHeader>
        <ModalBody>
        {bio}
        
        </ModalBody>
        <ModalFooter>
        {showFollowAlert? (<Alert color="success"> Followed! </Alert>): null}
        {showUnfollowAlert? (<Alert color="danger"> Unfollowed! </Alert>): null}
        {user.following.includes(id)? (<Button color="danger" onClick={unfollowUser}>Unfollow</Button>):
           (<Button color="primary" onClick={followUser}>Follow</Button>)}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
          
        </ModalFooter>
      </Modal>
    </div>
    )

}
export default FollowModal