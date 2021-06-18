import drone from '../assets/drone.svg';
import Button from '../components/Button';
import '../style/layouts/Status.scss';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setMenu } from '../actions/airbeanAction';
import { useEffect, useState } from 'react';

function Status() {
  const orderDetails = useSelector((state) => state.orderDetails);
  const menu = useSelector((state) => state.menu);
  const history = useHistory();
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState();
  const url = `http://localhost:5000/api/orderId/${orderDetails.orderid}`;

  function handleClick() {
    menu.map((item) => {
      return (item.quantity = 0);
    });
    dispatch(setMenu(menu));
    history.push('/menu');
  }

  useEffect(() => {
    async function fetchTimeLeft() {
      const response = await fetch(url);
      const data = await response.json();

      if (data[0]) {
        setTimeLeft(data[0][0].timeLeft);
      }
    }
    fetchTimeLeft();
  }, [url]);
  return (
    <div className="grid bg-orange status">
      <p className="white">
        Ordernummer <b>#{orderDetails.orderid}</b>
      </p>
      <img src={drone} alt="drone" />
      <h1 className="white">{timeLeft ? 'Din beställing är påväg!' : 'Din beställning är klar!'}</h1>
      <h3 className="white">
        <b>{timeLeft ? timeLeft : 'Enjoy!'}</b>
        {timeLeft ? ' Minuter' : ''}
      </h3>
      <Button text="Ok cool!" selector="btn-white" refresh={handleClick} />
    </div>
  );
}



export default Status;
