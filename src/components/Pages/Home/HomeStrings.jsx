import baby from './../../../assets/icons/baby.png'
import boss from './../../../assets/icons/boss.png'
import web1 from './../../../assets/img/webtempa.webp'
import web2 from './../../../assets/img/webtempb.webp'
import persona from './../../../assets/img/persona.webp'
import personb from './../../../assets/img/personb.webp'

export const es = {
    webpages: [
        {
            title: 'Página Prediseñada',
            desc: 'Preséntanos tu diseño, o elige entre nuestras páginas de nuestra biblioteca!',
            img: web1,
        },
        {
            title: 'Páginas Personalizadas',
            desc: 'Página con diseño personalizado incluido¨Crea tu página oficial con un diseño innovador que crearas junto a Random Development.',
            img: web2,
        }
    ],
    brandbook: {
        title: 'Manual de marca',
        desc: 'Elaboración de logotipos, diseño de marcas, estilos.',
    },
    ecommerce: [
        {
            name: 'Pack',
            title: 'Baby steps',
            desc: 'Este servicio es para aquellos que recién están empezando su negocio y quieren pagar un mantenimiento de bajo costo pero se cobra por transacción.',
            button: 'Conocer más',
            img: baby,
        },
        {
            name: 'Pack',
            title: 'I’m the boss',
            desc: 'Este servicio es para aquellos clientes que ya tienen grandes ventas oservicios pero no se cobra transacción',
            button: 'Conocer más',
            img: boss,
        }
    ],
    software: {
        stock: 'Gestión de pedidos y Stock',
        booking: 'Gestión de Reservas',
        school: 'Gestión Escolar',
    },
    aboutus: [
        {
            name: 'Facundo',
            charge: 'Full Stack Developer',
            bio: 'Ingenieria de Software facundotp@randev.com.ar',
            img: persona,
        },
        {
            name: 'Nowi',
            charge: 'FrontEnd Developer',
            bio: 'Ingenieria Biomedica noeldecastro@randev.com.ar ',
            img: personb,
        }
    ],
    globals: {
        info: 'Para más información',
        click: 'haz click',
        onimg: 'en las imágenes',
    }
}

export const us = {
    webpages: [
        {
            title: 'Template page',
            desc: 'Submit your design to us, or choose from our library pages!',
            img: web1,
        },
        {
            title: 'Designed Pages',
            desc: 'Page with personalized design included¨Create your official page with an innovative design that you will create together with Random Development.',
            img: web2,
        },
    ],
    brandbook: {
        title: 'Brandbook',
        desc: 'Logo, brand, styles design.',
    },
    ecommerce: [
        {
            name: 'Pack',
            title: 'Pack Baby steps',
            desc: 'This service is for those who are just starting their business and want low cost maintenance but are charged per transaction.',
            button: 'Know more',
            img: baby,
        },
        {
            name: 'Pack',
            title: 'Pack I’m the boss',
            desc: 'This service is for those clients who already have large sales or services but no transaction is charged.',
            button: 'Know more',
            img: boss,
        }
    ],
    software: {
        stock: 'Stock and orders management',
        booking: 'Reservation Management',
        school: 'School Management',
    },
    aboutus: [
        {
            name: 'Facundo',
            charge: 'Randev Developer',
            bio: 'Pequeño resumen de lo que hace en Randev'
        },
        {
            name: 'Nowi',
            charge: 'Randev Developer',
            bio: 'Pequeño resumen de lo que hace en Randev'
        }
    ],
    globals: {
        info: 'For more info',
        click: 'click on',
        onimg: 'the images',
    }
}