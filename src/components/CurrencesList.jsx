import React from "react";
import Card from './Card';

import '../styles/componentStyles/CurrencesList.scss';

const CurrencesList = ({currences, remove, textInfo}) => {

  return (
      <div className='card-block'>
        {currences.length !== 0
          ? currences.map( currency =>
            <Card 
              key={currency.FROMSYMBOL} 
              props={currency}
              remove={remove}/>)
          : <div className="card-block__none">
              <span>{textInfo}</span>
            </div>
        }
      </div>
    )
}

export default CurrencesList;