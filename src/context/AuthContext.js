import React, {createContext, useState} from "react";
import {useHistory, Link} from 'react-router-dom';
//context maken

export const AuthContext = createContext({});

//Custom Provider maken
function AuthContextProvider({children}) {
    const history = useHistory();
    //const [isAuth, toggleIsAuth] = useState(false);
    const [isAuth, toggleIsAuth] = React.useState({
            username: '',
            password: '',
            email: '',
            isAuth: false,
        }
    )

    function handler(e) {
        const value = e.target.value;
        toggleIsAuth({
            ...isAuth,
            [e.target.name]: value
        })
    }

    //contextData that is passed through the application
    const contextData = {
        isAuth: isAuth,
        toggleIsAuth: toggleIsAuth,
        handler: handler,
        inloggen: login,
        uitloggen: logout,
    }


//loginfunction receives the data from form
    function login(username, password, email) {
        toggleIsAuth({
            isAuth: true,
            username: username,
            password: password,
            email: email
        })
        console.log("signed in!")
    }

//logoutFunction sets isAuth to false
    function logout() {
        toggleIsAuth(false)
        console.log("signed out!")
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;