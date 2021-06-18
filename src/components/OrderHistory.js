import OrderHistoryList from './OrderHistoryList';
import { useSelector } from 'react-redux';
import { useEffect, useState} from 'react';
import checkForSpecialoffer from '../specialofferhandlers/specialofferFunction';

function OrderHistory() {
  const user = useSelector((state) => state.user);
  const specials = useSelector((state) => state.specials);
  const url = `http://localhost:5000/api/order/${user.userid}`;
  const [orderHistory, setOrderHistory] = useState([]);
  const [sum, setSum] = useState({});

  function convertToDate(obj) {
    if (obj.orderCreated) {
      return (obj.orderCreated = new Date(obj.orderCreated));
    } else {
      return;
    }
  }
  useEffect(() => {
    async function getorderHistory() {
      const response = await fetch(url);
      const data = await response.json();
      data.map((item) => {
        return item.map((obj) => {
          return convertToDate(obj);
        });
      });
      data.map(() => {
        return data.sort((a, b) => b[0].orderCreated - a[0].orderCreated);
      });
      setOrderHistory(data);
    }
    getorderHistory();
  }, [url]);

  useEffect(() => {
    setSum(checkForSpecialoffer(specials, 0, orderHistory));
  }, [orderHistory, specials]);

  return (
    <div className="order-history">
      <h2 className="white headline">Orderhistorik</h2>
      <ul>
        {orderHistory.map((order, index) => {
          return <OrderHistoryList key={index} order={order} specials={specials} />;
        })}
      </ul>
      <div className="total">
        <p className="white">Totalt spenderat</p>
        {sum.discount ? (
          <section>
            <p className="red">{sum.totalDiscount} Kr</p> <p className="white line-small">{sum.sum} SEK</p>
          </section>
        ) : (
          <p className="white">{sum.sum} SEK</p>
        )}
      </div>
    </div>
  );
}

export default OrderHistory;
