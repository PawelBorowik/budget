import React from "react"
import {Wrapper} from 'componets'
import { Conteiner,List } from './Navigation.css.js'


const Navigation= ({ items})=>{
    return(
        <Wrapper>
             <Conteiner>
                 <List>
                     {items.map(item=> (
                         <li>
                             <a>{item.content}</a>
                        </li>
                     ))}

                </List>
            </Conteiner>
        </Wrapper>
    )

}

export default Navigation