import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Link } from 'react-scroll'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SearchIcon from '@material-ui/icons/Search'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'

import Style from './Navlink.module.css'
import CinemaOptions from './CinemaOptions/CinemaOptions'
import GallaryOptions from './GalleryOptions/GallaryOptions'
import NewsOptions from './NewsOptions/NewsOptions'
import LatestReleaseOptions from './LatestRelease/LatestRelease'
import HamBurger from '../../UIElements/hamBurger/HamBurger'
import FNT_logoMain from '../../#images/FNT_logoMain.png'

const NavlinksComponent = () => {

    const history = useHistory()
    const [query, setQuery] = useState('')

    const navigateHandler = () => {
        history.push('/')
    }

    return (
        <header className={Style.navShell}>
            <div className={`container ${Style.navInner}`}>

                <div className={Style.burger}>
                    <HamBurger />
                </div>

                <nav className={Style.links}>
                    <NavLink to='/' exact={true} activeClassName={Style.active}>Home</NavLink>

                    <span className={Style.dropdown}>
                        News
                        <ExpandMoreIcon style={{ fontSize: 16 }} />
                        <div className={Style.dropdownPanel}>
                            <NewsOptions />
                        </div>
                    </span>

                    <NavLink to='/Reviews' exact={true} activeClassName={Style.active}>Reviews</NavLink>
                    <NavLink to='/Interviews' exact={true} activeClassName={Style.active}>Interviews</NavLink>

                    <span className={Style.dropdown}>
                        Latest Release
                        <ExpandMoreIcon style={{ fontSize: 16 }} />
                        <div className={Style.dropdownPanel}>
                            <LatestReleaseOptions />
                        </div>
                    </span>

                    <span className={Style.dropdown}>
                        Gallery
                        <ExpandMoreIcon style={{ fontSize: 16 }} />
                        <div className={Style.dropdownPanel}>
                            <GallaryOptions />
                        </div>
                    </span>

                    <Link to='aboutus' activeClass={Style.active} hashSpy={true} spy={true}
                        smooth={true} offset={-10} duration={500} className={Style.scrollLink}>
                        About us
                    </Link>
                </nav>

                <div className={Style.logo} onClick={navigateHandler}>
                    <img src={FNT_logoMain} alt="Film Nagar Talkies" />
                </div>

                <div className={Style.actions}>
                    <div className={Style.search}>
                        <SearchIcon style={{ fontSize: 18 }} className={Style.searchIcon} />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="What are you looking for?"
                        />
                    </div>

                    <div className={Style.avatar}>
                        <PersonOutlineIcon style={{ fontSize: 22 }} />
                    </div>
                </div>

            </div>
        </header>
    )
}

export default NavlinksComponent
