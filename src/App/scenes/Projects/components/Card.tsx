import * as React from 'react';
import Icon from '@material-ui/core/Icon'
import GitHubIcon from '@material-ui/icons/GitHub'

import './Card.scss'
import { openNewTab } from '../../../../utils/utils'

interface Props {
    image?: any
    title: string
    subtitle?: string
    description?: string
    web?: string
    publication?: string
    source: string
    technologies?: string[]
}

export const Card = (props: Props) => {
    return (
        <div className="card">
            <div className="card__image" style={{ backgroundImage: `url(${props.image})` }}>
                <div className="card__image--hover">
                    <GitHubIcon onClick={openNewTab(props.source)} />
                </div>
            </div>
            <div className="card__body">
                <h2>{props.title}</h2>
                <h4>{props.subtitle}</h4>
                <p>{props.description}</p>
                <div className="card__tech">
                    {
                        props.technologies && props.technologies.map((tech: string) => {
                            const [name, color] = tech.split(',')
                            return (
                                <div className="tech" key={name}>
                                    <div style={{backgroundColor: color}}></div>
                                    <span>{name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="card__icons">
                    {
                        props.publication 
                        && 
                            <img 
                                className="publication" 
                                src={require("./../../../../styles/assets/medium.png")} 
                                onClick={openNewTab(props.publication)}/> 
                            
                    }
                    {
                        props.web && <Icon className="card__icon web" onClick={openNewTab(props.web)}>language</Icon>
                    }
                </div>
            </div>
        </div>
    )
}
