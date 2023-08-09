import * as userService from '../../utilities/users-service';
import './ProfileSettings.css';

interface ProfileSettingsProps {
  user: any
  setUser: (value: null) => void
}

export default function ProfileSettings({ user, setUser }: ProfileSettingsProps) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className='profile-settings'>
      <h1>Profile</h1>
      <h2>Welcome, {user.username}!</h2>
      <button className='log-out-button' onClick={handleLogOut}>Log Out</button>
    </div>
  );
};