
import Image from 'next/image'
import { useEffect, useState, Dispatch, SetStateAction } from 'react';
import styles from '../styles/Home.module.css'
import { getWelcomeText } from './dialoguetext';

export const Dialogue = () => {
  const [text, setText] = useState<JSX.Element | string>("");
  const [showOptions, setShowOption] = useState(false);

  useEffect(() => {
    setText(getWelcomeText());
  }, [])

  return (
    <div className={styles.dialogueContainer}>
      {showOptions && <Options setText={setText} setShowOption={setShowOption} />}

      <div onClick={() => setShowOption(!showOptions)} className={styles.dialogueBox}>
        <p className={styles.dialogueText}>{text} </p>
        <p className={styles.triangle}>{'▾'}</p>
      </div>
    </div>
  )
}

const Options = ({ setText, setShowOption }: { setText: Dispatch<SetStateAction<JSX.Element | string>>, setShowOption: Dispatch<SetStateAction<boolean>> }) => {
  const creditText = <p>
    {"I am created with the arcane knowledge from"}
    <a className={styles.link} href={"https://blog.maximeheckel.com/posts/the-magical-world-of-particles-with-react-three-fiber-and-shaders/"}>
      {" this particles and shaders spellbook"}
    </a>
    {" and the daemon text-davinci-300. "}</p>;
  const musicText = <p>
    {"When you activate the star knob, you will hear 'little ideology', crafted by "}
    <a className={styles.link} href={"https://touhoujam.bandcamp.com/album/touhou-jam-jams"}>{'iceerules'}</a>.
    {' Other sounds are from a long forgotten source (I\'m so sorry >_<)'}
  </p>;

  return (<div className={styles.dialogueOptionContainer}>
    <p className={styles.dialogueOption} onClick={() => { setText(creditText); setShowOption(false) }}>{"How... how is this possible?"}</p>
    <p className={styles.dialogueOption} onClick={() => { setText(musicText); setShowOption(false) }}>{"Where are these beautiful sounds coming from?"}</p>
  </div>)
}
