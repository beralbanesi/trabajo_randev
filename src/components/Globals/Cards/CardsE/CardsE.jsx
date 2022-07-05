import * as Css from './CardsECss'
import * as Sizes from './../FormatSizes'
import { cssFn } from '../../../../helpers'

export const CardsE = ({
    theme,
    language,
    text,
    category,
    section,
    format = '3:4',
    size = 'midlarge'
}) => {

    const css = cssFn(Css, theme)

    const myFormat = Sizes.format[format]
    const mySize = Sizes.size[size]


    return (
        <div className={css('container')}>
            <div className={`${section} ${css('subcontainer')}`}>
                <div className={css('border')}
                    style={{
                        width: `${mySize * myFormat}rem`,
                        height: `${mySize}rem`
                    }}>
                    <h2 className={css('h2')}>
                        {text[language][category][section]}
                    </h2>
                </div>
            </div>
        </div>
    )
}

/* <div className={css('icons')}>
        <i className="fa fa-codepen" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <i className="fa fa-dribbble" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-facebook" aria-hidden="true"></i>
    </div> */