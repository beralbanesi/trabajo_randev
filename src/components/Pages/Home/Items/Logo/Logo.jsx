import * as Css from './LogoCss'
import { cssFn } from '../../../../../helpers'

const Logo = ({ theme }) => {

    const css = cssFn(Css, theme)
    const rdev = '<Random Development>'

    return (
        <div className={css('container')}>
            <div className={css('randevContainer')}>
                <img className={css('img')} src="./logo.png" alt='randev logo' />
                <p className={css('randev') + ' ' + css('ran')}>RAN</p>
                <p className={css('randev') + ' ' + css('dev')}>DEV</p>
            </div>
            <div className={css('rdevcss')}>{rdev}</div>
        </div>
    )
}
export default Logo