import React from "react";

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
                        <div className="foundCoins__delete" onClick={() => props.deleteCoin(item)}>
                            <span className="foundCoins__delete_text">&#10006;</span>
                        </div>
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