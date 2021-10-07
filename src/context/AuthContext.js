import React, {createContext, useState} from "react";
import {useHistory, Link} from 'react-router-dom';
//context maken

export const AuthContext = createContext({});

//Custom Provider maken
function AuthContextProvider({children}) {
    const history = useHistory();
    const [isAuth, toggleIsAuth] = useState(false);

    //contextData that is passed through the application
    const contextData = {
        isAuth: isAuth,
        inloggen: login,
        uitloggen: logout,
    }

//loginfunction
    function login() {
        toggleIsAuth(true)
        console.log("signed in!")
    }

//logoutFunction
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