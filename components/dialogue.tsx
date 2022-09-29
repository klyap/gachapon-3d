
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const Dialogue = (props: {text: string}) => {
  return (
    <div className={styles.dialogueBox}>
      <p>{props.text}</p><div className="arrow"></div>
    </div>
  )
}
