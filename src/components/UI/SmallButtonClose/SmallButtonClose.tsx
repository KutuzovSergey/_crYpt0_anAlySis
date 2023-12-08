import React from "react";

import cl from "./SmallButtonClose.module.scss";

type Props = {
    item: string,
    deleteCoin: (item: string) => void
  }

const SmallButtonClose:React.FC<Props> = (props: Props) =>{

    return (
        <div className={cl.delete} onClick={() => props.deleteCoin(props.item)}>
            <span className={cl.delete__text}>&#10006;</span>
        </div>
    )
}

export default SmallButtonClose;