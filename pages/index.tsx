import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GachaponMachineCanvas } from '../components/GachaponMachineCanvas';
import { Dialogue } from '../components/dialogue';
import { createContext, useEffect, useState } from 'react';
import { PrizeData } from '../types';
import { PrizeModal } from '../components/PrizeModal';

// export const PrizeContext = createContext({
//   setPrize: (value: PrizeData | null) => void;
// });

const Home: NextPage = () => {
  const [welcomeText, setWelcomeText] = useState('');
  const [prize, setPrize] = useState<PrizeData | null>(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setWelcomeText(getWelcomeText());
  //   // console.log(listEngines());
  // }, [])

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
        <Dialogue />
      </main>
      {/* </PrizeContext.Provider> */}
    </div>
  )
}

export default Home
