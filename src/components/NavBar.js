import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import { useHistory, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
  const history = useHistory();

  const {isAuth,inloggen,uitloggen,formState} =  useContext(AuthContext);
    console.log(isAuth);

  return (
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

        {isAuth && <p>{isAuth.email}</p>}

      <div>
        {!isAuth &&
        <button
          type="button"
          onClick={() => history.push('/signin')}
        >
          Log in
        </button>}
        {!isAuth &&
        <button
          type="button"
          onClick={() => history.push('/signup')}
        >
          Registreren
        </button>}
        {isAuth &&
        <button
            type="button"
            onClick={() =>{
                history.push('/')
                uitloggen();}
                }
        >
          Logout
        </button>}
      </div>
    </nav>
  );
}

export default NavBar;