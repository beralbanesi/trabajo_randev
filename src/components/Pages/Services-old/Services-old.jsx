
import { useContext } from "react"
import { motion } from 'framer-motion'
import Theme from "../../Theme/Theme"
import * as Css from './ServicesCss-old'
import { Slides } from "../../Globals"
import { routes } from './ServicesRoutes-old'
import * as Strings from './ServicesStrings-old'
import { disappearVariants } from "../../Config"
import { LanguageContext } from '../../Config/LanguageContext'

const Services = () => {

    const { language } = useContext(LanguageContext)
    const sections = routes(Strings, language, Css);
    return (
        <motion.div
            variants={disappearVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <Theme>
                {(language, theme) => (
                    <>
                        <div className={Css[theme].racks}>
                            <Slides language={language} theme={theme} sections={sections} strings={Strings} 
                            cssSwipper={"w-11/12"}
                            />
                        </div>
                    </>
                )}
            </Theme >
        </motion.div>
    )
}

export default Services