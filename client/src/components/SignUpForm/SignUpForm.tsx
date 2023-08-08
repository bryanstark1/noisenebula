import { useState } from "react";
import { signUp } from '../../utilities/users-service';

interface SignUpFormProps {
  setUser: any,
}

export default function SignUpForm({ setUser }: SignUpFormProps) {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });
  const [error, setError] = useState('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [evt.target.name]: evt.target.value})
    setError('')
  };

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      const newUser = await signUp(userData);
      setUserData(newUser);
      // setUser(newUser);
    } catch {
      setError('Log In Failed - Try Again')
    }
  };

  const disable = userData.password !== userData.confirm;

  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className='grid-container'>
          <label>Name</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            placeholder='Username'
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder='Email Address'
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            placeholder='Password'
            required
          />
          <label>Confirm</label>
          <input
            type="password"
            name="confirm"
            value={userData.confirm}
            onChange={handleChange}
            placeholder='Confirm Password'
            required
          />
        </div>
        <button type="submit" className='button' disabled={disable}>SIGN UP</button>
      </form>
      <p className="error-message">{error}</p>
    </div>
  );
};