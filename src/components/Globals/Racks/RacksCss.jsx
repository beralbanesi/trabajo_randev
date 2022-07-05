export const light = {
    container: 'bg-neutral-100 text-black',
    containerleft: '',
    containerright: 'text-azul',
    buttonleft: `flex self-center w-fit font-inter bg-azul text-white py-2 px-4 rounded-lg drop-shadow-plus transition duration-500 
            hover:animate-scale hover:drop-shadow-[2px_4px_2px_#00000082]`,
    buttoncenter: `flex self-center w-fit font-inter bg-black text-white py-2 px-4 rounded-lg drop-shadow-plus transition duration-500 
            hover:animate-scale`,
    buttonright: `flex self-center w-fit font-inter bg-rosa text-white py-2 px-4 rounded-lg drop-shadow-plus transition duration-500 
            hover:animate-scale`,
    onlytext: 'hidden',
}

export const dark = {
    container: 'bg-[#00000063] drop-shadow-racks',
    title: 'drop-shadow-[2px_4px_2px_black]',
    headerdesc: 'drop-shadow-[2px_4px_2px_black]',
    containerleft: '',
    containerright: '',
    buttonleft: `flex self-center w-fit font-inter bg-azulgradientr text-white py-2 px-4 rounded-lg drop-shadow-plus transition duration-500 
            hover:bg-celestegradientr hover:text-white hover:scale-105 hover:animate-lightCeleste`,
    buttoncenter: `flex self-center w-fit font-inter bg-white text-black py-2 px-4 rounded-lg drop-shadow-plus transition duration-500 
            hover:animate-scale`,
    buttonright: `flex self-center w-fit font-inter bg-rosagradientl text-white py-2 px-4 rounded-lg drop-shadow-plus transition duration-500 
            hover:bg-rosagradientl hover:text-white hover:scale-105 hover:animate-lightRosa`,
}

export const common = {
    container: 'block w-full px-32 py-12 mb-6 blur-filter',
    title: 'font-kdam text-2xl',
    headerdesc: 'pr-12 py-4',
    img: 'w-1/2',
    button: 'w-auto',
}

// Tyoe

export const textonly = {

}

export const header = {
    container: 'block w-full px-32 py-4',
}

export const title = {
    title: 'text-5xl',
}

// Order

export const left = {
    subcontainer: 'flex w-full',
    text: 'flex flex-col w-full self-center text-left',
    desc: 'pr-12 py-12',
}

export const center = {
    subcontainer: 'flex w-full',
    text: 'flex flex-col w-full self-center text-center',
    desc: 'pr-12 py-12',
}

export const right = {
    subcontainer: 'flex flex-row-reverse w-full',
    text: 'flex flex-col w-full self-center text-right',
    desc: 'pl-12 py-12'
}

