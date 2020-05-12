
import React from 'react';
import {Inline, Regular} from './button.css'

const Button = ({buttonType, children}) => {
    const Component=(()=>{
        switch(buttonType){
            case 'Inline':
                 return Inline
            case'Regular':
                return Regular
            default:
                return 'Regular'
        }
    })()
    
    return (
        <div>
            <Component>
                {children}
            </Component>
        </div>
    );
};

export default Button;