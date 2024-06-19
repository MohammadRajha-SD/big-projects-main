import { useContext, createContext, useState } from 'react'

const StateContext = createContext({
    user: null,
    token: null,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {},
});

export const ContextProvider = ({children}) => {
    // user: JSON.parse(localStorage.getItem('USER_ACCOUNT'))
    const [user, setUser] = useState({})
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    const [notification, _setNotification] = useState('')

    const setNotification = (message) => {
        _setNotification(message)
        setTimeout(() => {
            _setNotification('')
        }, 5000);
    }

    const setToken = (token) => {
        _setToken(token);
        if(token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else{
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    // const setUser = (user) => {
    //     _setUser(user);
    //     if(user) {
    //         localStorage.setItem('USER_ACCOUNT', JSON.stringify(user));
    //     } else{
    //         localStorage.removeItem('USER_ACCOUNT');
    //     }
    // }

    return (
        <StateContext.Provider 
            value={{ 
                user, 
                token, 
                notification,
                setUser, 
                setToken,
                setNotification
            }}
        >
            { children }
        </StateContext.Provider>
    )
} 

export const useStateContext = () => useContext(StateContext)
