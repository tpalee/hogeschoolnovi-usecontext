import React, {useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import {useForm} from 'react-hook-form';


    function SignIn() {
    //declare inlog function from AuthContext
    const {login} = useContext(AuthContext);
    //declare register and handlesubmit from useForm
    const {register, handleSubmit} = useForm();
    //declare history state
    const history=useHistory();


    function onFormSubmit(data) {
        login(data.email,data.password);
        history.push('/profile');
    }


    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>
            {/*HookForm*/}
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor="email">email
                    <input type="text"
                           name="email"
                           {...register("email")}
                    />
                </label>
                <label htmlFor="password">password
                    <input type="password"
                           name="password"
                           {...register("password")}
                    />
                </label>
                <button type="submit">Inloggen</button>
            </form>
            <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;