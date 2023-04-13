import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCoin } from "../store/userCoinListReducer";
import MyButton from "./UI/MyButton/MyButton";
import MyButtonSmall from "./UI/MyButtomSmall/MyButtomSmall";

import '../styles/componentStyles/Card.scss';

const Card = ({props, remove}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const  addNewCoinPersonalAccount = (coin) => {
    dispatch(addCoin(coin));
  } 

    return(
        <div id={props.FROMSYMBOL} className='card'>
          <div className='card__header'>
            <div className='card__header__block'>
              <div className='card__image'>
                <img 
                  src={`https://www.cryptocompare.com/${props.IMAGEURL}`} 
                  alt={props.FROMSYMBOL} 
                  className='card__img' />
              </div>
              <div className="card__mark">
                <span className='card__symbol'>{props.FROMSYMBOL}</span>
                <span className='card__name'>{props.NAME}</span>
              </div>
            </div>
            <div className='card__close'>
              <MyButtonSmall onClick={() => remove(props)}>&#10006;</MyButtonSmall>
            </div>
          </div>
            
          <div className='card__info'>
            <div className='card__cost'>
              <span>Стоимость: {props.PRICE}</span>
            </div>
            <div className='card__cost'>
              <span>Капитализация: {props.CIRCULATINGSUPPLYMKTCAP}</span>
            </div>
          </div>

          <div className="card__footer">
            <div className="card__footer__buttom">
              <MyButton onClick={() => {navigate(`/currences/${props.FROMSYMBOL}`)}}>Посмотреть</MyButton>
            </div>
            <div className="card__footer__buttom">
              <MyButton onClick={() => addNewCoinPersonalAccount(props)} >Добавить</MyButton>
            </div>
          </div>
        </div>
    )
}

export default Card;