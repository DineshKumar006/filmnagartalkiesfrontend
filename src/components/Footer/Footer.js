import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import Style from './Footer.module.css';
import FNT_logoMain from '../../#images/FNT_logoMain.png';
import fallbackArt from '../../#images/bg.jpg';

const PRIMARY_LINKS = [
    { label: 'Reviews', to: '/Reviews' },
    { label: 'Interviews', to: '/Interviews' },
    { label: 'Teasers', to: '/Teasers' },
    { label: 'Trailers', to: '/Trailers' },
    { label: 'Songs', to: '/Songs' }
];

const SECONDARY_LINKS = [
    { label: 'General News', to: '/generalNews' },
    { label: 'Film News', to: '/filmNews' },
    { label: 'Photoshoots', to: '/Photoshoots' },
    { label: 'Events', to: '/Events' },
    { label: 'Working Stills', to: '/Workingstills' }
];

const Footer = () => {

    const history = useHistory();
    const teasers = useSelector(state => state.DefaultData.LimitedTeasersData);
    const [spotlight, setSpotlight] = useState(0);

    const list = Array.isArray(teasers) ? teasers : [];
    const current = list.length > 0 ? list[spotlight % list.length] : null;

    const step = (direction) => {
        if (list.length === 0) return;
        setSpotlight(prev => (prev + direction + list.length) % list.length);
    };

    const open = (url) => window.open(url, "_blank");

    return (
        <footer className={Style.footer} id="aboutus">

            <div className={`container ${Style.inner}`}>

                <div className={Style.brandRow}>
                    <div className={Style.logoBox}>
                        <img src={FNT_logoMain} alt="Film Nagar Talkies" />
                    </div>
                    <span className={Style.wordmark}>FILM NAGAR TALKIES</span>
                </div>

                <div className={Style.grid}>

                    <div className={Style.ctaColumn}>
                        <button className={Style.ctaCard} onClick={() => open("https://www.instagram.com/filmnagartalkies/")}>
                            <InstagramIcon style={{ fontSize: 26 }} className={Style.ctaIcon} />
                            <span>Visit our Page on Instagram</span>
                        </button>

                        <button className={Style.ctaCard} onClick={() => open("https://www.youtube.com/channel/UCqx_Q4C00mY6pTU0QD40mHQ")}>
                            <YouTubeIcon style={{ fontSize: 26 }} className={Style.ctaIcon} />
                            <span>Watch us on YouTube</span>
                        </button>

                        <div className={Style.socialRow}>
                            <span onClick={() => open("https://www.facebook.com/filmnagartalkies/")}><FacebookIcon style={{ fontSize: 20 }} /></span>
                            <span onClick={() => open("https://twitter.com/filmnagartalkie")}><TwitterIcon style={{ fontSize: 20 }} /></span>
                            <span onClick={() => open("https://in.pinterest.com/filmnagartalkies/")}><PinterestIcon style={{ fontSize: 20 }} /></span>
                        </div>
                    </div>

                    <div className={Style.linkColumn}>
                        {PRIMARY_LINKS.map(link => (
                            <span key={link.to} onClick={() => history.push(link.to)}>{link.label}</span>
                        ))}
                    </div>

                    <div className={Style.linkColumn}>
                        {SECONDARY_LINKS.map(link => (
                            <span key={link.to} onClick={() => history.push(link.to)}>{link.label}</span>
                        ))}
                    </div>

                    <div className={Style.spotlightColumn}>
                        <div
                            className={Style.spotlightCard}
                            onClick={() => current && history.push(`/TeaserDetail/${current._id}`)}
                        >
                            <img src={current ? current.thumbnail : fallbackArt} alt={current ? current.moviename : 'Film Nagar Talkies'} />
                            <div className={Style.spotlightShade} />
                            <div className={Style.spotlightBody}>
                                <div className="fnt-chip-row">
                                    <span className="fnt-chip"><MenuBookIcon style={{ fontSize: 13 }} /> Teaser</span>
                                    <span className="fnt-chip"><MovieFilterIcon style={{ fontSize: 13 }} /> Latest Release</span>
                                </div>
                                <p className={Style.spotlightTitle}>
                                    {current ? current.moviename : 'Telugu cinema, every day'}
                                </p>
                            </div>
                        </div>

                        <div className={Style.spotlightNav}>
                            <button onClick={() => step(-1)} aria-label="Previous"><ArrowBackIcon style={{ fontSize: 18 }} /></button>
                            <button onClick={() => step(1)} aria-label="Next"><ArrowForwardIcon style={{ fontSize: 18 }} /></button>
                        </div>
                    </div>

                </div>

                <p className={Style.about}>
                    Film Nagar Talkies Digital Media Company is all about Telugu Cinema updates, movie promotions,
                    exclusive interviews, celebrities, brand promotions, short films and content creation.
                    <span className={Style.mail}> filmnagartalkies@gmail.com</span>
                </p>

            </div>

            <div className={Style.legal}>
                All intellectual and material rights of this website are reserved. Any form of reproduction will be legally pursued.
            </div>

        </footer>
    );
};

export default Footer;
