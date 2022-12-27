import { useEffect } from "react"
import useSound from "use-sound";
import { PrizeData } from "../types"
import styles from '../styles/Home.module.css'

export const PrizeModal = ({ prizeData }: { prizeData: PrizeData }) => {
  // const [play] = useSound('./sounds/bg.mp3', { volume: 0.3 });
  const [play] = useSound('./sounds/iceerules-little-idealogy.mp3', {
    volume: 0.8,
    sprite: {
      dundun: [55000, 55500],
    }
  });

  useEffect(() => {
    play({ id: 'dundun' });
  })

  return (<div className={styles.prizeModal}>
    <img className={styles.prizeImg} alt={prizeData.description} src={prizeData.imgUrl} />

    <h1 className={styles.prizeName}>{prizeData.name}</h1>
    <p className={styles.prizeDesc}>{prizeData.description}</p>
  </div>)
}