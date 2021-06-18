import Header from '../components/Header';
import ProfileAvatar from '../components/ProfileAvatar';
import OrderHistory from '../components/OrderHistory';
import DropdownButton from '../components/DropdownButton';
import { useSelector } from 'react-redux';
//import { logout } from '../actions/airbeanAction'
function Profile() {
  const user = useSelector((state) => state.user);

  return (
    <div className="grid bg-brown profile">
      <DropdownButton />
      <Header />
      <ProfileAvatar />
      <div className="user-info">
        <h2 className="white">{user.username}</h2>
        <p className="white">{user.email}</p>
      </div>
      <OrderHistory />
    </div>
  );
}

export default Profile;
