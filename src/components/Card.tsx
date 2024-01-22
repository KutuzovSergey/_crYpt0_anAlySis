import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCoin } from "../action/actionCreators";
import MyButton from "./UI/MyButton/MyButton";
import MyButtonSmall from "./UI/MyButtonSmall/MyButtonSmall";
import { ObjCoinsType } from "../type/typeComponents/typesMain";

import '../styles/componentStyles/Card.scss';

type Props = {
  currencyInfo: ObjCoinsType,
  remove: (obj: ObjCoinsType) => void
}

const Card:React.FC<Props> = ({currencyInfo, remove}: Props) => {
  const navigate: (way: string) => void = useNavigate();
  const dispatch = useDispatch();

  const  addNewCoinPersonalAccount = (coin: ObjCoinsType) => {
    dispatch(addCoin(coin));
  }

    return(
        <div id={currencyInfo.FROMSYMBOL} className='card'>
          <div className='card__header'>
            <div className='card__header__block'>
              <div className='card__image'>
                <img 
                  src={`https://www.cryptocompare.com/${currencyInfo.IMAGEURL}`} 
                  alt={currencyInfo.FROMSYMBOL} 
                  className='card__img' />
              </div>
              <div className="card__mark">
                <span className='card__symbol'>{currencyInfo.FROMSYMBOL}</span>
                <span className='card__name'>{currencyInfo.NAME}</span>
              </div>
            </div>
            <div className='card__close'>
              <MyButtonSmall onClick={() => remove(currencyInfo)}>&#10006;</MyButtonSmall>
            </div>
          </div>
            
          <div className='card__info'>
            <div className='card__cost'>
              <span>Стоимость: {currencyInfo.PRICE}</span>
            </div>
            <div className='card__cost'>
              <span>Капитализация: {currencyInfo.CIRCULATINGSUPPLYMKTCAP}</span>
            </div>
          </div>

          <div className="card__footer">
            <div className="card__footer__buttom">
              <MyButton onClick={() => {navigate(`/currences/${currencyInfo.FROMSYMBOL}`)}}>Посмотреть</MyButton>
            </div>
            <div className="card__footer__buttom">
              <MyButton onClick={() => addNewCoinPersonalAccount(currencyInfo)} >Добавить</MyButton>
            </div>
          </div>
        </div>
    )
}

export default Card;