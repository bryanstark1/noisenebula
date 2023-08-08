import { useState } from "react";
import * as usersService from "../../utilities/users-service";

interface LoginFormProps {
  setUser: any
}

export default function LoginForm({ setUser }: LoginFormProps) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt: React.ChangeEvent<HTMLInputElement>) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div className='grid-container'>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder='Email Address'
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder='Password'
              required
            />
          </div>
          <button type="submit" className='button'>LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </>
  );
};