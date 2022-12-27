import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GachaponMachineCanvas } from '../components/GachaponMachineCanvas';
import { Dialogue } from '../components/dialogue';
import { getWelcomeText } from '../components/dialoguetext';
import { createContext, useEffect, useState } from 'react';
import { listEngines } from '../components/OpenAI';
import { PrizeData } from '../types';

// export const PrizeContext = createContext({
//   setPrize: (value: PrizeData | null) => void;
// });

const Home: NextPage = () => {
  const [welcomeText, setWelcomeText] = useState('');
  const [prize, setPrize] = useState<PrizeData | null>(null);
  console.log("prize", prize);

  useEffect(() => {
    setWelcomeText(getWelcomeText());
    // console.log(listEngines());
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Magic Candy Machine</title>
        <meta name="description" content="What will you get?" />
        <link rel="icon" href="/candy.png" />
      </Head>

      {/* <PrizeContext.Provider value={{ setPrize: setPrize }}> */}
      <main className={styles.main}>
        <GachaponMachineCanvas setPrize={setPrize} />
        {prize && <PrizeModal prizeData={prize} />}
        <Dialogue text={welcomeText} />
      </main>
      {/* </PrizeContext.Provider> */}
    </div>
  )
}

const PrizeModal = ({ prizeData }: { prizeData: PrizeData }) => {
  return (<div className={styles.prizeModal}>
    <img className={styles.prizeImg} alt={prizeData.description} src={prizeData.imgUrl} />

    <h1 className={styles.prizeName}>{prizeData.name}</h1>
    <p className={styles.prizeDesc}>{prizeData.description}</p>
  </div>)

}

export default Home
