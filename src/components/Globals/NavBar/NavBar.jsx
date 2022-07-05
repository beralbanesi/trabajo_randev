import * as Css from './NavBarCss'
import * as Strings from './NavBarStrings'
import {NavBarContext} from '../../Config/NavBarContext'
import {ThemeContext} from '../../Config/ThemeContext'
import { LanguageContext } from '../../Config/LanguageContext'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import { menulist, menulistMobile } from './NavBarRoutes'
import { cssFn } from '../../../helpers'
import Menu from './MenuDesktop/Menu'
import { useMobile } from "./../../../helpers/Hooks/useMobile"
import { Link } from 'react-router-dom'

import MenuMobileResponsive from './MenuMobileResponsive/MenuMobileResponsive'

export const NavBar = () => {

    const { instance, theme, changeTheme } = useContext(ThemeContext)
    const { language, changeLanguage } = useContext(LanguageContext)

    const css = cssFn(Css, theme)
    const spring = { type: "spring", stiffness: 700, damping: 30 }


    //console.log("menuRef desde navbar:", menuRefs)
 

    let offsetTopArray = []
    // let offsetTopArray = [ menuRefs[0].current.offsetTop,
    // menuRefs[1].current.offsetTop,
    // menuRefs[2].current.offsetTop,
    // menuRefs[3].current.offsetTop,
    // menuRefs[4].current.offsetTop ]  

    // paths contiene los items del menu desktop
    const paths = menulist(Strings, language, offsetTopArray)
    // pathsmobile contiene los items del menu mobile
    const pathsMobile = menulistMobile(Strings, language)

    const { isMobile } = useMobile();

    return (
        <div className={css('navbar')}>
            {/* Seccion logo  */}
            <Link to={'/'} className={css('navbarLeft') }>
                <img className={css('logo')}
                    src={Css.paths.logo}
                    alt='logo' />
                <p className={css('logoa')}>RAN</p>
                <p className={css('logob')}>DEV</p>
            </Link>
            <div className='flex w-2/3 items-center text-right justify-end'>
                {/* --- Seccion menu version desktop --- */}
                {!isMobile &&
                    <Menu itemlist={paths} strings={Strings} css={Css} theme={theme} language={language} />}
                {/* Seccion botones de idioma */}
                <div>
                    <button
                        onClick={() => changeLanguage('es')} className={Css.common.flags}>
                        <img src={Css.paths.languageEsPath} alt={Css.paths.languageEsPath} />
                    </button>
                    <button onClick={() => changeLanguage('us')} className={Css.common.flags}>
                        <img src={Css.paths.languageUsPath} alt={Css.paths.languageUsPath} />
                    </button>
                </div>
                {/* Seccion theme */}
                <div className='mx-2'>
                    <div className="switch"
                        data-theme={instance}
                        onClick={changeTheme}>
                        <motion.div className="handle"
                            data-theme={instance}
                            layout transition={spring} />
                    </div>
                </div>

                {/* --- Seccion menu version mobile ---*/}
                {isMobile &&
                    <MenuMobileResponsive itemlist={pathsMobile} css={Css} theme={theme} />}
            </div>
        </div >
    )
}
