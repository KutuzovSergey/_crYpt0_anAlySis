import React from "react";
import Card from './Card';

const CurrencesList = ({currences, remove}) => {
    return (
        <div className='card__block'>
          {currences.length !== 0
            ? currences.map( currency =>
              <Card 
                key={currency.USD.FROMSYMBOL} 
                props={currency}
                remove={remove}/>)
            : <span>Монеты не найдены</span>
          }
        </div>
    )
}

export default CurrencesList;