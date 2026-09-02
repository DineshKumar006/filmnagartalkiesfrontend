import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Style from './HamBurger.module.css'

const SECTIONS = [
    {
        title: null,
        items: [
            { label: 'Home', to: '/' },
            { label: 'Reviews', to: '/Reviews' },
            { label: 'Interviews', to: '/Interviews' }
        ]
    },
    {
        title: 'News',
        items: [
            { label: 'General News', to: '/generalNews' },
            { label: 'Film News', to: '/filmNews' }
        ]
    },
    {
        title: 'Latest Release',
        items: [
            { label: 'Teasers', to: '/Teasers' },
            { label: 'Trailers', to: '/Trailers' },
            { label: 'Songs', to: '/Songs' }
        ]
    },
    {
        title: 'Gallery',
        items: [
            { label: 'Photoshoots', to: '/Photoshoots' },
            { label: 'Actors', to: '/Actors' },
            { label: 'Actresses', to: '/Actresses' },
            { label: 'Events', to: '/Events' },
            { label: 'Working Stills', to: '/Workingstills' }
        ]
    }
]

const HamBurger = () => {

    const [openMenu, setOpenMenu] = useState(false)

    const menuHandler = () => setOpenMenu(!openMenu)
    const closeMenu = () => setOpenMenu(false)

    return (
        <div className={Style.main}>

            <div className={Style.icons} onClick={menuHandler}>
                <MenuIcon style={{ fontSize: 28 }} />
            </div>

            {openMenu && (
                <>
                    <div className={Style.scrim} onClick={closeMenu} />

                    <div className={Style.drawer}>
                        <div className={Style.drawerTop}>
                            <span className={Style.drawerTitle}>Menu</span>
                            <div className={Style.closeicon} onClick={closeMenu}>
                                <CloseIcon style={{ fontSize: 24 }} />
                            </div>
                        </div>

                        <div className={Style.navEle}>
                            {SECTIONS.map((section, i) => (
                                <div className={Style.group} key={section.title || `group-${i}`}>
                                    {section.title && <p className={Style.groupTitle}>{section.title}</p>}
                                    {section.items.map(item => (
                                        <div className={Style.innerNavEle} key={item.to}>
                                            <NavLink
                                                to={item.to}
                                                exact={true}
                                                activeClassName={Style.active2}
                                                onClick={closeMenu}
                                            >
                                                {item.label}
                                            </NavLink>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default HamBurger
