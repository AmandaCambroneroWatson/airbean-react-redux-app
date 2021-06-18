import PlusButton from './PlusButton';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateQuantity } from '../actions/airbeanAction';

function MenuItem({ item, refresh }) {
  const menu = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  function handleClick() {
    menu[item.id - 1].quantity += 1;
    dispatch(updateQuantity(menu));
    refresh();
  }

  return (
    <li>
      <PlusButton refresh={handleClick} />
      <div>
        <section>
          <h2>{item.title}</h2>
          <h2>{item.price} Kr</h2>
        </section>
        <p>{item.desc}</p>
      </div>
    </li>
  );
}

export default MenuItem;
