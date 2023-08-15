import AuthForm from '../../components/AuthForm/AuthForm';
import ProfileSettings from '../../components/ProfileSettings/ProfileSettings';

import './Profile.css';

interface ProfileProps {
  user: any,
  setUser: any,
}

export default function Profile({ user, setUser }: ProfileProps) {


  return (
    <main className='profile-page'>
      {user ?
        <ProfileSettings user={user} setUser={setUser} />
      :
        <AuthForm setUser={setUser}/>
      }
    </main>
  );
};