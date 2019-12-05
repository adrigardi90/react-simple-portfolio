import React, { Component } from 'react'
import './MobileMenu.scss'
import { AppRoute } from '../../routes/routes.interface';
import { Link } from 'react-router-dom';

interface Props {
    opened: boolean
    entries: AppRoute[]
    openMenu: (e: any) => any
}

export const MobileMenu = ({opened, entries, openMenu}: Props) => {
    return (
        opened ?  
            <div className="mobile-menu">{
                entries.map((entry: AppRoute) => (
                    <div className="mobile-menu__entry" key={entry.name}>
                        <Link 
                            to={entry.path}
                            onClick={openMenu}>{entry.name}</Link>
                    </div>
                ))
            }</div> 
            : null
    )
}