
import { useEffect } from "react"
import { motion } from 'framer-motion'
import Theme from "../../Theme/Theme"
import * as Css from './WebServicesCss'
import { Racks } from "../../Globals"
import { routes } from './WebServicesRoutes'
import * as Strings from './WebServicesStrings'
import { LanguageContext } from '../../Config/LanguageContext'
import slidesimulado from './../../../assets/img/bg-home.webp'
import pack1 from './../../../assets/img/packbasico.png'
import pack2 from './../../../assets/img/packpersonalizado.png'
import pack3 from './../../../assets/img/packpremium.png'
import * as Sizes from "../../Globals/Cards/FormatSizes"

const WebServices = () => {

    const format = '16:9'
    const size = 'midlarge'
    const myFormat = Sizes.format[format]
    const mySize = Sizes.size[size]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const getPack = (packNumber) => {
        switch (packNumber) {
            case 1:
                return (
                    <div>
                        <span className="font-bold"> Atencion </span>
                        <span>con nuestros programadores en horario definido </span>
                        <span className="font-bold"> Productos, visitas y ventas ilimitadas </span>
                        <span>Integracion con </span>
                        <span className="font-bold">medios pago y de envío </span>
                        <span>Gestión de </span>
                        <span className="font-bold">productos y manejo de stock </span>
                        <span>Carritos </span> <span className="font-bold">abandonados </span>
                        <span>Configuración de </span>
                        <span className="font-bold">puntos de entrega </span>
                        <span>Carga y actualización de los </span>
                        <span className="font-bold">textos de productos</span>
                    </div>
                )
            case 2:
                return (
                    <div>
                        <span className="font-bold"> Diseño personalizado </span>
                        <span className="font-bold"> 4 horas bonificadas para modificaciones </span>
                        <span> por mes no acumulables </span>
                        <span className="font-bold"> Promociones </span><span> 2x1 y 3x2 </span>
                        <span className="font-bold"> Estadísticas de tu negocio </span>
                        <span> Cupones de </span><span className="font-bold"> descuento </span>
                        <span className="font-bold"> Configuración de </span>
                        <span> dominio propio </span>
                        <span className="font-bold"> Instagram </span>
                        <span> shopping y </span>
                        <span className="font-bold"> Facebook</span>
                        <span> Store</span>
                    </div>
                )
            case 3:
                return (
                    <div>
                        <span className="font-bold"> Diseño 100% flexible</span>
                        <span> (HTML, CSS, JS) (Landing page que puede editarse)</span>
                        <span> Se agregan </span>
                        <span className="font-bold">2 horas bonificadas para modificaciones </span>
                        <span> Múltiples </span> <span className="font-bold"> idiomas y monedas</span>
                        <span className="font-bold"> Dominio propio</span><span> incluido</span>
                    </div>
                )
            default:
                break;
        }

    }


    return (
        <Theme>
            {(language, theme) => (
                <>
                    <Racks
                        section='webservices'
                        type='title'
                        language={language}
                        theme={theme}

                    />
                    {/* Paginas web */}
                    <div className={Css[theme].racks + ' grid grid-cols-2 gap-0'}>

                        <Racks
                            section='basicpage'
                            type='textonly'
                            language={language}
                            theme={theme}
                            button={false}
                        />
                        <img src={slidesimulado} className='w-9/12' alt='' />

                        <img src={slidesimulado} className='w-9/12' alt='' />
                        <Racks
                            section='custompage'
                            type='textonly'
                            language={language}
                            theme={theme}
                            button={false}
                        />

                    </div>

                    {/* Seccion e-commerce */}
                    <>
                        <Racks
                            section='seccionEcommerce'
                            type='header'
                            language={language}
                            theme={theme}
                            button={false}
                        />
                        <div className={Css[theme].racks + ' grid grid-cols-3'}>
                            {/*pack 1 */}
                            <div className="" style={size === 'full'
                                ? { width: '100%' }
                                : {
                                    width: `${mySize / 2}rem`,
                                    height: `${mySize * myFormat}rem`
                                }}>
                                <p className="mb-5 text-center">{Strings[language].pack1Title}</p>
                                <div className="bg-white text-black relative text-base font-roboto overflow-y-hidden rounded-[15px] shadow-[0px_3px_11px_5px_rgb(0,0,0,53%)] p-4">
                                    <img className="mb-5 text-center" src={pack1} alt='packbasico' />
                                    {getPack(1)}</div>
                            </div>
                            {/*pack2 */}
                            <div className="" style={size === 'full'
                                ? { width: '100%' }
                                : {
                                    width: `${mySize / 2}rem`,
                                    height: `${mySize * myFormat}rem`
                                }}>
                                <p className="mb-5 text-center">{Strings[language].pack2Title}</p>
                                <div className="bg-white text-black relative text-base font-roboto overflow-y-hidden rounded-[15px] shadow-[0px_3px_11px_5px_rgb(0,0,0,53%)] p-4">
                                    <img className="mb-5 text-center" src={pack2} alt='packbasico' />
                                    {getPack(2)}
                                </div>
                            </div>
                            {/* pack 3 */}
                            <div className="" style={size === 'full'
                                ? { width: '100%' }
                                : {
                                    width: `${mySize / 2}rem`,
                                    height: `${mySize * myFormat}rem`
                                }}>
                                <p className="mb-5 text-center">{Strings[language].pack3Title}</p>
                                <div className="bg-white text-black relative text-base font-roboto overflow-y-hidden rounded-[15px] shadow-[0px_3px_11px_5px_rgb(0,0,0,53%)] p-4">
                                    <img className="mb-5 text-center" src={pack3} alt='packbasico' />
                                    {getPack(3)}</div>
                            </div>
                        </div>
                    </>
                    {/* Seccion software */}
                    <div className={Css[theme].racks + ' grid grid-cols-2 gap-0'}>

                        <Racks
                            section='software1'
                            type='textonly'
                            language={language}
                            theme={theme}
                            button={false}
                        />
                        <img src={slidesimulado} className='w-9/12' alt='' />
                        <img src={slidesimulado} className='w-9/12' alt='' />
                        <Racks
                            section='software2'
                            type='textonly'
                            language={language}
                            theme={theme}
                            button={false}
                        />
                        <Racks
                            section='software3'
                            type='textonly'
                            language={language}
                            theme={theme}
                            button={false}
                        />
                        <img src={slidesimulado} className='w-9/12' alt='' />
                    </div>


                </>
            )}
        </Theme >
    )
}

export default WebServices