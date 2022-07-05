export const cssFn = (Css, element = '') => {
    return (property) => {

        if (element) {
            return Css.common[property] + ' ' + Css[element][property]
        } else {
            return Css.common[property]
        }
    }
}
