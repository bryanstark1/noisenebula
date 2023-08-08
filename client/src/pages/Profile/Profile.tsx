import AuthForm from '../../components/AuthForm/AuthForm';

import * as UserModel from '../../models/user';
import './Profile.css';

interface ProfileProps {
  user: any,
  setUser: any,
}

export default function Profile({ user, setUser }: ProfileProps) {


  return (
    <main className='profile-page'>
      {user &&
      <>
        <h1>Profile</h1>
        <h2>Welcome, {user.username}!</h2>
      </>
      ||
      <>
        <AuthForm setUser={setUser}/>
      </>
      }
    </main>
  );
};