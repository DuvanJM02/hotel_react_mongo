import { createContext, useEffect, useState } from "react";

const HotelContext = createContext()

// eslint-disable-next-line react/prop-types
const HotelProvider = ({children}) => {
    const [user, setUser] = useState('')

    useEffect(() => {
        getLocalUser()
    });

    function getLocalUser(){
        if (localStorage.getItem('user')) {
            setUser(localStorage.getItem('user'));
            console.log(user);
        } 
    }

    return (
        <HotelContext.Provider value={{ 
                user, 
                setUser
            }}>
            { children }
        </HotelContext.Provider>
    );
}

export{
    HotelProvider
}


export default HotelContext;