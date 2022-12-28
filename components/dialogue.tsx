
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import { getWelcomeText } from './dialoguetext';

export const Dialogue = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(getWelcomeText());
    // console.log(listEngines());
  }, [])

  return (
    <div className={styles.dialogueBox}>
      <p className={styles.dialogueText}>{text} </p>
      <p className={styles.triangle}>{'▾'}</p>
    </div>
  )
}

const Options = () => {
  return (<div>

  </div>)
}
