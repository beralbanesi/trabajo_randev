import { useState, useEffect } from "react";
// custom hooks for mobile

export const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            // verifica tamaño ventana 
            if (window.visualViewport.width <= 768) {
                setIsMobile(true);
            }
            else {
                setIsMobile(false);
            }
        };
        checkMobile();
        //cada vez que se cambie el tamaño de la ventana ejecuta checkMobile
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        }

    }, []);
    return { isMobile };


}
