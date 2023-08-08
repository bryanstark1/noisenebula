import { useState } from "react";
import SignUpForm from '../SignUpForm/SignUpForm';
import LoginForm from '../LoginForm/LoginForm';
import './AuthForm.css';

interface AuthFormProps {
  setUser: () => void,
}

export default function AuthForm({ setUser }: AuthFormProps) {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className='auth-form'>
    <button onClick={() => setShowSignUp(!showSignUp)} className='auth-button' >{showSignUp ? 'Already a member? Log in here' : 'Not a member? Sign up here.'}</button>
    { showSignUp ?
        <SignUpForm setUser={setUser}/>
        :
        <LoginForm setUser={setUser} />
      }
  </div>
  );
};