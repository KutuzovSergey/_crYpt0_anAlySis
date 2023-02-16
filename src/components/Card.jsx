import React from "react";
import '../styles/Card.scss';
import MyButton from "./UI/MyButton/MyButton";

const Card = ({currency, currences, remove}) => {
    return(
        <div key={currency} id={currency} className='card'>
          <div className="card__header">
            <div>
              <span className='card__name'>{currency}</span>
            </div>
            <MyButton onClick={() => remove(currency)}>&#10006;</MyButton>
          </div>
            
          <div className='card__info'>
            <div className='card__cost'>
              <span>BTC {currences.BTC}</span>
            </div>
            <div className='card__cost'>
              <span>USD {currences.USD}</span>
            </div>
            <div className='card__cost'>
              <span>EUR {currences.EUR}</span>
            </div>
          </div>
        </div>
    )
}

export default Card;