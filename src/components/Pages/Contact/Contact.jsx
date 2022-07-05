import { useForm } from "react-hook-form"
import VanillaTilt from 'vanilla-tilt'
import { motion } from 'framer-motion'
import Theme from "./../../Theme/Theme"
import * as Css from './ContactCss'
import * as Strings from './ContactStrings'
import { upDownVariants } from "../../Config"
import { useMobile } from "./../../../helpers/Hooks/useMobile"
import { useRef, useEffect, useState } from 'react'
import { useNavigate ,} from 'react-router-dom';

// para el envio de mails
import emailjs from "emailjs-com"


const Contact = () => {

    const [showMsgSuccess, setShowMsgSuccess] = useState(false)

    const { isMobile } = useMobile();

    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate()

    const onSubmit = (userInfo, e) => {
        sendEmail(e)
        setShowMsgSuccess(true)
        setTimeout(() => setShowMsgSuccess(false), 2500);
        e.target.reset();
    };
    const options = {
        scale: 1.1,
        speed: 1500//,       
        // max: 30
    };

    function Tilt(props) {
        const { options, ...rest } = props;
        const tilt = useRef(null);


        useEffect(() => {
            VanillaTilt.init(tilt.current, options);
        }, [options]);

        useEffect(() => {
            window.scrollTo(0, 0)
        }, []);


         
        return <div ref={tilt} {...rest} />;
    }

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_562dj2m', 'randev_template', e.target, 'aOFyLzpDmiKyJU-Ed')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    function volver () {    
       navigate('/')
      }
    return (
        <motion.div
            variants={upDownVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <Theme>
                {language => (
                    <div className={Css.common.subContainer}>
                        <div id="start"></div>
                        <div className={isMobile ? Css.common.mIconsContainer : Css.common.iconsContainer}>
                            <div className="flex flex-col jus">
                                <h1 className={isMobile ? Css.common.mTitle : Css.common.title}>{Strings[language].contact}</h1>
                                <div className={Css.common.subContainer2}>
                                    <div className="inline-flex space-x-2 space-y-2 items-center">
                                        <i className="fa fa-phone" aria-hidden="true" />
                                        <span className="text-sm whitespace-nowrap">+549-1124001149</span>
                                    </div>
                                    <div className="inline-flex space-x-2 space-y-2 items-center">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        <span className="text-sm whitespace-nowrap"> randev@gmail.com</span>
                                    </div>
                                    <div className="inline-flex space-x-2  space-y-2 items-center">
                                        <i className="fa fa-map-marker" aria-hidden="true" />
                                        <span className="text-sm whitespace-nowrap">Av Santa Fe, CABA</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="w-full lg:w-96 md:w-96 tab:w-96">
                            <div className="p-6 rounded-md shadow-slate-400 shadow-md">
                                <form className={Css.common.form} onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <label className={isMobile ? Css.common.mLabel : Css.common.label} htmlFor="name">{Strings[language].name}</label>
                                        <input className={isMobile ? Css.common.mInput : Css.common.input} placeholder={Strings[language].namePlaceholder}
                                            {...register("name", {
                                                shouldFocusError: true,
                                                minLength: { value: 3, message: Strings[language].minLength },
                                                required: { value: true, message: Strings[language].required },
                                                pattern: { value: Css.er.namePattern, message: Strings[language].invalidName }
                                            })}
                                            name="name"
                                            type="text"
                                        />
                                        <p className={Css.common.errorMsg}>{errors.name && errors.name.message}</p>
                                    </div>
                                    <div>
                                        <label className={isMobile ? Css.common.mLabel : Css.common.label} htmlFor="mail">Correo electrónico</label>
                                        <input className={isMobile ? Css.common.mInput : Css.common.input} placeholder="Ej: nombre@mail.com"
                                            {...register("mail", {
                                                shouldFocusError: true,
                                                required: { value: true, message: Strings[language].required },
                                                pattern: { value: Css.er.emailPattern, message: Strings[language].invalidEmail }
                                            })}
                                            name="mail"
                                            type="text"
                                        />
                                        <p className={Css.common.errorMsg}> {errors.mail && errors.mail.message}</p>

                                    </div>
                                    <div>
                                        <label className={isMobile ? Css.common.mLabel : Css.common.label} htmlFor="phone">{Strings[language].phone}</label>
                                        <input className={isMobile ? Css.common.mInput : Css.common.input} placeholder={Strings[language].phonePlaceholder}
                                            {...register("phone", {
                                                shouldFocusError: true,
                                                pattern: { value: Css.er.phonePattern, message: Strings[language].invalidPhone }
                                            })
                                            }
                                            name="phone"
                                            type="tel"
                                        />
                                        <p className={Css.common.errorMsg}> {errors.phone && errors.phone.message}</p>
                                    </div>
                                    <div>
                                        <label className={isMobile ? Css.common.mLabel : Css.common.label} htmlFor="message">{Strings[language].textArea}</label>
                                        <textarea className={isMobile ? Css.common.mTextArea : Css.common.textArea}
                                            placeholder="mensaje"
                                            rows="4"
                                            {...register("message", {
                                                required: { value: true, message: Strings[language].required },
                                                shouldFocusError: true
                                            })}
                                            name="message"
                                        ></textarea>
                                        <p className={Css.common.errorMsg}> {errors.message && errors.message.message}</p>
                                    </div>
                                    <Tilt className={isMobile ? Css.common.mButton : Css.common.button} options={options}>
                                        <input type="submit" value={Strings[language].send} />
                                    </Tilt>
                                    {(showMsgSuccess) && (
                                        <motion.div
                                            variants={upDownVariants}
                                            initial='hidden'
                                            animate='visible'
                                            exit='exit'
                                        >
                                            <div id="toast-simple" className="flex align-middle items-center w-full max-w-xs p-2 space-x-4 text-white bg-gray-800 divide-x divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
                                                <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                    </svg>
                                                </div>
                                                <div className="pl-4 text-sm font-normal">{Strings[language].msgSuccess}</div>
                                            </div>
                                            
                                        </motion.div>)}

                                </form>
                               
                            </div>
                           
                        </div>
                        <button className={Css.common.button} onClick={(e)=>{volver()}}>Volver</button>
                      
                    </div>
                )
                }
            </Theme>
        </motion.div>
    )
}

export default Contact