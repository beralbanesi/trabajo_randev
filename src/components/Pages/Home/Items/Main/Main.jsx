import { motion } from 'framer-motion'
import Logo from '../Logo/Logo'
import * as Css from './MainCss'
// import Logos from '../Logos/Logos'
import * as Strings from './MainStrings'
import { home, lToRVariants } from '../../../../Config'
import { cssFn, useScroll } from './../../../../../helpers'
import downIcon from './../../../../../assets/icons/down-arrow.png'


import { useMobile } from "./../../../../../helpers/Hooks/useMobile"


const Main = ({ theme, language }) => {

    const css = cssFn(Css, theme)

    const { isMobile } = useMobile();

    const { value, handleScroll } = useScroll(3)

    return (
        !isMobile ?
            <div className={css('container')}>
                <motion.div className={css('subcontainer')}
                    variants={home}
                    initial='hidden'
                    animate='visible'
                >
                    <motion.div className={css('texts')}
                        variants={lToRVariants}
                        initial='hidden'
                        animate='visible'>
                        <div className={css('title')}>
                            {Strings[ language ].title}
                        </div>
                        <div className={css('text')}>
                            {Strings[ language ].text}
                        </div>
                    </motion.div>
                    <div className={css('image')}>
                        <Logo theme={theme} />
                    </div>
                </motion.div>
                <img
                    className={css('downIcon')}
                    src={downIcon}
                    alt='randev'
                    onScroll={handleScroll}
                    style={{ opacity: value }}
                />
            </div>
            /*------------------MOBILE --------------------*/
            : <div className={css('container')}>
                <div className={css('title')}>
                    {Strings[ language ].title}
                </div>
                <div className={css('text')}>
                    {Strings[ language ].text}
                </div>
            </div>
    )
}

export default Main