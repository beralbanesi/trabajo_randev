import { format, size } from '../..'

export const light = {
    border: 'hover:border hover:border-white-80',
}

export const dark = {
    border: 'hover:border-white/80',
}

export const common = {
    container: 'flex h-fit w-fit justify-around items-center mx-4',
    subcontainer: `flex relative h-fit w-fit bg-[#808080] justify-center items-center rounded-[10px] transition-[background] duration-[.8s] overflow-hidden shadow-[0_70px_63px_-60px_rgb(0,0,0)] bg-black`,
    border: `relative bg-transparent rounded-[10px] transition-[opacity] duration-1000`,
    h2: 'flex h-full items-end font-oswald text-5xl text-right text-white p-4 opacity-0 transition-opacity duration-1000 drop-shadow-[0_2px_2px_rgb(0,0,0)]',
    icons: 'flex flex-col absolute w-[50px] h-[130px] top-[226px] items-center justify-around fill-white text-white',

}