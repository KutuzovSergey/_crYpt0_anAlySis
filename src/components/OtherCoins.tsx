import React, {FC, FormEvent} from "react";
import MySelect from "./UI/MySelect/MySelect";
import { useSelector } from "react-redux";
import { StateType } from "../type/typeStore/typesStore";
import { useSelectOtherCoins } from "../hooks/useOtherCoins";
import MyButton from "./UI/MyButton/MyButton";
import TitleMediumSized from "./UI/TitleMediumSized/TitleMediumSized";

import "../styles/componentStyles/OtherCoins.scss";

type Props = {
    getCoin: (nameCoin: string) => void
}

const OtherCoins:FC<Props> = (props: Props) => {
    const allCoins: string[] = useSelector((state: StateType) => {
        return state.allCoinList.coinsList
    });

    const [optionsAllCoins, valueSelect, getSelectedCoin] = useSelectOtherCoins(allCoins);

    const compareCoins = (e: FormEvent) =>{
        e.preventDefault();

        props.getCoin(valueSelect);
    }

    return(
        <form className="otherCoins" onSubmit={compareCoins}>
            <TitleMediumSized>Сравнить монеты</TitleMediumSized>
            <MySelect 
                value={valueSelect}
                defaultValue={'Выбрать монету для сравнения'}
                options={optionsAllCoins} 
                onChange={getSelectedCoin} />
            <MyButton>Сравнить</MyButton>
        </form>
    )
}

export default OtherCoins;