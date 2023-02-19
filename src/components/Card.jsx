import React from "react";
import '../styles/Card.scss';
import ChartCard from "./CardComponent/ChartCard";
import MyButton from "./UI/MyButton/MyButton";

const Card = ({props, remove}) => {
  console.log(props.USD.FROMSYMBOL);
    return(
        <div id={props.USD.FROMSYMBOL} className='card'>
          <div className='card__header'>
            <div className='card__header__block'>
              <div className='card__image'>
                <img src={`https://www.cryptocompare.com/${props.USD.IMAGEURL}`} alt={props.USD.FROMSYMBOL} className='card__img' />
              </div>
              <div>
                <span className='card__name'>{props.USD.FROMSYMBOL}</span>
              </div>
            </div>
            <MyButton onClick={() => remove(currency)}>&#10006;</MyButton>
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
            <MyButton>Посмотреть монету</MyButton>
          </div>
        </div>
    )
}

export default Card;