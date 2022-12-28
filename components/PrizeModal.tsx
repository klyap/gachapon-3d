import { useEffect } from "react"
import { PrizeData } from "../types"
import styles from '../styles/Home.module.css'

export const PrizeModal = ({ prizeData }: { prizeData: PrizeData }) => {

  const style = (x: number, y: number, size: number) => ({
    position: 'absolute',
    right: `${x}px`,
    width: `${size}px`,
    top: `${y}px`,
  })

  return (<div className={styles.prizeModal}>
    <div className={styles.rays}></div>
    <img className={styles.prizeImg} alt={prizeData.description} src={prizeData.imgUrl} />
    {/* <img style={style(320, 200, 100)} src={'./assets/sparkle.png'} />
    <img style={style(100, 10, 80)} src={'./assets/sparkle.png'} /> */}
    <h1 className={styles.prizeName}>{prizeData.name}</h1>
    <p className={styles.prizeDesc}>{prizeData.description}</p>
  </div>)
}