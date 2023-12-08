import React from "react";
import SmallButtonClose from "./UI/SmallButtonClose/SmallButtonClose";

import "../styles/componentStyles/FoundCoins.scss";

type Props = {
    coins: string[],
    deleteCoin: (item: string) => void
}

const FoundCoins:React.FC<Props> = (props: Props) =>{

    return (
        <div className="foundCoins">
            <div className="foundCoins__wrapper">
                {props.coins.map((item) =>
                    <div className="foundCoins__block" key={item}>
                        <span className="foundCoins__text">{item}</span>
                        <SmallButtonClose item={item} deleteCoin={props.deleteCoin} />
                    </div>
                )}
            </div>
            <div className="foundCoins__info">
                <span className="foundCoins__info_text">выбранные для поиска монеты</span>
            </div>
        </div>
    )
}

export default FoundCoins;