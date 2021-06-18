import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import DropdownButton from '../components/DropdownButton';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMenu, setSpecials } from '../actions/airbeanAction';
//import Animation from '../components/Animation';

function Landing() {
  const dispatch = useDispatch();

  async function getMenu() {
    const response = await fetch('http://localhost:5000/api/coffee');
    const data = await response.json();
    const specials = await data.specials.map((item) => {
      item.quantity = 0;
      return item;
    });
    const menu = await data.menu.map((item) => {
      item.quantity = 0;
      return item;
    });
    dispatch(setSpecials(specials));
    dispatch(setMenu(menu));
  }
  useEffect(() => {
    getMenu();
  });
  return (
    <div className="grid bg-brown landing">
      <DropdownButton />
      <Header />
      
      <LoginForm />
    </div>
  );
}

export default Landing;
