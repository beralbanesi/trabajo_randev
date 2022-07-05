import VanillaTilt from 'vanilla-tilt'
import { useRef, useEffect } from 'react';
import { cssFn } from '../../../../helpers';
import * as Css from './CardsDCss'
import * as Sizes from './../../'

export const CardsD = ({
    text,
    align = 'center',
    theme,
    button = false,
    format = '3:4',
    size = 'normal'
}) => {

    const css = cssFn(Css, theme)
    const myFormat = Sizes.format[format]
    const mySize = Sizes.size[size]

    const Tilt = (props) => {
        const { options, ...rest } = props;
        const tilt = useRef(null);

        useEffect(() => {
            VanillaTilt.init(tilt.current, options);
        }, [options]);

        return <div ref={tilt} {...rest} />;
    }

    return (
        <Tilt className={css('container')}
            data-tilt data-tilt-scale="0.95"
            data-tilt-start="40"
            style={size === 'full'
                ? { width: '100%' }
                : {
                    width: `${mySize * myFormat}rem`,
                    height: `${mySize}rem`
                }}
        >
            <div className={css(align)}>
                <div className={css('content')}>
                    <div>
                        <div className={css('name')}>
                            {text.name}
                        </div>
                        <div className={css('title')}>
                            {text.title}
                        </div>
                    </div>
                    <div className={css('desc')}>
                        {text.desc}
                    </div>
                    <div className={css('adhoc')}>
                        {text.adhoc}
                    </div>
                    {button &&
                        <div>
                            <button
                                className={css('button')}>
                                {text.button}
                            </button>
                        </div>}
                </div>
            </div>
            <div className={css('imgcontainer')}>
                <img className={css('img')}
                    src={text.img}
                    alt="" />
            </div>
        </Tilt>
    )
}
