import React from "react";

import "../styles/componentStyles/HeaderCoin.scss";

type Props = {
    images: string,
    alt: string,
    name: string
}

const HeaderCoin:React.FC<Props> = (props: Props) => {
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