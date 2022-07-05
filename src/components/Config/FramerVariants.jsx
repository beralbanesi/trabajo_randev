export const disappearVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: .5,
            duration: .5
        }
    },
    exit: {
        opacity: 0,
        transition: {
            ease: "easeIn",
            duration: .7,
            delay: .1
        },
    },
}

export const upDownVariants = {
    hidden: {
        y: -200,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            // delay: .5,
            duration: .5
        }
    },
    exit: {
        y: -200,
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: .7,
            // delay: .1
        },
    },
}
export const lToRVariants = {
    hidden: {
        x: -500,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 1,
            duration: .8
        }
    },
    exit: {
        y: -200,
        opacity: 0,
        transition: {
            ease: "easeInOut",
            duration: .7,
            // delay: .1
        },
    },
}

export const home = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 1, duration: 1 }
    },
    exit: {
        x: -100,
        transition: {
            ease: 'easeInOut',
            duration: 2,
            delay: 2
        }
    }
}


export const cardAvariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 1, duration: 1 }
    },
    exit: {
        scale: 1,
        opacity: 0,
        rotateX: 90,
        rotateY: 0,
        rotateZ: 0,
        transition: {
            ease: 'easeInOut',
            duration: .2
        }
    },
}