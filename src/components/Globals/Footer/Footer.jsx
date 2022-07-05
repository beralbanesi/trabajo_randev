import Theme from './../../Theme/Theme';
import * as Css from './FooterCss'
import * as Strings from './FooterStrings';
import { routes } from './FooterRoutes';


export const Footer = ({ language }) => {
    const icons = routes(Css);
    return (
        <Theme>
            {(language, theme) => (
                <footer className={Css.common.text}>
                    <div className={Css.common.container}>
                        <div className={Css.common.icons}>
                            {icons.map(({ name, className, href }) =>
                                <a className={Css.common.icon} key={href} href={href}>
                                    <i className={name + className} aria-hidden="true" />
                                </a>
                            )}
                        </div>
                    </div>
                </footer>
            )}
        </Theme>
    )
}