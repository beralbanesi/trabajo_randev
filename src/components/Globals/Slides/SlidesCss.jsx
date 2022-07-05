export const light = {
    container: 'bg-neutral-100 text-black',
    containerleft: '',
    containerright: 'text-azul',
    buttonleft: `flex self-center w-fit font-inter bg-azul text-white py-2 px-4 rounded-lg drop-shadow-plus transition duration-500 
            hover:animate-scale hover:drop-shadow-[2px_4px_2px_#00000082]`,
    buttonright: `flex self-center w-fit font-inter bg-rosa text-white py-2 px-4 rounded-lg drop-shadow-plus transition duration-500 
            hover:animate-scale`

}

export const dark = {
    container: 'bg-[#00000063] drop-shadow-racks',
    containerleft: '',
    containerright: '',
    buttonleft: `flex self-center w-fit font-inter bg-azulgradientr text-white py-2 px-4 rounded-lg drop-shadow-plus transition duration-500 
            hover:bg-celestegradientr hover:text-white hover:scale-105 hover:animate-lightCeleste`,
    buttonright: `flex self-center w-fit font-inter bg-rosagradientl text-white py-2 px-4 rounded-lg drop-shadow-plus transition duration-500 
            hover:bg-rosagradientl hover:text-white hover:scale-105 hover:animate-lightRosa`
}

export const common = {
    container: 'block w-full px-32 py-12 mb-6 blur-filter',
    containerleft: 'flex w-full',
    containerright: 'flex flex-row-reverse w-full',
    textside: {
        left: 'flex flex-col w-full self-center text-left',
        right: 'flex flex-col w-full self-center text-right'
    },
    title: 'font-kdam text-3xl',
    desc: {
        left: 'pr-12 py-12',
        right: 'pl-12 py-12'
    },
    img: 'w-1/3',
    button: 'w-auto',
    subtitle: 'font-kdam text-2xl',
}