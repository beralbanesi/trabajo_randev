import { random } from "../../../../helpers"

const colors = ['azul', 'rosa']

export const light = {
    container: 'bg-black/5',
    img: 'opacity-10',

}
export const dark = {
    container: 'bg-black/20 border border-black/50',
    content: 'cardDcontent-black ',
    img: 'invert opacity-10',
    button: ``,
}

export const common = {
    container: 'relative fit-content m-auto font-roboto z-0 rounded-3xl backdrop-blur-xl drop-shadow-xl cardDcontainer',
    left: 'text-left p-8',
    center: 'text-center p-8 h-full',
    right: 'text-right p-8',
    content: 'cardDcontent h-full flex flex-col justify-evenly',
    name: 'font-bold text-xl',
    title: `cardDtitle font-bold text-3xl`,
    desc: 'text-md',
    adhoc: 'text-sm',
    button: `py-4 px-8 bg-${colors[random(colors)]} text-white drop-shadow-xl rounded-lg hover:scale-110 transition duration-300`,
    imgcontainer: 'absolute flex top-0 items-center left-0 z-[-1] w-full h-full',
    img: 'w-full p-12'
}