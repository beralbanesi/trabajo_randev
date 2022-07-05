// estilos randev
import { cssFn } from '../../../../helpers'
import { ThemeContext } from '../../../Config/ThemeContext'
import { LanguageContext } from '../../../Config/LanguageContext'
import React, { useContext } from 'react'
import * as Css from '../NavBarCss'
import { Link } from 'react-router-dom'

const Logo = () => {
    const { theme } = useContext(ThemeContext)
    const css = cssFn(Css, theme)
    return (
        <div className='inline-block align-middle h-[70px]'>
        <Link to={'/'} className={css('navbarLeft')}
        
        >
            <img className={css('logo')  + " inline-block align-middle h-[70px] w-[70px] "}
                src={Css.paths.logo}
                alt='logo' />
            <p className={css('logoa')}>RAN</p>
            <p className={css('logob')}>DEV</p>
        </Link>
        </div>
    )
}


export default Logo;