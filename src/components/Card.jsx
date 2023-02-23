import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/componentStyles/Card.scss';
import ChartCard from "./CardComponent/ChartCard";
import MyButton from "./UI/MyButton/MyButton";

const Card = ({props, remove}) => {
  const navigate = useNavigate();
    return(
        <div id={props.USD.FROMSYMBOL} className='card'>
          <div className='card__header'>
            <div className='card__header__block'>
              <div className='card__image'>
                <img src={`https://www.cryptocompare.com/${props.USD.IMAGEURL}`} alt={props.USD.FROMSYMBOL} className='card__img' />
              </div>
              <div className="card__mark">
                <span className='card__symbol'>{props.USD.FROMSYMBOL}</span>
                <span className='card__name'>{props.USD.NAME}</span>
              </div>
            </div>
            <MyButton onClick={() => remove(props.USD)}>&#10006;</MyButton>
          </div>
            
          <div className='card__info'>
            <div className='card__cost'>
              <span>Стоимость: {props.USD.PRICE}</span>
            </div>
            <div className='card__cost'>
              <span>Капитализация: {props.USD.CIRCULATINGSUPPLYMKTCAP}</span>
            </div>
          </div>
          <ChartCard/>
          <div className="card__footer">
            <MyButton onClick={() => {navigate(`/currences/${props.USD.FROMSYMBOL}`)}}>Посмотреть монету</MyButton>
          </div>
        </div>
    )
}

export default Card;