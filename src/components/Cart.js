import Button from './Button';
import CartProducts from './CartProducts';
import checkForSpecialoffer from '../specialofferhandlers/specialofferFunction';
import { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOrderdetails, updateQuantity } from '../actions/airbeanAction';
import { useHistory } from 'react-router-dom';


// 
function Cart({ show, refresh }) {
  const dispatch = useDispatch();
  const history = useHistory();
  console.log( show,refresh)



  const menu = useSelector((state) => state.menu);
  const user = useSelector((state) => state.user);
  const specials = useSelector((state) => state.specials);
 console.log(menu, user, specials)
 

  const [showCart, setShowCart] = useState('cart-dropdown cart-hide');
  const [check, setCheck] = useState(false);
  const [sum, setSum] = useState({});
  const [rerender, setRerender] = useState(false);

  let order = menu.filter((item) => item.quantity > 0);
  let finalOrder = {
    itemId: [],
    userId: ''
  };

  order.map((item) => {
    for (let i = 0; i < item.quantity; i++) {
      finalOrder = {
        itemId: [...finalOrder.itemId, item.id],
        userId: user.userid
      };
    }
    return finalOrder;
  });

  function refreshCart(type, title) {
    menu.map((item) => {
      return incrementDecrement(type, title, item);
    });

    function incrementDecrement(type, title, item) {
      if (item.title === title) {
        if (type === 'INCREMENT') {
          item.quantity += 1;
          dispatch(updateQuantity(menu));
        } else {
          item.quantity -= 1;
          dispatch(updateQuantity(menu));
        }
      }
    }

    setRerender(!rerender);
  }

  function handleClick() {
    setCheck(!check);
    setShowCart('cart-dropdown cart-hide');
    refresh(false);
  }
  async function sendOrder() {
    const response = await fetch('http://localhost:5000/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(finalOrder)
    });
    const data = await response.json();

    dispatch(setOrderdetails(data));
    history.push('/Status');
  }

  useEffect(() => {
    setSum(checkForSpecialoffer(specials, menu));
  }, [rerender, specials, menu]);

  useEffect(() => {
    if (show === 'true') {
      setSum(checkForSpecialoffer(specials, menu));
      setCheck(show);
      setShowCart('cart-dropdown cart-show');
    }
  }, [show, specials, menu]);

  return (
    <div className={showCart}>
      <div className="close top" onClick={handleClick}></div>
      <div className="close left" onClick={handleClick}></div>
      <div className="cart-inner">
        <h1>Din beställning</h1>
        <ul>
          {order.map((item, index) => {
            return (
              <CartProducts key={index} title={item.title} price={item.price} quantity={item.quantity} refresh={refreshCart} />
            );
          })}
        </ul>
        <footer>
          <div className="total">
            <h2>Total</h2>
            {sum.discount ? (
              <Fragment>
                <h2 className="red">{sum.totalDiscount} Kr</h2> <h2 className="line-big">{sum.sum} Kr</h2>
              </Fragment>
            ) : (
              <h2>{sum.sum} Kr</h2>
            )}
          </div>
          <div className="moms">
            <p>inkl moms + drönarleverans</p>
          </div>
          <div className="btn-wrapper">
            <Button text="Take my money!" selector="btn-dark" refresh={sendOrder} />
          </div>
        </footer>
      </div>
      <div className="close right" onClick={handleClick}></div>
      <div className="close bottom" onClick={handleClick}></div>
    </div>
  );
}

export default Cart;
