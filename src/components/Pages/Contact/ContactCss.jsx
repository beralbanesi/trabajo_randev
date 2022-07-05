export const light = {
    primary: 'bg-[#9d9d9d14] shadow-[0px_0px_22px_13px_#a4dff10d]',

}

export const dark = {
    primary: 'bg-[#00000029] shadow-[0px_0px_22px_13px_#a4dff10d]'
}


export const common = {
    form: `flex flex-col  space-y-4 flex-nowrap`,
    title: 'pt-4 font-robotoblack  text-4xl drop-shadow-title py-10 my-0',
    mTitle: 'pt-4 font-robotoblack  text-4xl drop-shadow-title', // mobile title
    //text: `container-text flex w-full h-[35vh] mt-4 items-center text-base
    //sm:h-auto sm: mb-4 sm:text-center`,    
    label:`font-roboto `,
    mLabel:`text-2xl`, // mobile label
    // icons:`flex justify-center mb-9`,
    //icon:`text-white-800 mx-8`,
    button:`h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150
    focus:shadow-outline hover:bg-indigo-800 cursor-pointer flex items-center justify-center`,
    mButton:`h-10 px-5 text-indigo-100 bg-indigo-700 rounded-lg transition-colors duration-150
    focus:shadow-outline hover:bg-indigo-800 cursor-pointer text-2xl flex items-center justify-center`,
    errorMsg:`text-red-400 p-2`,
    input:` block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300
    focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 text-gray-700`,
    mInput:` block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300
    focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 text-gray-700 text-2xl`,
    textArea:` block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700`,
    mTextArea:` block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700 text-2xl`,
    iconsContainer: `flex flex-col space-y-8 justify-between`,
    mIconsContainer: `grid grid-cols-3 `,
    //container: "flex w-full min-h-screen justify-center items-center  ",
    subContainer2: "flex flex-col md:flex-col tab:flex-col sm:flex-col xsm:flex-col space-x-2 ",
    subContainer: "flex flex-col  lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0 rounded-xl w-full max-w-4xl p-8 sm:p-12 justify-center "
}

export const er = {
     // patrones de ER
     namePattern:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
     phonePattern:/^\d{7,14}$/,
     emailPattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}