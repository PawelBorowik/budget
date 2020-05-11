import React from "react"

import {Conteiner, NavigationWrapper, List} from './Navigation.css.js'
import {Link} from "react-router-dom";


const Navigation= ({ items = [], RightElement })=>{
    return(
       
        <Conteiner>
             <NavigationWrapper>
                 <List >
                     {items.map(item=> (
                         <li key={item.to}>
                             <Link to={item.to}>{item.content}</Link>
                        </li>
                     ))}

                </List>
                {RightElement}
            </NavigationWrapper>
        </Conteiner>
    )

}

export default Navigation