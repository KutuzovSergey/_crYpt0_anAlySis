import React from "react";
import Card from './Card';

const CurrencesList = ({currences, remove}) => {
    return (
        <div className='content__block'>
          {Object.keys(currences).length !== 0
            ? Object.keys(currences).map( currency =>
              <Card 
                key={currency} 
                currency={currency} 
                currences={currences[currency]}
                remove={remove}/>)
            : <span>Монеты не найдены</span>
          }
        </div>
    )
}

export default CurrencesList;