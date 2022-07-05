export const routes = (Strings, language, Css) => [
    {
        name: 'websites',
        title: Strings[language].pages,  
        text:  Strings[language].descriptionPages,     
        children: [{ text: Strings[language].descriptionServiceP1, img: './service01.jpg' },
        { text: Strings[language].descriptionServiceP2, img: './service02.jpg' }
        ]
    },
    {
        name: 'print',
        title: Strings[language].print,    
        text:  Strings[language].descriptionPrint,    
        children: [{ text: Strings[language].descriptionServiceP3, img: './service01.jpg' },
        { text: Strings[language].descriptionServiceP4, img: './service02.jpg' }
        ]
    }

]