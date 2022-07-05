import './CardsF.css'
import imgCardF from './../../../assets/img/bg-home.webp'

export const CardsF = () => {

    return (
        <div className='cardsFcontainer'>
            <div className="CardsF">
                <img src={imgCardF} className='cardF' alt="" />
                <img src={imgCardF} className='cardF' alt="" />
                <img src={imgCardF} className='cardF' alt="" />
            </div>
        </div>
    )
}
