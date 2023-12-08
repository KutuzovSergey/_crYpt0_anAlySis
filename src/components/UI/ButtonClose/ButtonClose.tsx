import React from "react";

import cl from "./ButtonClose.module.scss";

type Props = {
    close: () => void
  }

const ButtonClose:React.FC<Props> = (props: Props) =>{

    return (
        <div className={cl.delete} onClick={() => props.close()}>
            <span className={cl.delete__text}>&#10006;</span>
        </div>
    )
}

export default ButtonClose;