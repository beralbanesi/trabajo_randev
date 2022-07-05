export const light = {
    container: 'bg-[#00000014] shadow-[0_3px_13px_5px_#00000008] hover:animate-scale',
    img: 'bg-[#fefefeb3] transition duration-500'
}

export const dark = {
    container: 'bg-[#0000003d] hover:animate-logosDark',
    img: 'bg-[#00000075] transition duration-500',
    p: ''
}

export const common = {
    container: `flex w-[22%] h-fit px-4 py-4 mb-4 self-center justify-center rounded-lg transition duration-500 cursor-pointer
    md:relative md:w-[20%] md:self-baseline
    tab:flex tab:flex-wrap
    sm:flex sm:w-full`,
    img: `w-16 h-fit self-center p-2 rounded animate-disappear
    md:absolute md:top-[-5rem] md:h-auto
    sm:relative sm:justify-start`,
    p: `h-auto px-2 text-[12px] text-center self-center rounded-lg transition duration-500
    tab:mt-2 sm:w-2/3`
}