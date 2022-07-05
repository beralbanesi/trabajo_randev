import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import './Menu.css'
import { cssFn } from '../../../../helpers'
import {NavBarContext} from '../../../Config/NavBarContext'

/* Menu: Devuelve los items del menu desktop. Es invocado por NavBar */

const Menu = ({ itemlist, strings, css, theme, language }) => {

    const [active, setActive] = useState(window.location.pathname)
    const { item,  changeItem } = useContext(NavBarContext)
    const cssf = cssFn(css, theme)

    //const ecommerceRef = useRef()
    const heightNavbar = 80;
    const handleScrollY = (myRef, heightNavbar) => {
        console.log(myRef)
        window.scrollTo({ top: myRef - heightNavbar, behavior: 'smooth' })
    }

    const handleClick = (href, menuRef) => {
        setActive(href)
        // indico que se cliqueo un item
        changeItem(href)
        handleScrollY(menuRef, heightNavbar)
    }

    return (
        itemlist.map(({ name, href, existDropdown, items, menuRef }, i) => {
            // Si el item tiene submenu
            if (existDropdown)
                return (
                    <div className="dropdown cursor-pointer" key={`dropdown${name}${i}`}>
                        <button onClick={() => handleClick(href, menuRef)}
                            className={active === href ? 'dropbtn ' + css[theme].active + ' ' + cssf(name) : 'dropbtn ' + css[theme].inactive + ' ' + cssf('links') + ' ' + cssf(name)}
                            key={name} >{name}
                        </button>
                        {/* Carga el submenu */}
                        <div className={`dropdown-content${theme}`} key={`dropdownC${name}${i}`}>
                            {items.map(({ name, href }) => {
                                return (
                                    <button className={active === href ? css[theme].active : css[theme].inactive + ' ' + cssf('links')}
                                        key={`linkItem${name}`} onClick={()=> changeItem(href)} >{name}
                                    </button>
                                )
                            })
                            }
                        </div>
                    </div>)
            else
                // El item no tiene submenu
                return (
                    <div className="cursor-pointer" key={`div${name}${i}`}>
                        <button onClick={() => handleClick(href, menuRef)}
                            className={active === href ? css[theme].active : css[theme].inactive + ' ' + cssf('links')}
                            key={name}  >{name}
                        </button>
                    </div>)
        }))
}
export default Menu