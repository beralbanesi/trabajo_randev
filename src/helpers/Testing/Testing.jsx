import { CardsB, CardsC, CardsD, CardsE, CardsF } from "../../../src/components/Globals";
import Theme from "../../../src/components/Theme/Theme"
import * as Strings from './TestingStrings'
const Testing = () => {

    return (
        <Theme>
            {(language, theme) => (
                <>
                    <div className="flex">
                        <p>{Strings[language].projects}</p>
                        {/* <CardsA /> */}
                        <CardsB />
                        <CardsC />
                    </div>
                    <div className="flex">
                        <CardsD />
                        <CardsE />
                    </div>
                    <CardsF />
                </>
            )
            }
        </Theme >
    )
}

export default Testing