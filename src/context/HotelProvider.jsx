import { createContext, useState } from "react";

const HotelContext = createContext()

// eslint-disable-next-line react/prop-types
const HotelProvider = ({children}) => {
    const [modal, setModal] = useState(undefined)

    return (
        <HotelContext.Provider value={
            { 
                modal, 
                setModal 
            }
        }>
            { children }
        </HotelContext.Provider>
    );
}

export{
    HotelProvider
}


export default HotelContext;