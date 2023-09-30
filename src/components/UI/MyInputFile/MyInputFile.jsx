import React, { forwardRef } from 'react';
import cl from './MyInputFile.module.scss';

const MyInputFile = forwardRef((props, ref) => {
    return (
        <input className={cl.input} {...props} ref={ref}/>
    )
});

export default MyInputFile;