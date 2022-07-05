import { useRef } from "react"
import { cssFn, useScroll } from "../../../../../helpers"
import * as Css from './BrandBookCss'

export const Brandbook = ({ theme, language, text }) => {

    const css = cssFn(Css, theme)

    const textRef = useRef()
    const { value, handleScroll } = useScroll(3, 'scroll', textRef)


    return (
        <div className={css('container')}>
            <div className={css('top')} />
            <div className={css('content')}>
                <div className={css('text')}
                    onScroll={handleScroll}
                    ref={textRef}
                    style={{ transform: `translateX(${value < 0 ? value * 100 : 0}px)` }}>
                    <div className={css('title')}>
                        {text.title}
                    </div>
                    <div className={css('desc')}>
                        {text.desc}
                    </div>
                </div>
                <div className={css("img")}
                    onScroll={handleScroll}
                    ref={textRef}
                    style={{ transform: `translateX(${value < 0 ? value * -100 : 0}px)` }}>
                    <div className={css('top')} />
                    <div className={css('content')} />
                    <div className={css('bottom')} />
                </div>
            </div>
            <div className={css('bottom')} />
        </div>
    )
}