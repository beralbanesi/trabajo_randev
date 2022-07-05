import Theme from "../../Theme/Theme"
import * as Css from './AboutusCss'
import * as Strings from './AboutusStrings'
import { motion } from 'framer-motion'
import { disappearVariants } from "../../Config"


const Aboutus = () => {

    return (
        <motion.div
            variants={disappearVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <Theme>
                {language => (
                    <>
                        <p>{Strings[language].aboutus}</p>
                    </>)
                }
            </Theme>
        </motion.div>
    )
}

export default Aboutus