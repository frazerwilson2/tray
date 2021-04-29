import React from 'react';
import { MenuProps } from '../types';

const Menu = ({config, active}: MenuProps) => {
    return (
        <div className="menu">
            {config.map(page => 
                <div className={`menu-item ${active && active == page.title ? 'menu-active':''}`} key={page.title}>
                    {page.title}
                </div>
                )
            }
        </div>
    )
}

export default Menu;