import React,{useEffect} from 'react'
import {  Container, Row , Button } from "react-bootstrap";
import './LandingPage.css'



const LandingPage = ({history}) => {

  

  useEffect(()=>{
  const userInfo= localStorage.getItem('userInfo');
   if(userInfo){
     history.push("/mynotes");
    }

  }, [history]);
    
  
  
  return (
      <div className='main'>
        <Container>
          <Row>
            <div className="intro-text">
              <div>
                <h1 className='title' > Notezipper</h1>
                <p className='subtitle'>One Safe Place For All Your Notes</p>
              </div>
              <div className="buttonContainer">
                <a href="/login">
                  <Button size="lg" className='landingbutton' >LOGIN</Button>
                </a>
                <a href="/register">
                  <Button size="lg" className='landingbutton'variant='outline-primary'>SIGNUP</Button>
                </a>
  
              </div>
            </div>
          </Row>
        </Container>
      </div>
    )
  }
  
  export default LandingPage
