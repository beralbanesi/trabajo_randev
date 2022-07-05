import './CardsC.css'
import imgCardC from './../../../assets/img/bg-home.webp'

export const CardsC = () => {

    return (
        <div className="container-CardC">
            <div className="card-CardC">
                <div className="imgBx">
                    <img src={imgCardC} alt='' />
                </div>
                <div className="contentBx">
                    <h2>Tarjetita C</h2>
                    <div className="size">
                        <h3>Valores :</h3>
                        <span>x</span>
                        <span>x</span>
                        <span>x</span>
                        <span>x</span>
                    </div>
                    <div className="color">
                        <h3>Item :</h3>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="0#">Ver</a>
                </div>
            </div>
        </div>
    )
}
