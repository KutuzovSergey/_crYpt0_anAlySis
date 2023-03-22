import React from "react";

import "../styles/componentStyles/HeaderCoin.scss";

const HeaderCoin = (props) => {
    return (
        <div className="headerCoin">
            <div className="headerCoin__image">
                <img src={`https://www.cryptocompare.com/${props.images}`} alt={props.alt} />
            </div>
            <div className="headerCoin__name">
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default HeaderCoin;