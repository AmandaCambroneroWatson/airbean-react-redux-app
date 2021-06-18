import checkForSpecialoffer from '../specialofferhandlers/specialofferFunction';
import { useState, useEffect, Fragment } from 'react';

function OrderHistoryList({ specials, order }) {
  const [sum, setSum] = useState({});

  let date;

  if (order[0].orderDone) {
let dateObj = new Date(order[0].orderCreated);
let month = dateObj.getUTCMonth() + 1; //months from 1-12
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

date = year + "/" + month + "/" + day;
  }

  useEffect(() => {
    setSum(checkForSpecialoffer(specials, 0, 0, order));
  }, [specials, order]);

  return (
    <li>
      <section>
        <p className="weight-700 white">#{order[0].orderId}</p>
        <p className="white">{date ? date : 'Behandlas'}</p>
      </section>
      <section>
        <p className="caption white-transparent">Summa av order</p>
        {sum.discount ? (
          <p className="caption white-transparent">
            {date ? (
              <Fragment>
                <span className="red">{sum.totalDiscount} Kr</span>{' '}
                <span className="line-small">{sum.sum} Kr</span>
              </Fragment>
            ) : (
              <Fragment>
                <span>ETA {order[0].timeLeft} min </span>
                <span className="red">{sum.totalDiscount} SEK</span>{' '}
                <span className="line-small">{sum.sum} SEK</span>
              </Fragment>
            )}
          </p>
        ) : (
          <p className="caption white-transparent">
            {date ? ` ${sum.sum} SEK` : `ETA ${order[0].timeLeft} min, ${sum.sum} SEK`}
          </p>
        )}
      </section>
    </li>
  );
}

export default OrderHistoryList;
