import React, { FC } from "react";

import cl from './UserImage.module.scss';

type Props = { srcImages: string | undefined }

const  UserImage: FC<Props> = (props: Props) =>{

    return (
        <div className={cl.UserImage}>
            <img src={props.srcImages} alt="logo" className={cl.UserImage__img} />
        </div>
    )
}

export default UserImage;