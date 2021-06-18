import '../style/components/Cart.scss';
import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import cart from '../assets/cart.svg';
import Cart from './Cart';


// ett exempel på hur man kan summera orderQuantity som i projekt representeras med en nolla ovanför cart ikonen
//let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {return accumulator + currentValue}, 0)
// sum is 6


function CartButton() {
  const menu = useSelector((state) => state.menu);

  let order = menu.filter((item) => item.quantity > 0);
  let orderQuantity = order.map((item) => item.quantity);
  if (order[0]) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    orderQuantity = orderQuantity.reduce(reducer);
    console.log(orderQuantity)
    
  }
  const [showCart, setShowCart] = useState(false);
  function refresh() {
    setShowCart(false);
  }

  return (
    <Fragment>
      <div
        className="cart"
        onClick={() => {
          setShowCart(!showCart);
        }}>
        <div className="items-in-cart">
          <p>{order[0] ? orderQuantity : order.length}</p>
        </div>
        <img src={cart} alt="cart" />
      </div>
      <Cart show={showCart.toString()} refresh={refresh} />
    </Fragment>
  );
}

export default CartButton;
