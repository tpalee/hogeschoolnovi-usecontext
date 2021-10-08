import React, {createContext} from "react";

//setup and export context(import within brackets)
export const AuthContext = createContext({});


//setUp customProvider
function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = React.useState({
            user: '',
            password: '',
            isAuth: false,
        }
    )

    //contextData that is passed through the application
    const contextData = {
        isAuth: isAuth,
        toggleIsAuth: toggleIsAuth,
        login: login,
        logout: logout,
    }


//loginfunction receives the data from form
    function login(email, password) {
        toggleIsAuth({
            isAuth: true,
            user: email,
            password: password,
        })
        console.log("signed in!")

    }

//logoutFunction sets isAuth to false
    function logout() {
        toggleIsAuth({
            user: '',
            password: '',
            isAuth: false,
        })
        console.log("signed out!")
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;