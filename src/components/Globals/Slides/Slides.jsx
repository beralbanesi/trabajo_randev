import * as Css from './SlidesCss'
import { cssFn } from '../../../helpers'
import './Slides.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
// import required modules
import { EffectFade, Pagination, Navigation } from "swiper"

export const Slides = ({ language, theme, order = 'left', sections, strings, cssSwipper, hasTitle = true, hasText = true }) => {

    const css = cssFn(Css, theme)

    return (
        <div className={css('container')} key="cont">
            <div className={css(`container${order}`)}key="cont2">
                <div className={Css.common.textside[order]}key="cont3">
                    <div className={Css.common.title} key="cont4">
                        {strings[language].mainTitle}
                    </div>

                    {sections.map((section, i) => {
                        return (
                            <div className={Css.common.desc[order]} key={`divorder${section.name}${i}`}>
                                {hasTitle&&
                                <div className={Css.common.subtitle} key={`divsubtitle${section.name}${i}`}>
                                    {section.title}
                                </div>}
                                <div key={`div${section.name}${i}`}>
                                    {hasText&&<span>{section.text}</span>}
                                    <Swiper
                                        key={`sw${section.name}${i}`}
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        effect={"fade"}
                                        loop={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[EffectFade, Pagination, Navigation]}
                                        className={cssSwipper}
                                    >
                                        {section.children.map((child, j) => {
                                            return (
                                                <SwiperSlide key={`ss${section.name}${i}${j}`} className="swiper-slide">
                                                    <p className="title" key={`p${section.name}${i}${j}`}>{child.text}</p>

                                                    <img height="500px" alt="1" src={child.img} key={`img${section.name}${i}${j}`} />
                                                </SwiperSlide>
                                            )
                                        })
                                        }
                                    </Swiper>
                                </div>
                            </div>)
                    }
                    )}
                </div>
            </div>
        </div>
    )
}
