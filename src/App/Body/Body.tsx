import React, { Component } from 'react';
import './Body.scss'

export const Body = (props: any) => {
    return (
        <div className="app__container">
            {
                props.children
            }
        </div>
    )
}