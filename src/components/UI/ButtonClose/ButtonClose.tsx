import { MouseEvent, FC } from "react";

import cl from "./ButtonClose.module.scss";

type Props = {
    close: (e: MouseEvent<HTMLDivElement>) => void,
    id: string
  }

const ButtonClose:FC<Props> = (props: Props) =>{

    return (
        <div className={cl.delete} id={props.id} onClick={(e) => props.close(e)}>
            <span className={cl.delete__text}>&#10006;</span>
        </div>
    )
}

export default ButtonClose;