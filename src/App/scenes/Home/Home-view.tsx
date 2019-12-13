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
                    <h3>{props.data.team_subtitle}</h3>
                </div>
            </div>

            <div className="home__bottom">
                <div className="main-container">
                    <h1>{props.data.bottom__title}</h1>
                    <p>{props.data.bottom__subtitle}</p>
                </div>
            </div>
        </div>
    )
}