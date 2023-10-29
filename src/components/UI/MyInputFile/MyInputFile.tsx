import React, { forwardRef } from 'react';

import cl from './MyInputFile.module.scss';

type Parameters ={
    type: string,
    id: string,
    accept: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any,
}

const MyInputFile:React.FC<Parameters> = forwardRef((props: Parameters, ref: any) => {

    return (
        <input className={cl.input} {...props} ref={ref}/>
    )
});

export default MyInputFile;