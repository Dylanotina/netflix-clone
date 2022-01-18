import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import Header from "../containers/header";
import Footer from "../containers/footer";
import { Form } from "../components";


function Signup() {
    let navigate = useNavigate()
    const firebase = useContext(FirebaseContext)
  const [emailAdress, setEmailAdress] = useState('');
  const [firstName, setFirstName] = useState('')
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAdress === "" || firstName === '';

  const handleSignUp = async (event) =>{
    event.preventDefault()
    try {
       let response = await firebase.auth().createUserWithEmailAndPassword(emailAdress,password)
       await response.user.updateProfile({
           displayName : firstName,
           photoURL : Math.floor(Math.random() *5)+ 1
       })
       navigate('/browse')
    } catch (error) {
        setFirstName('')
        setEmailAdress('')
        setPassword('')
        setError(error.message)
    }

  }

    return (
        <>
      <Header>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method="POST">
              
            <Form.Input
              placeholder="First name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email adress"
              value={emailAdress}
              onChange={({ target }) => setEmailAdress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            robot. Learn more.
          </Form.TextSmall>
        </Form>
      </Header>
      <Footer />
    </>
    )
}

export default Signup
