import * as React from 'react';

import './Home.scss'

export const HomeView = (props: any) => {
    return (props.data
        &&
        <div className="home">
            <div className="home__title">
                <div className="main-container">
                    <h1> {props.data.title} </h1>
                    <div className="separator"></div>
                    <h3> {props.data.subtitle}</h3>
                </div>
            </div>

            <div className="home__team">
                <div className="main-container">
                    <h2>{props.data.team_title}</h2>
                    <h3>{props.data.team_subtitle}</h3>
                </div>
            </div>

            <div style={{height: '400px', background: '#ffd300'}}>

            </div>
        </div>
    )
}