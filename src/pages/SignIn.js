import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import {useHistory} from 'react-router-dom';


function SignIn() {
    //import useContext
    const {isAuth, inloggen} = useContext(AuthContext);
    //import usehistory
    const history = useHistory();

//handles submitform
    function handleSubmit(e) {
        e.preventDefault();
        //logging in
        inloggen();
        history.push("/profile")
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit}>
                <p>*invoervelden*</p>
                <button type="submit">Inloggen</button>
            </form>

            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;