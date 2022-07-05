import { useEffect, useRef, useState } from "react"
import Icons from "../../../../../assets/extras/Logos"
import * as Css from './LogosCss'
import * as Strings from './LogosStrings'
import { cssFn } from "../../../../../helpers/Functions"

// Tiempo de transición (en segundos)
const timing = 8

// Creador de selección Random
const random = (subcategory) => {
    const getSubcategory = Object.values(subcategory)
    const value = Math.floor(Math.random() * getSubcategory.length)
    return getSubcategory[value]
}


const Logos = ({ language, theme }) => {

    const css = cssFn(Css, theme)

    const [obj, setObj] = useState({
        model: random(Icons.model),
        dev: random(Icons.dev),
        db: random(Icons.db),
        container: random(Icons.container)
    })

    const timeRef = useRef()

    useEffect(() => {
        let verify = true
        if (verify) {
            timeRef.current && clearInterval(timeRef.current)
            timeRef.current = setInterval(() => {
                setObj({
                    ...obj,
                    model: random(Icons.model),
                    dev: random(Icons.dev),
                    db: random(Icons.db),
                    container: random(Icons.container)
                })
            }, timing * 1000)
        }
        return () => { verify = false }
    }, [obj])


    return (
        <>
            {Object.entries(Strings[language]).map(string =>
                <div className={css('container')} key={string[0]}>
                    <img className={css('img')} alt="img" src={obj[string[0]]} />
                    <p className={css('p')}>
                        <b>{string[1].title}</b>
                        <br />{string[1].desc}</p>
                </div>
            )}
        </>
    )
}

export default Logos