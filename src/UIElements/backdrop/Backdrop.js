import React from 'react'
import Style from './Backdrop.module.css'

/**
 * Loading placeholder shaped like a media card:
 * shimmering artwork block, then two shimmering text lines.
 */
const Backdrop = (props) => {
    return (
        <div className={Style.backdrop}>
            <div className={`${Style.art} ${props.wide ? Style.artWide : ''} fnt-skel`} />
            <div className={Style.lines}>
                <span className={`${Style.line} fnt-skel`} />
                <span className={`${Style.lineShort} fnt-skel`} />
            </div>
        </div>
    )
}

export default Backdrop
