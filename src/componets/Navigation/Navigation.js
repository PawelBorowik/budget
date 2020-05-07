import React from "react"
import {Wrapper} from 'componets'
import { Conteiner,List } from './Navigation.css.js'


const Navigation= ({ items})=>{
    return(
    <Conteiner>
        <Wrapper>
            <List>
                {items.map(item=> (
                    <li>
                        <a>{item.content}</a>
                    </li>
                ))}

            </List>
        </Wrapper>
    </Conteiner>
    )

}

export default Navigation