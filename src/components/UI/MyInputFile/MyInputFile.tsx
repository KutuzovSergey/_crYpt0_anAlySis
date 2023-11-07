import React, { forwardRef } from 'react';

import cl from './MyInputFile.module.scss';

type Props ={
    type: string,
    id: string,
    accept: string,
    ref: any,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any,
}

const MyInputFile:React.FC<Props> = forwardRef((props: Props, ref: any) => {

    return (
        <input className={cl.input} {...props} ref={ref}/>
    )
});

export default MyInputFile;