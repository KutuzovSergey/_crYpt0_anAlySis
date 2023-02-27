import React from "react";
import Card from './Card';
import Loader from "./UI/Loader/Loader";

const CurrencesList = ({listLoading, currences, remove}) => {
  if (listLoading) {
    return <Loader/>
  }
  return (
      <div className='card__block'>
        {currences.length !== 0
          ? currences.map( currency =>
            <Card 
              key={currency.FROMSYMBOL} 
              props={currency}
              remove={remove}/>)
          : <div className="card__block_none">
              <span>Монеты не найдены</span>
            </div>
        }
      </div>
    )
}

export default CurrencesList;