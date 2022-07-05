export const routes = (Strings, language) => [
    { name: Strings[language].Home, href: '/' },
    { name: Strings[language].Services, href: '/services' },
    { name: Strings[language].Projects, href: '/projects' },
    { name: Strings[language].AboutUs, href: '/about' },
    { name: Strings[language].Contact, href: '/contact' }
]

export const menulist = (Strings, language) => {
    
    console.log("menuRef desde navbarroutes:")
    return ([  
    { name: Strings[language].Home, href: '/' , existDropdown:false, isButton:false,isVisible:true },
    { name: Strings[language].Services, href: '/services' ,existDropdown:true ,isButton:false,isVisible:true, items:[{name: Strings[language].Web, href: 'webpages'},{name: Strings[language].Handbook, href: 'brandbook'},{name: Strings[language].Commerce, href: 'ecommerce'},{name: Strings[language].Software, href: 'software'}]},
    { name: Strings[language].Projects, href: '/projects' ,existDropdown:false,isButton:false ,isVisible:true},
    { name: Strings[language].AboutUs, href: '/about' ,existDropdown:false ,isButton:false,isVisible:true},
    { name: Strings[language].Contact, href: '/contact' ,existDropdown:false,isButton:false,isVisible:true}
   
])} 

export const menulistMobile = (Strings, language) => [
    { name: Strings[language].Home, href: 'home' , existDropdown:false, isButton:false ,isVisible:true},
    { name: Strings[language].Services, href: 'services' ,existDropdown:true ,isButton:false, isVisible:true,items:[{name: Strings[language].Web, href: 'web'},{name: Strings[language].Handbook, href: 'brandbook'},{name: Strings[language].Commerce, href: 'ecommerce'},{name: Strings[language].Software, href: 'software'}]},
    { name: Strings[language].Projects, href: 'projects' ,existDropdown:false,isButton:false,isVisible:true },
    { name: Strings[language].AboutUs, href: 'about' ,existDropdown:false ,isButton:false,isVisible:true},
    { name: Strings[language].Contact, href: 'contact' ,existDropdown:false,isButton:false,isVisible:true }
   
  ]