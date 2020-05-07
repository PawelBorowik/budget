import React from "react"
import {Wrapper} from 'componets'
import {Conteiner,List} from './Navigation.css.js'
import {Link} from "react-router-dom";


const Navigation= ({ items })=>{
    return(
        <Wrapper>
             <Conteiner>
                 <List>
                     {items.map(item=> (
                         <li>
                             <Link to={item.to}>{item.content}</Link>
                        </li>
                     ))}

                </List>
            </Conteiner>
        </Wrapper>
    )

}

export default Navigation