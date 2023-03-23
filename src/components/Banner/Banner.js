import React from 'react'
import ImgBanner from "../../images/Chez-vous-partout.png"
import styles from"../Banner/Banner.module.css"

export default function Banner() {
    return (
        <div >
       <img className={styles.ImgBanner} src={ImgBanner} alt= "Vue d'une crique bordée de sapins et d'une falaise escarpée en arrière-plan"/>
        <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
        </div>
    )
}

