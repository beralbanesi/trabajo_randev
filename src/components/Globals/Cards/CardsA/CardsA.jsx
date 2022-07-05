import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { cardAvariant } from '../../../Config'
import { cssFn } from '../../../../helpers'
import * as Css from './CardsACss'
import * as Sizes from './../../'

export const CardsA = ({
    text,
    theme,
    format = '16:9',
    size = 'normal'
}) => {

    const css = cssFn(Css, theme)
    const myFormat = Sizes.format[format]
    const mySize = Sizes.size[size]

    return (
        <motion.div className={css('area')}
            variants={cardAvariant}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className={css('container')}
                style={size === 'full'
                    ? { width: '100%' }
                    : {
                        width: `${mySize * myFormat}rem`,
                        height: `${mySize}rem`
                    }}
            >
                <Link
                    to={'/services'}
                    className={css('link')} />
                <img className={css('img')}
                    src={text.img}
                    alt='' />
                <div className={css('overlay')}
                >
                    <h3 className={css('h3')}
                        id="person1"
                        aria-hidden="true">
                        {text.title}
                    </h3>
                    <div className={css('body')}>
                        <p className={css('p')}>
                            {text.desc}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
