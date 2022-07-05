import { createContext, useState } from "react";


export const NavBarContext = createContext()

const NavBarProvider = ({ children }) => {

    const [item, setItem] = useState('')
	
	
    const changeItem = (it) => { setItem(it) }

    return (
        <NavBarContext.Provider value={{
            item,
            changeItem,
        }} >
            {children}
        </NavBarContext.Provider >
    )
}

export default NavBarProvider
