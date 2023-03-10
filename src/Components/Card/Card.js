import React from 'react'
import './Card.css'
import styles from './Card.module.css'
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export default function Card(props) {
    const {t} = useTranslation()
    return (
        <>
            <div className={`${styles.card}`}>
                <div className={`${styles.cardDetails}`}>
                    <img src={`${props.img}`} className={`${styles.cardImg}`} alt='' />
                    <h3 className={`${styles.textTitle}`}>{props.title}</h3>
                    <p className={`${styles.textPara}`}>{props.para}</p>
                    <div className={`${styles.cardPrice}`}>
                        <ProgressBar now={`${props.prog}`} className={`${styles.prog} ${styles.progress}`} />
                        <div className={`${styles.allCollect}`}>
                            <div className={`${styles.priceCollect}`}>
                                <span>{props.price}</span>
                                <span> {props.totalPrice}</span>
                            </div>
                            <div className={`${styles.priceTitle}`}>
                                <span> {props.numOfDonates}</span>
                                <span>عدد التبرعات</span>
                            </div>
                        </div>

                    </div>
                </div>
                <Link to='/card-details'><button className={`${styles.cardButton}`}>{t("للتبرع")} </button></Link>
            </div>
        </>
    )
}
