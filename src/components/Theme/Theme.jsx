import { useContext } from "react"
import * as Css from './ThemeCss'
import { ThemeContext, LanguageContext } from "../Config"
import { cssFn } from "../../helpers"

const Theme = ({ children }) => {

    const { theme } = useContext(ThemeContext)
    const { language } = useContext(LanguageContext)

    const css = cssFn(Css, theme)
    document.getElementById('root').className = `bg-${theme}`

    return (
        <div className={css('back')}>
            {children(language, theme)}
        </div>

    )
}

export default Theme