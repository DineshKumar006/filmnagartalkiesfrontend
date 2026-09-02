import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import SwiperCore, { Autoplay, Pagination, Mousewheel } from 'swiper'

import MenuBookIcon from '@material-ui/icons/MenuBook'
import MovieFilterIcon from '@material-ui/icons/MovieFilter'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import MicIcon from '@material-ui/icons/Mic'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import DescriptionIcon from '@material-ui/icons/Description'

import Style from './Home.module.css'
import { getLimitedTeasers, getLimitedTrailers } from '../controllers/FetchData/FetchData'
import { LimitedTrailerData, LimitedTeasersData } from '../../ReduxStore/Actions/DefaultActions'
import { TeasersDetail } from '../../ReduxStore/Actions/TeasersActions'
import { TrailerDetails } from '../../ReduxStore/Actions/TrailersActions'
import Backdrop from '../../UIElements/backdrop/Backdrop'

SwiperCore.use([Autoplay, Pagination, Mousewheel])

const BROWSE = [
    { label: 'Reviews', to: '/Reviews', icon: <MenuBookIcon style={{ fontSize: 22 }} /> },
    { label: 'Interviews', to: '/Interviews', icon: <MicIcon style={{ fontSize: 22 }} /> },
    { label: 'Photoshoots', to: '/Photoshoots', icon: <PhotoLibraryIcon style={{ fontSize: 22 }} /> },
    { label: 'Songs', to: '/Songs', icon: <MusicNoteIcon style={{ fontSize: 22 }} /> },
    { label: 'Film News', to: '/filmNews', icon: <DescriptionIcon style={{ fontSize: 22 }} /> }
]

const Home = (props) => {

    const dispatch = useDispatch()
    const defautStateData = useSelector(state => state.DefaultData)

    const teasers = Array.isArray(defautStateData?.LimitedTeasersData) ? defautStateData.LimitedTeasersData : []
    const trailers = Array.isArray(defautStateData?.LimitedTrailerData) ? defautStateData.LimitedTrailerData : []

    const [heroIndex, setHeroIndex] = useState(0)

    useEffect(() => {
        let isMounted = true

        const fetchData = async () => {
            if (teasers.length === 0) {
                const r1 = await getLimitedTeasers()
                if (isMounted && Array.isArray(r1)) dispatch(LimitedTeasersData(r1))
            }
            if (trailers.length === 0) {
                const r2 = await getLimitedTrailers()
                if (isMounted && Array.isArray(r2)) dispatch(LimitedTrailerData(r2))
            }
        }

        fetchData()

        return () => {
            isMounted = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const clickHandler = (type, data) => {
        if (type === "trailer") {
            dispatch(TrailerDetails(data))
            props.history.push({ pathname: `/TrailerDetail/${data._id}` })
        } else if (type === "teaser") {
            dispatch(TeasersDetail(data))
            props.history.push({ pathname: `/TeaserDetail/${data._id}` })
        }
    }

    const exploreMoreHandler = (type) => {
        props.history.push(type === "trailer" ? '/Trailers' : '/Teasers')
    }

    const hero = teasers.length > 0 ? teasers[heroIndex % teasers.length] : null
    const heroStrip = teasers.slice(1, 4)

    const renderRail = (items, type) => {
        if (items.length === 0) {
            return (
                <div className={Style.railSkeleton}>
                    {[0, 1, 2, 3].map(i => <Backdrop key={i} wide />)}
                </div>
            )
        }

        return (
            <Swiper
                className={Style.rail}
                spaceBetween={22}
                slidesPerView={1.15}
                grabCursor={true}
                mousewheel={{ forceToAxis: true }}
                breakpoints={{
                    640: { slidesPerView: 2.2 },
                    900: { slidesPerView: 3.2 },
                    1200: { slidesPerView: 4 }
                }}
            >
                {items.map(ele => (
                    <SwiperSlide key={ele._id}>
                        <div className={Style.card} onClick={() => clickHandler(type, ele)}>
                            <img src={ele.thumbnail} alt={ele.moviename} />
                            <div className={Style.cardShade} />
                            <div className={Style.cardBody}>
                                <div className="fnt-chip-row">
                                    <span className="fnt-chip">
                                        <MovieFilterIcon style={{ fontSize: 13 }} />
                                        {type === "trailer" ? 'Trailer' : 'Teaser'}
                                    </span>
                                </div>
                                <p className={Style.cardTitle}>{ele.moviename}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        )
    }

    return (
        <div className={`container ${Style.homeHead}`}>

            {/* ---------- hero ---------- */}
            <section className={Style.hero}>

                <div
                    className={Style.heroMain}
                    onClick={() => hero && clickHandler('teaser', hero)}
                >
                    {hero
                        ? <img src={hero.thumbnail} alt={hero.moviename} />
                        : <div className={`${Style.heroPlaceholder} fnt-skel`} />
                    }
                    <div className={Style.heroShade} />

                    <div className={Style.heroBody}>
                        <div className="fnt-chip-row">
                            <span className="fnt-chip"><MenuBookIcon style={{ fontSize: 13 }} /> Latest Release</span>
                            <span className="fnt-chip"><MovieFilterIcon style={{ fontSize: 13 }} /> Teaser</span>
                        </div>

                        <h1 className={Style.heroTitle}>
                            {hero ? hero.moviename : "What's today at Film Nagar Talkies"}
                        </h1>

                        <p className={Style.heroText}>
                            {hero
                                ? 'Watch the newest teaser, then dive into trailers, reviews and exclusive interviews from Tollywood.'
                                : 'Teasers, trailers, reviews, interviews and galleries — the whole of Telugu cinema in one place.'}
                        </p>

                        <button className={`fnt-btn ${Style.heroBtn}`} type="button">
                            <PlayArrowIcon style={{ fontSize: 18 }} />
                            Watch the teaser
                        </button>
                    </div>
                </div>

                <div className={Style.heroRail}>
                    {heroStrip.length > 0
                        ? heroStrip.map((ele, i) => (
                            <div
                                key={ele._id}
                                className={`${Style.heroRailCard} ${i === 0 ? Style.heroRailCardAccent : ''}`}
                                onClick={() => setHeroIndex(teasers.indexOf(ele))}
                            >
                                <img src={ele.thumbnail} alt={ele.moviename} />
                                <div className={Style.cardShade} />
                                <div className={Style.cardBody}>
                                    <div className="fnt-chip-row">
                                        <span className="fnt-chip"><MovieFilterIcon style={{ fontSize: 13 }} /> Teaser</span>
                                    </div>
                                    <p className={Style.cardTitle}>{ele.moviename}</p>
                                </div>
                            </div>
                        ))
                        : [0, 1, 2].map(i => (
                            <div className={`${Style.heroRailCard} fnt-skel`} key={i} />
                        ))
                    }
                </div>

            </section>

            {/* ---------- teasers ---------- */}
            <section className={Style.section}>
                <div className={Style.sectionHead}>
                    <h2 className="fnt-section-title">
                        <MovieFilterIcon style={{ fontSize: 26 }} />
                        Teasers
                    </h2>
                    <span className={Style.more} onClick={() => exploreMoreHandler('teaser')}>
                        Explore More <ArrowForwardIcon style={{ fontSize: 16 }} />
                    </span>
                </div>
                {renderRail(teasers, 'teaser')}
            </section>

            {/* ---------- trailers ---------- */}
            <section className={Style.section}>
                <div className={Style.sectionHead}>
                    <h2 className="fnt-section-title">
                        <MovieFilterIcon style={{ fontSize: 26 }} />
                        Trailers
                    </h2>
                    <span className={Style.more} onClick={() => exploreMoreHandler('trailer')}>
                        Explore More <ArrowForwardIcon style={{ fontSize: 16 }} />
                    </span>
                </div>
                {renderRail(trailers, 'trailer')}
            </section>

            {/* ---------- browse ---------- */}
            <section className={Style.section}>
                <div className={Style.sectionHead}>
                    <h2 className="fnt-section-title">Browse</h2>
                </div>

                <div className={Style.browseGrid}>
                    {BROWSE.map(item => (
                        <div
                            key={item.to}
                            className={Style.browseCard}
                            onClick={() => props.history.push(item.to)}
                        >
                            <span className={Style.browseIcon}>{item.icon}</span>
                            {item.label}
                            <ArrowForwardIcon style={{ fontSize: 16 }} className={Style.browseArrow} />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}

export default Home
