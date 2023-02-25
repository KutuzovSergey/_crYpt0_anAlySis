import React from "react";
import Card from './Card';

const CurrencesList = ({currences, remove}) => {
  // currences.forEach(element => {
  //   console.log(element)
  // });
    return (
        <div className='card__block'>
          {currences.length !== 0
            ? currences.map( currency =>
              <Card 
                key={currency.FROMSYMBOL} 
                props={currency}
                remove={remove}/>)
            : <span>Монеты не найдены</span>
          }
        </div>
    )
}

export default CurrencesList;