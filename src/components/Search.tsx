import React from "react";
import InfoForm from "./UI/InfoForm/InfoForm";
import InfoInput from "./UI/InfoInput/InfoInput";
import MyInput from './UI/MyInput/MyInput';
import MyButton from './UI/MyButton/MyButton';
import FoundCoins from "./FoundCoins";
import { useSearch } from "../hooks/useSearch";
import searchImg from "../images/icon/search.png";

import '../styles/componentStyles/Search.scss';

type Props = {
    openModalInfo: (text: string) => void,
    getAListOfCoins: (foundCoin: string[]) => void,
}

const Search:React.FC<Props> = (props: Props) =>{
    const [searchValue, 
            visible, 
            foundCoin, 
            infoListInput, 
            infoSearchShow, 
            infoSearch, 
            getSaerchValue, 
            openInfoSearch,
            closeInfoSearch,
            transferInput,
            deleteFoundCoin,
            sendSearchQuery] = useSearch(props.openModalInfo, props.getAListOfCoins);

    const clickSendSearchQuery = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined): void =>{
        if (e !== undefined) {
            sendSearchQuery(e);
        }
    }

    const changeGetSaerchValue = (e: React.ChangeEvent<HTMLInputElement>) =>{
        getSaerchValue(e.target.value);
    }

    return (
        <div className="search">
            <div className="search__input__block">
                {foundCoin.length ?
                    <FoundCoins 
                        coins={foundCoin}
                        deleteCoin={deleteFoundCoin} />
                    :
                    ''
                }
                    
                <MyInput 
                    type='text'
                    name='search'
                    autoComplete='off'
                    value={searchValue}
                    placeholder='поиск'
                    onFocus={() => {openInfoSearch()}}
                    onChange={changeGetSaerchValue}/>

                {infoSearchShow ?
                <div>
                    <div className = {visible ? 'search__info-hide' : ''}>
                        <InfoForm 
                            infoText={infoSearch}/>
                    </div>
                    <div className = {visible ? '' : 'search__info-hide'}>
                        <InfoInput 
                            datalistId={'search'} 
                            visible={visible}
                            valueList={infoListInput} 
                            transferInput={transferInput}/>
                    </div>
                </div>
                :
                ''
                }
            </div>
            <div className="search__button">
                <MyButton onClick={clickSendSearchQuery}>
                    <img src={searchImg} alt="search" />
                </MyButton>
            </div>
            {infoSearchShow ? 
            <div className='search__info__search__hide'
                onClick={() => closeInfoSearch()}></div>
                :
                ''
            }
        </div>
    )
}

export default Search;