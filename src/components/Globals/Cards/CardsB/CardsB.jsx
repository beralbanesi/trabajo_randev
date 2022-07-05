import { Link } from 'react-router-dom'
import imgCardB from './../../../../assets/img/bg-home.webp'
import { cssFn } from '../../../../helpers'
import * as Css from './CardsBCss'


export const CardsB = ({ theme, language, text }) => {

    const css = cssFn(Css, theme)

    return (
        <ul className={css('container')}>
            <li>
                <Link to="#0" className={css('link')}>
                    <img src={text.img} className={css('img')} alt="" />
                    <div className={css('overlay')}>
                        <div className={css('header')}>
                            <svg className={css('arc')} xmlns="http://www.w3.org/2000/svg"><path /></svg>
                            <img className={css('thumb')}
                                src='/android-chrome-192x192.png'
                                alt="" />
                            <div>
                                <h3 className={css('title')}>
                                    {text.name}</h3>
                                <span className={css('status')}>
                                    {text.charge}</span>
                            </div>
                        </div>
                        <p className={css('desc')}>{text.bio}</p>
                    </div>
                </Link>
            </li>
        </ul>
    )
}
