import React from "react";
import Card from './Card';
import { CurrencesType, ObjCoinsType } from "../type/typeComponents/typesMain";
import LoaderCurrencesList from '../components/UI/LoaderCurrencesList/LoaderCurrencesList';

import '../styles/componentStyles/CurrencesList.scss';

type Props ={
  currences: CurrencesType,
  remove: (obj: ObjCoinsType) => void,
  textInfo: string,
  isLoadingList: boolean
}

const CurrencesList:React.FC<Props> = ({currences, remove, textInfo, isLoadingList}: Props) => {

  if (isLoadingList) {
    return <LoaderCurrencesList/>
  }
  
return (
  <div className='card-block'>
    {currences.length !== 0
      ? currences.map( currency =>
        <Card 
          key={currency.NAME} 
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