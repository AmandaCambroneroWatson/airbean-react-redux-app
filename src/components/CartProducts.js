import arrow from '../assets/arrow.svg';

function CartProducts({ title, price, quantity, refresh }) {
  return (
    <li>
      <section>
        <h2>{title}</h2>
        <div className="quantity">
          <img
            src={arrow}
            alt="arrow"
            onClick={() => {
              refresh('INCREMENT', title);
            }}
          />
          <p>{quantity}</p>
          <img
            src={arrow}
            alt="arrow"
            className="arrow-down"
            onClick={() => {
              refresh('DECREMENT', title);
            }}
          />
        </div>
      </section>
      <p>{price} Kr</p>
    </li>
  );
}

export default CartProducts;
