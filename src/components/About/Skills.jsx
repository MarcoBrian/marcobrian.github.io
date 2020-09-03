import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal/Fade';


var skills_logo = [
    {
        type:'fab',
        name:'python'
    },
    {
        type:'fab',
        name:'java'
    },
    {
        type:'fas',
        name:'database'
    },
    {
        type:'fab',
        name:'git-alt'

    },
    {
        type:'fab',
        name:'react'

    },
    {
        type:'fab',
        name:'js'

    },
    {
        type:'fab',
        name:'html5'

    },
    {
        type:'fab',
        name:'css3-alt'

    }
]


export default function Skills() {
    return (
    <Fade right duration={1000} delay={1000}>
        <ul className="skill-list">
          {skills_logo.map((skill)=>{
            return (<li className="skill-item-icons">
                <FontAwesomeIcon icon={[ skill.type, skill.name]} />
            </li>)
          })}
        </ul>
        </Fade>
    )
}
