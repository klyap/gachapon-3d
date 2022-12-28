
import Image from 'next/image'
import { useEffect, useState, Dispatch } from 'react';
import styles from '../styles/Home.module.css'
import { getWelcomeText } from './dialoguetext';

export const Dialogue = () => {
  const [text, setText] = useState('');
  const [showOptions, setShowOption] = useState(false);

  useEffect(() => {
    setText(getWelcomeText());
    // console.log(listEngines());
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

const Options = ({ setText, setShowOption }: { setText: Dispatch<SetStateAction<string>>, setShowOption: Dispatch<SetStateAction<boolean>> }) => {
  const creditText = <p>{"This contraption is made with the arcane knowledge embued in"} <a className={styles.link} href={"https://blog.maximeheckel.com/posts/the-magical-world-of-particles-with-react-three-fiber-and-shaders/"}>{" this spellbook about particles and shaders"}</a> and the daemon text-davinci-300 from the realm of OpenAI. </p>;
  const musicText = <p>{"You are listening to 'little ideology', conjured by the bard "} <a className={styles.link} href={"https://touhoujam.bandcamp.com/album/touhou-jam-jams"}>{'iceerules'}</a>. {'Other sound effects are from a long forgotten source (I am so sorry >_<). Historians surmise that it may have been from a free itch.io Gameboy Sound Effect pack. '}</p>;

  return (<div className={styles.dialogueOptionContainer}>
    <p className={styles.dialogueOption} onClick={() => { setText(creditText); setShowOption(false) }}>{"How... how is this possible?"}</p>
    <p className={styles.dialogueOption} onClick={() => { setText(musicText); setShowOption(false) }}>{"Where are these beautiful sounds coming from?"}</p>
  </div>)
}
