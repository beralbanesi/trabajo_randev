import { motion } from 'framer-motion'
import { useRef } from 'react'
import * as Css from './HomeCss'
import Main from './Items/Main/Main';
import * as Strings from './HomeStrings'
import Theme from './../../Theme/Theme';
import { disappearVariants } from '../../Config';
import { NavBarContext } from '../../Config/NavBarContext';
import { cssFn, useScroll } from './../../../helpers'
import slidesimulado from './../../../assets/img/bg-home.webp'
import { Racks, CardsA, CardsB, CardsD, CardsE, Slides } from './../../Globals';
import { routes } from './HomeRoutes'
import * as ProjStrings from './ProjectsStrings'
import { useMobile } from "./../../../helpers/Hooks/useMobile"
import { Link } from 'react-router-dom';
import { Brandbook } from './Items/Brandbook/Brandbook';
import { useEffect, useContext } from 'react';



const Home = () => {
    const { isMobile } = useMobile();
    const { item, changeItem } = useContext(NavBarContext)
    // Para comportamiento de scrolls
    const homeRef = useRef()
    const servicesRef = useRef()
    const projectsRef = useRef()
    const aboutRef = useRef()
    const contactRef = useRef()
    const webpagesRef = useRef()
    const brandbookRef = useRef()
    const ecommerceRef = useRef()
    const softwareRef = useRef()
    const heightNavbar = 80;
    const handleScrollY = (myRef, heightNavbar) => {
        console.log("refTop:", myRef.current.offsetTop)
        window.scrollTo({ top: myRef.current.offsetTop - heightNavbar, behavior: 'smooth' })
    }

    // Se esta usando??
    const { value: webpagesValue, handleScroll: webpagesHandleScroll } = useScroll(1.5, 'scrollY', webpagesRef)
    const { value: ecommerceValue, handleScroll: ecommerceHandleScroll } = useScroll(1.2, 'scrollY', ecommerceRef)


    useEffect(() => {
        console.log(" desde home cambio href:", item)
        if (item == '/') {
            handleScrollY(homeRef, heightNavbar)
        }
        if (item == '/services') {
            handleScrollY(servicesRef, heightNavbar)
        }
        if (item == '/projects') {
            handleScrollY(projectsRef, heightNavbar)
        }
        if (item == '/about') {
            handleScrollY(aboutRef, heightNavbar)
        }
        if (item == '/contact') {
            handleScrollY(contactRef, heightNavbar)
        }
        if (item == 'webpages') {
            handleScrollY(webpagesRef, heightNavbar)
        }
        if (item == 'brandbook') {
            handleScrollY(brandbookRef, heightNavbar)
        }
        if (item == 'ecommerce') {
            handleScrollY(ecommerceRef, heightNavbar)
        }
        if (item == 'software') {
            handleScrollY(softwareRef, heightNavbar)
        }


    }, [item]);

    return (
        !isMobile ?
            <motion.div
                variants={disappearVariants}
                initial='hidden'
                animate='visible'
                exit='exit'>
                <Theme>
                    {(language, theme) => {
                        const sections = routes(ProjStrings, language, Css);
                        const css = cssFn(Css, theme)

                        return (
                            <>
                                {/* <button onClick={() => { handleScrollY(webpagesRef, heightNavbar) }}>IR a WEB_PAGES--</button>
                            <button onClick={() => { handleScrollY(ecommerceRef, heightNavbar) }}>IR a ECOMM</button> */}
                                <div
                                    onScroll={webpagesHandleScroll}
                                    // style={{ opacity: webpagesValue }}
                                    ref={homeRef}
                                >
                                    <Main
                                        language={language}
                                        theme={theme} />
                                </div>
                                <div className={Css[theme].racks}>
                                    {/* Servicios Web */}
                                    <div ref={servicesRef}>
                                        <Racks
                                            section='webservices'
                                            type='title'
                                            language={language}
                                            theme={theme}
                                        />
                                    </div>
                                    <div className={css('webpages')} ref={webpagesRef} >
                                        {/* Paginas */}
                                        <Racks
                                            section='webpages'
                                            type='header'
                                            language={language}
                                            theme={theme}
                                            button={false}
                                        />
                                        <div className={css('group')} >
                                            {Strings[language].webpages.map(web =>
                                                <CardsA
                                                    key={web.title}
                                                    text={web}
                                                    theme={theme}
                                                    format='4:3'
                                                    size='normal'
                                                />)}
                                        </div>
                                    </div>

                                    {/* Manual de marca */}
                                    <div ref={brandbookRef} >
                                        <Brandbook
                                            theme={theme}
                                            language={language}
                                            text={Strings[language].brandbook}
                                        />
                                    </div>
                                    {/* E-commerce */}
                                    <div className={css('ecommerce')}

                                        ref={ecommerceRef}>
                                        <Racks
                                            section='ecommerce'
                                            type='header'
                                            language={language}
                                            theme={theme}
                                            button={false}
                                        />
                                        <div className={css('group')}>
                                            {Strings[language].ecommerce
                                                .map(text =>
                                                    <CardsD
                                                        key={text.title}
                                                        text={text}
                                                        theme={theme}
                                                        button={true}
                                                        size='large'
                                                    />
                                                )}
                                        </div>
                                    </div>

                                    {/* Software */}
                                    <div className={css('software')} ref={softwareRef}>
                                        <Racks
                                            section='software'
                                            type='header'
                                            language={language}
                                            theme={theme}
                                            button={false}
                                        />
                                        <div className='flex justify-evenly'>
                                            <div>
                                                <Link to={`/webservices`}>
                                                    <CardsE
                                                        theme={theme}
                                                        language={language}
                                                        text={Strings}
                                                        category={'software'}
                                                        section={'stock'}
                                                    />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to={`/webservices`}>
                                                    <CardsE
                                                        theme={theme}
                                                        language={language}
                                                        text={Strings}
                                                        category={'software'}
                                                        section={'booking'}
                                                    />
                                                </Link>
                                            </div>
                                            <div>
                                                <Link to={`/webservices`}>
                                                    <CardsE
                                                        theme={theme}
                                                        language={language}
                                                        text={Strings}
                                                        category={'software'}
                                                        section={'school'}
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Proyectos */}
                                    <div ref={projectsRef}>
                                        <Racks
                                            section='projects'
                                            type='title'
                                            language={language}
                                            theme={theme}
                                        />
                                    </div>
                                    <Slides key="slides"
                                        language={language}
                                        theme={theme}
                                        sections={sections}
                                        strings={ProjStrings}
                                        cssSwipper={"w-11/12"}
                                        hasTitle={false}
                                        hasText={false}
                                    />

                                    {/* Nosotros */}
                                    <div ref={aboutRef}>
                                        <Racks
                                            section='aboutus'
                                            type='title'
                                            language={language}
                                            theme={theme}
                                            order='center'
                                        />
                                    </div>
                                    <div className='flex justify-center'>
                                        {Strings[language].aboutus.map((person, i) =>
                                            <CardsB key={`cardsb${i}`}
                                                language={language}
                                                theme={theme}
                                                text={person}
                                            />)}
                                    </div>
                                    {/* <button onClick={() => { handleScrollY(webpagesRef, heightNavbar) }}>IR a WEB_PAGES--</button>
                                    <button onClick={() => { handleScrollY(ecommerceRef, heightNavbar) }}>IR a ECOMM</button> */}
                                    {/* Contactanos */}
                                    <div className={css('contact')} ref={contactRef}>
                                        <div className={`grid grid-cols-3 gap-2 grid-flow-row grid- pt-9  w-10/12 m-auto h-auto !mb-0 pt-4 px-16 lg:px-24 rounded-lg  tab:container-tab tab:w-full tab:px-4 tab:!mb-0
                                                        sm:container-sm sm:w-full sm:h-full sm:!mb-0 sm:justify-center`}>
                                            <div className="p-5 text-center  font-kdam text-4xl">
                                                <Link to={`/contact`} className="font-kdam text-5xl">Contactanos</Link>
                                            </div>
                                            <div className="p-5 text-center">
                                                <a className={Css.common.icon} key='iw' href='https://bit.ly/3yTg92x'>
                                                    <i className='fa fa-instagram animate-bounce animation-delay-600 w-3 h-3 text-5xl' aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }}
                </Theme>
            </motion.div >
            :
            <motion.div
                variants={disappearVariants}
                initial='hidden'
                animate='visible'
                exit='exit'>
                <Theme>
                    {(language, theme) => {
                        const sections = routes(ProjStrings, language, Css);
                        const css = cssFn(Css, theme)

                        return (
                            <>
                                <div id="home">
                                    <Main
                                        language={language}
                                        theme={theme} />
                                </div>
                                <div className={Css[theme].racks}>
                                    {/* Servicios Web */}
                                    <div id="services">
                                        <Racks
                                            section='webservices'
                                            type='title'
                                            language={language}
                                            theme={theme}
                                        />
                                    </div>

                                    <div className={css('webpages')} id="web"
                                        onScroll={webpagesHandleScroll}
                                        style={{ opacity: webpagesValue }}
                                        ref={webpagesRef}
                                    >
                                        {/* Paginas */}
                                        <Racks
                                            section='webpages'
                                            type='header'
                                            language={language}
                                            theme={theme}
                                            button={false}
                                        />
                                        {/* <div className={css('group')} >
                                            {Strings[language].webpages.map(web =>
                                                <CardsA
                                                    key={web.title}
                                                    text={web}
                                                    theme={theme}
                                                    format='4:3'
                                                    size='normal'
                                                />)}
                                        </div> */}
                                    </div>

                                    {/* Manual de marca */}
                                    <div id="handbook">
                                        <div className={css('brandbook')} >
                                            <Racks
                                                section='brandbook'
                                                type='header'
                                                language={language}
                                                theme={theme}
                                                button={false}
                                            />
                                            {/* <img src={slidesimulado} className='w-9/12 flex justify-center m-auto' alt='' /> */}
                                        </div>
                                    </div>


                                    {/* E-commerce */}
                                    <div className={css('ecommerce')} id="e-commerce"
                                        onScroll={ecommerceHandleScroll}
                                        style={{ opacity: ecommerceValue }}
                                        ref={ecommerceRef}>
                                        <Racks
                                            section='ecommerce'
                                            type='header'
                                            language={language}
                                            theme={theme}
                                            button={false}
                                        />
                                        {/* <div className={css('group')}>
                                            {Strings[language].ecommerce
                                                .map(text =>
                                                    <CardsD
                                                        key={text.title}
                                                        text={text}
                                                        theme={theme}
                                                        button={true}
                                                        size='large'
                                                    />
                                                )}
                                        </div> */}
                                    </div>

                                    {/* Software */}
                                    <div className={css('software')} id="software">
                                        <Racks
                                            section='software'
                                            type='header'
                                            language={language}
                                            theme={theme}
                                            button={false}
                                        />
                                        {/* <div className='flex justify-evenly'>
                                            <CardsE
                                                theme={theme}
                                                language={language}
                                                text={Strings}
                                                category={'software'}
                                                section={'stock'}
                                            />
                                            <CardsE
                                                theme={theme}
                                                language={language}
                                                text={Strings}
                                                category={'software'}
                                                section={'booking'}
                                            />
                                            <CardsE
                                                theme={theme}
                                                language={language}
                                                text={Strings}
                                                category={'software'}
                                                section={'school'}
                                            />
                                        </div> */}
                                    </div>

                                    {/* Proyectos */}
                                    <div id='projects'>
                                        <Racks
                                            section='projects'
                                            type='title'
                                            language={language}
                                            theme={theme}
                                        />
                                    </div>
                                    {/* <Slides key="slides"
                                        language={language}
                                        theme={theme}
                                        sections={sections}
                                        strings={ProjStrings}
                                        cssSwipper={"w-11/12"}
                                        hasTitle={false}
                                        hasText={false}
                                    /> */}

                                    {/* Nosotros */}
                                    <div id='about'>
                                        <Racks
                                            section='aboutus'
                                            type='title'
                                            language={language}
                                            theme={theme}
                                            order='center'
                                        />
                                    </div>
                                    {/* <div className='flex justify-center'>
                                        {Strings[language].aboutus.map((person, i) =>
                                            <CardsB key={`cardsb${i}`}
                                                language={language}
                                                theme={theme}
                                                text={person}
                                            />)}
                                    </div> */}

                                    {/* Contactanos */}

                                    <div className={css('contact')} id="contact">
                                        <div className={`container pt-9  w-10/12 m-auto h-auto !mb-0 pt-4 px-16 lg:px-24 rounded-lg  tab:container-tab tab:w-full tab:px-4 tab:!mb-0
                                                        sm:container-sm sm:w-full sm:h-full sm:!mb-0 sm:justify-center `}>
                                            <div className="p-5 text-center  font-kdam text-4xl">
                                                <Link to={`/contact`}>Contactanos</Link>
                                            </div>
                                            <div className="p-5 text-center ">
                                                <a className={Css.common.icon} key='iw' href='https://bit.ly/3yTg92x'>
                                                    <i className='fa fa-instagram animate-bounce animation-delay-600 w-3 h-3 text-4xl' aria-hidden="true" />
                                                </a>
                                            </div>
                                            <div className="p-5 text-center ">
                                                <a className={Css.common.icon} key='iw' href='https://wa.me/5491124001149'>
                                                    <i className='fa fa-whatsapp animate-bounce animation-delay-600 w-3 h-3 text-4xl' aria-hidden="true" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                    }}
                </Theme>
            </motion.div >
    )
}

export default Home