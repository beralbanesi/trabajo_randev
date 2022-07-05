import { useEffect, useState } from "react"

export const useScroll = (velocity = 1, type = 'scrollY', element = '') => {

    const [value, setValue] = useState(1)

    let handleScroll

    if (type === 'scrollY') {
        handleScroll = () => {
            const y = window.scrollY
            const vel = velocity * 0.001
            value <= 1 && setValue(1 - (y * vel))
        }
    }

    if (type === 'scrollX') {
        handleScroll = () => {
            const x = window.scrollX
            const vel = velocity * 0.001
            value <= 1 && setValue(1 - (x * vel))
        }
    }

    if (type === 'scroll') {
        handleScroll = () => {
            const y = element.current.getBoundingClientRect().y
            const vel = velocity * 0.001
            y > 0 && setValue(1 - (y * vel))
            y < 0 && setValue(1 + (y * vel))
        }
    }

    useEffect(() => {
        window.removeEventListener('scroll', handleScroll)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return {
        value,
        handleScroll
    }
}
