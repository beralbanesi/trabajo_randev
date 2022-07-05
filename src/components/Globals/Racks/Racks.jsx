import * as Css from './RacksCss'
import * as Strings from './RacksStrings'
import { cssFn } from '../../../helpers'
import background from '../../../assets/img/bg-home.webp'

export const Racks = ({
    language,
    theme,
    section,
    order = 'left',
    type = 'common',
    button = true,
    img = true
}) => {

    const css = cssFn(Css, theme)
    const ordercss = cssFn(Css, order)
    const typecss = cssFn(Css, type)

    if (type === 'title' || type === 'header') {
        button = false
        img = false
    }

    if (type === 'textonly') {
        img = false
    }

    return (
        <div className={type === 'header'
            ? typecss('container')
            : css('container')
        }>
            <div className={ordercss('subcontainer')}>

                <div className={ordercss('text')}>

                    <div className={type === 'title'
                        ? typecss('title') : css('title')}>
                        {Strings[language][section].title}
                    </div>

                    {type !== 'title' && (
                        <div className={type === 'header'
                            ? css('headerdesc')
                            : ordercss('desc')}>
                            {Strings[language][section].text}
                        </div>
                    )}

                    {button && (
                        <button className={css(`button${order}`)}>
                            {Strings[language][section].button}
                        </button>
                    )}
                </div>

                {img && (<img className={typecss('img')}
                    src={background}
                    alt='racks'
                />)}
            </div>
        </div>
    )
}
