import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import Header from "../containers/header";
import Footer from "../containers/footer";
import { Form } from "../components";

function Signin() {
    let navigate = useNavigate()
    const {state} = useLocation()
    const firebase = useContext(FirebaseContext)
  const [emailAdress, setEmailAdress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAdress === "";

  const handleSignIn =  async (event) => {
    event.preventDefault();
    try{
        await firebase.auth().signInWithEmailAndPassword(emailAdress,password)
       navigate(state?.path ||'/browse')
    }catch(error){
        setEmailAdress('')
        setPassword('')
        setError(error.message)
    }
    
  };

  return (
    <>
      <Header>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email adresss"
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
              Sign in
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            robot. Learn more.
          </Form.TextSmall>
        </Form>
      </Header>
      <Footer />
    </>
  );
}

export default Signin;
