import logo from '../assets/logo.svg';
import InputFields from './InputFields';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/airbeanAction';
import { useHistory } from 'react-router-dom';


// Här sätter vi igång CRUD-systemet för att skicka POST request till vår databas om användaren har loggat in rätt skikas den vidare till menu annars får användaren fel meddelande.

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  let url = 'http://localhost:5000/api/account';
  let user = {
    username: '',
    email: ''
  };
  function refreshUsername(username) {
    user.username = username;
  }
  function refreshEmail(email) {
    user.email = email;
  }
  async function getUser() {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const data = await response.json();
    dispatch(setUser(data.user));
    if (!data.user.Error) {
      history.push('/menu');
    } else {
      alert(data.user.Error);
    }
  }
  return (
    <div className="login-form  flex">
      <img src={logo} alt="logo" />
      <div className="text">
        <h1>Välkommen till AirBean-familjen!</h1>
        <h3>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</h3>
      </div>
      <InputFields type="text" id="Namn" refresh={refreshUsername} />
      <InputFields type="email" id="Email" refresh={refreshEmail} />
      <p className="GDPR">GDPR Ok!</p>
      <Button text="Logga in" selector="btn-dark" refresh={getUser}></Button>
    </div>
  );
}

export default LoginForm;
