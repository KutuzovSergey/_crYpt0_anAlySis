import React from "react";
import TitleMediumSized from "./UI/TitleMediumSized/TitleMediumSized";
import LinkButtonNative from "./UI/LinkButtonNative/LinkButtonNative";

import "../styles/componentStyles/LinksInternetSearch.scss";

type Props = {
    nameCoin: string,
}

const LinksInternetSearch:React.FC<Props> = (props: Props) => {

    let textTitleMediumSized: string = `Искать ${props.nameCoin} в интернете`;

    return (
        <div className="searchLink">
            <TitleMediumSized>{textTitleMediumSized}</TitleMediumSized>
            <div className="searchLink__link">
                <LinkButtonNative
                    activityIndicator={true}
                    target='_top'
                    link={`https://ya.ru/search/?text=криптомонета+${props.nameCoin}`}>Яндекс</LinkButtonNative>
                <LinkButtonNative
                    activityIndicator={true}
                    target='_top'
                    link={`https://ipv4.google.com/search?q=${props.nameCoin}`}>Google</LinkButtonNative>
            </div>
        </div>
    )
}

export default LinksInternetSearch;