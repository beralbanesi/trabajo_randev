import { useContext, useState } from 'react'
import { cssFn } from '../../../../../helpers'
import * as Css from '../../NavBarCss'
import { ThemeContext } from '../../../../Config/ThemeContext'
import { LanguageContext } from '../../../../Config/LanguageContext'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/* List: devuelve lista con los items del menu mobile. Es invocada por SideDrawer */

export const List = ({ itemlist, click }) => {

    const { instance, theme, changeTheme } = useContext(ThemeContext)
    const { language, changeLanguage } = useContext(LanguageContext)
    const css = cssFn(Css, theme)
    const spring = { type: "spring", stiffness: 700, damping: 30 }
    const [active, setActive] = useState(window.location.pathname)

    return (
        <ul className="p-1 float-right" key="ul" >
            {
                itemlist.map((item, i) => {
                    /* Si el item tiene submenu */
                    if (item.existDropdown)
                        return (
                            <>
                                <li className="pt-8 w-full text-right" key={`li${i}`} >
                                    <Link to={item.href} key={`ls${i}`}
                                        onClick={() => { setActive(item.href); click() }}
                                        className={css('linksMobile') }>
                                        {item.name}
                                    </Link>
                                </li>
                                {/* Carga el submenu */}
                                {item.items.map((subitem, j) => {
                                    return (
                                        <div className="w-full text-right"key={`div${i}${j}`}>
                                            <Link to={subitem.href} key={`lss${j}`}
                                                onClick={() => { setActive(subitem.href); click() }}                                               
                                                className={css('sublinksMobile')}>{subitem.name}</Link>
                                        </div>
                                    )
                                })}
                            </>
                        )
                    else
                        /* El item no tiene submenu */
                        return (
                            <li className="pt-8 w-full text-right" key={`li${i}`} >
                                <Link to={item.href} key={`lsi${i}`}
                                    onClick={(e) => { setActive(item.href); click() }}                                   
                                    className={css('linksMobile')}>
                                    {item.name}
                                </Link>
                            </li>
                        )
                })
            }
            {/* Seccion de botones de idioma */}
            <div className="pt-8" onClick={click} key={`idiomas`}>
                <button key="btnEs"
                    onClick={() => changeLanguage('es')} className={Css.common.flagsMobile}>
                    <img src={Css.paths.languageEsPath} alt={Css.paths.languageEsPath} />
                </button>
                <button key="btnUs"
                    onClick={() => changeLanguage('us')} className={Css.common.flagsMobile}>
                    <img src={Css.paths.languageUsPath} alt={Css.paths.languageUsPath} />
                </button>
            </div>
            {/* Seccion cambio de theme */}
            <div className='mx-2 pt-8' key="theme">
                <div className="switch"
                    key="switch"
                    data-theme={instance}
                    onClick={changeTheme}>
                    <motion.div className="handle"
                        key="handle"
                        data-theme={instance}
                        layout transition={spring} />
                </div>
            </div>
        </ul>
    )
}





