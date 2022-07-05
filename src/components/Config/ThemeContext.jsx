import { createContext, useState } from "react";


export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('dark')
    const [instance, setInstance] = useState(false)

    const changeTheme = () => {
        setInstance(!instance)
        if (instance) { setTheme('dark') }
        if (!instance) { setTheme('light') }
    }

    return (
        <ThemeContext.Provider value={{
            instance,
            theme,
            changeTheme
        }} >
            {children}
        </ThemeContext.Provider >
    )
}

export default ThemeProvider