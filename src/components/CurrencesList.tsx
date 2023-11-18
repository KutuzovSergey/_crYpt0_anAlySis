import React from "react";
import Card from './Card';
import { CurrencesType, ObjCoinsType } from "../type/typeComponents/typesMain";

import '../styles/componentStyles/CurrencesList.scss';

type Props ={
  currences: CurrencesType,
  remove: (obj: ObjCoinsType) => void,
  textInfo: string
}

const CurrencesList:React.FC<Props> = ({currences, remove, textInfo}: Props) => {

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