import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import MenuBookIcon from '@material-ui/icons/MenuBook'

import Style from './Review.module.css'
import fallbackArt from '../../#images/r1.jpeg'
import { ReviewDetail } from '../../ReduxStore/Actions/ReviewDetailsActions'
import { getAllReviews } from '../controllers/FetchData/FetchData'
import Backdrop from '../../UIElements/backdrop/Backdrop'
import PageHeader from '../../UIElements/PageHeader/PageHeader'

const Reviews = (props) => {

    const dispatch = useDispatch()
    const [reviewData, setReviewData] = useState([])

    useEffect(() => {
        let isMounted = true

        const fetch = async () => {
            const data = await getAllReviews()
            if (isMounted && Array.isArray(data)) {
                setReviewData(data)
            }
        }

        fetch()

        return () => {
            isMounted = false
        }
    }, [])

    const onImageClickHandler = (id, data) => {
        dispatch(ReviewDetail(data))
        props.history.push({
            pathname: `/ReviewDetail/${id}`,
            id: id
        })
    }

    const lead = reviewData[0]
    const features = reviewData.slice(1, 3)

    return (
        <div className={`container ${Style.Head}`}>

            <PageHeader
                title="Reviews"
                subtitle="Honest verdicts on every new Telugu release"
                icon={<MenuBookIcon style={{ fontSize: 26 }} />}
            />

            <div className={Style.ReviewHeaderElement}>

                <div
                    className={Style.imagehead1}
                    onClick={() => lead && onImageClickHandler(lead._id, lead)}
                >
                    <img src={lead ? lead.thumbnail : fallbackArt} className={Style.img} alt="" />
                    <p className={Style.para}>
                        {lead ? lead.title : 'The latest reviews land here first'}
                    </p>
                </div>

                <div className={Style.imagehead2}>
                    {features.length > 0
                        ? features.map(ele => (
                            <div key={ele._id} onClick={() => onImageClickHandler(ele._id, ele)}>
                                <img src={ele.thumbnail} alt="" />
                                <p>{ele.title}</p>
                            </div>
                        ))
                        : [0, 1].map(i => (
                            <div key={i}>
                                <img src={fallbackArt} alt="" />
                                <p>Loading the newest reviews…</p>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className={Style.HeaderElement2}>
                <div className={Style.HeaderElement2_E1}>

                    {reviewData.length > 0
                        ? <div className={Style.eleHead}>
                            {reviewData.map(ele => (
                                <div key={ele._id} className={Style.eleHeadinner}>
                                    <div className={Style.innercontent} onClick={() => onImageClickHandler(ele._id, ele)}>
                                        <img src={ele.thumbnail} className={Style.img} alt="" />
                                        <p>{ele.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        : <div className={Style.eleHead}>
                            {[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
                                <div className={Style.eleHeadinner} key={i}><Backdrop /></div>
                            ))}
                        </div>
                    }

                </div>
            </div>

        </div>
    )
}

export default Reviews
