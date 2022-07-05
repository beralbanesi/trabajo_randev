export const routes = (Strings, language, Css) => [
    {
        name: 'woof',
        title: Strings[language].section1,  
        text:  Strings[language].descriptionS1,     
        children: [{ text: Strings[language].descriptionP1S1, img: './service01.jpg' },
        { text: Strings[language].descriptionP2S1, img: './service02.jpg' }
        ]
    },
    {
        name: 'brotes',
        title: Strings[language].section2,    
        text:  Strings[language].descriptionS2,    
        children: [{ text: Strings[language].descriptionP1S2, img: './service01.jpg' },
        { text: Strings[language].descriptionServiceP2S2, img: './service02.jpg' }
        ]
    }

]