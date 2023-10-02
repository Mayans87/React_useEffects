import React, { useState, useEffect,useContext,useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import authcontext from '../store/auth-context';
import Input from '../UI/Input/Input';

const Login = (props) => {
  const contentToFocus = useRef();

const ctx = useContext(authcontext)


  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  // const [EmailState, dispatchFx]=useReducer(emailStateReducerfx,{value:'',isValid:false})

  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  useEffect(()=>{
    const t = setTimeout(() => {
      console.log("logged")
      
      
    }, 5000);
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
      return ()=>{console.log("log cleaned");clearTimeout(t)}
    },[enteredEmail,enteredPassword])
    
  useEffect(()=>{
    
    setTimeout(() => {
      
      console.log("mounted log useEffect");
    }, 5000);

  },[])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

   
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid)
   { ctx.onLogin(enteredEmail, enteredPassword);}
   else if(!emailIsValid){
   

   }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id="email" label="E-Mail" type="email" isValid={emailIsValid} onChange={emailChangeHandler} onBlur={validateEmailHandler} value={enteredEmail} ref={contentToFocus} />
        <Input id="password" label="Password" type="password" isValid={passwordIsValid} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} value={enteredPassword} ref={contentToFocus}/>
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
