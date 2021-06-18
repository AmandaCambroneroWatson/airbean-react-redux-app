import '../style/components/Dropdown.scss';
import { Fragment } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function DropdownButton() {
  const history = useHistory();
  const [showDropdownbtn, setShowDropdownbtn] = useState('dropdown hide');
  const [checkDropdownbtn, setCheckDropdownbtn] = useState(false);
  function handleClick() {
    if (!checkDropdownbtn) {
      setShowDropdownbtn('dropdown show');
      setCheckDropdownbtn(!checkDropdownbtn);
    } else {
      setShowDropdownbtn('dropdown hide');
      setCheckDropdownbtn(!checkDropdownbtn);
    }
  }

  return (
    <Fragment>
      <div className="round" onClick={handleClick}>
        <div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <div className={showDropdownbtn}>
        <div className="round" onClick={handleClick}>
          <div>
            <div className="line cross-1"></div>
            <div className="line cross-2"></div>
          </div>
        </div>
        <div className="dropdown-items">
          <h2
            onClick={() => {
              history.push('/menu');
            }}>
            Meny
          </h2>
          <h2
            onClick={() => {
              history.push('/about');
            }}>
            Vårt Kaffe
          </h2>
          <h2
            onClick={() => {
              history.push('/profile');
            }}>
            Min Profil
          </h2>
          <h2
            className="without-line"
            onClick={() => {
              history.push('/status');
            }}>
            Orderstatus
          </h2>
        </div>
      </div>
    </Fragment>
  );
}

export default DropdownButton;
