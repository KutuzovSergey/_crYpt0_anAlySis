import React from "react";

import "../styles/componentStyles/FoundCoins.scss";

const FoundCoins = (props) =>{

    return (
        <div className="foundCoins">
            {props.coins.map((item) =>
                <div className="foundCoins__block" key={item}>
                    <div className="foundCoins__delete" onClick={() => props.deleteCoin(item)}>
                        <span className="foundCoins__delete_text">&#10006;</span>
                    </div>
                    <span className="foundCoins__text">{item}</span>
                </div>
            )}
        </div>
    )
}

export default FoundCoins;