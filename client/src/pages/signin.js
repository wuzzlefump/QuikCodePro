import React from 'react'
import SigninNav from '../components/signinnav'
import SignInCard from '../components/signincard'
import FooterPage from '../components/FooterPage'
import SignUpCard from '../components/signupcard'
function SignIn(props){

    return(<>
    {/* <SigninNav/> */}
    {props.action === 'login' ? <SignInCard /> : <SignUpCard />}
    {/* <FooterPage/> */}
    </>)
   
}
 export default SignIn