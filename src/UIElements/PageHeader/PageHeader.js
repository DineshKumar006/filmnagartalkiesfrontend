import React from 'react'
import { useHistory } from 'react-router-dom'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import TuneIcon from '@material-ui/icons/Tune'
import Style from './PageHeader.module.css'

/**
 * Shared page chrome for every inner screen:
 * breadcrumb  ->  amber section title (+ optional icon)  ->  optional filter pills.
 */
const PageHeader = (props) => {
    const history = useHistory()
    const { title, icon, parent, subtitle, filters, activeFilter, onFilterSelect, showFilterButton } = props

    return (
        <div className={Style.header}>

            <div className="fnt-crumbs">
                <a onClick={() => history.push('/')} className={Style.crumbLink}>Home</a>
                <NavigateNextIcon className="fnt-crumb-sep" style={{ fontSize: 18 }} />
                {parent && (
                    <>
                        <span className={Style.crumbMuted}>{parent}</span>
                        <NavigateNextIcon className="fnt-crumb-sep" style={{ fontSize: 18 }} />
                    </>
                )}
                <span className="fnt-crumb-current">{title}</span>
            </div>

            <div className="fnt-section-head">
                <div>
                    <h2 className="fnt-section-title">
                        {icon}
                        {title}
                    </h2>
                    {subtitle && <p className="fnt-section-sub">{subtitle}</p>}
                </div>

                {showFilterButton && (
                    <button className={`fnt-btn-ghost ${Style.filterBtn}`} type="button">
                        Filter
                        <TuneIcon style={{ fontSize: 18 }} />
                    </button>
                )}
            </div>

            {filters && filters.length > 0 && (
                <div className="fnt-pills">
                    {filters.map(item => (
                        <button
                            key={item}
                            type="button"
                            className={`fnt-pill ${activeFilter === item ? 'is-active' : ''}`}
                            onClick={() => onFilterSelect && onFilterSelect(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default PageHeader
