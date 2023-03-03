import React from "react";
import '../styles/componentStyles/CurrencesList.scss';
import Card from './Card';
import Loader from "./UI/Loader/Loader";

const CurrencesList = ({listLoading, currences, remove}) => {
  if (listLoading) {
    return <Loader/>
  }
  return (
      <div className='card-block'>
        {currences.length !== 0
          ? currences.map( currency =>
            <Card 
              key={currency.FROMSYMBOL} 
              props={currency}
              remove={remove}/>)
          : <div className="card-block__none">
              <span>Монеты не найдены</span>
            </div>
        }
      </div>
    )
}

export default CurrencesList;