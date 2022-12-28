import React, { useContext, useEffect, useRef, useState } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { useSpring, animated, a, config } from "@react-spring/three";
import useSound from 'use-sound';
import * as material from './materials';
import { PrizeData } from '../types';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

type PropsT = {
  setPrize: React.Dispatch<React.SetStateAction<PrizeData | null>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
}

export function StarKnob({ setPrize, setLoading }: PropsT) {
  const { nodes, materials } = useGLTF('./assets/gachapon_machine.gltf')
  const starKnobRef = React.useRef(null);
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isKnobDisabled, setIsKnobDisabled] = useState(false);
  const [play] = useSound('./sounds/rattle.mp3', {
    sprite: {
      initial: [5, 200],
      full: [0, 350],
    },
  });

  const [playMusic] = useSound('./sounds/iceerules-little-idealogy.mp3', {
    sprite: {
      dundun: [55000, 55100],
    },
    volume: 0.2
  });

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  })


  const { rotation } = useSpring({
    rotation: (hovered && !active) ? Math.PI / 6 : active ? Math.PI : 0,
    config: config.wobbly
  });

  const downloadImage = () => {
    // const a = document.createElement("a");
    // a.href = "../assets/gem.png";
    // a.download = "prize.png";
    // a.click();
  }

  const handleClick = async () => {
    if (isKnobDisabled) return;

    setIsKnobDisabled(true);
    setLoading(true);
    setActive(true);
    fetcher('/api/openai').then(
      data => {
        playMusic({ id: 'dundun' });
        setPrize(data);

        setIsKnobDisabled(false);
        setLoading(false);
      },
    );
  }
  return (
    <group ref={starKnobRef} position={[20, -170, -690]} dispose={null} >
      <a.mesh
        onPointerDown={handleClick}
        onPointerUp={() => setActive(false)}
        onPointerEnter={() => { setHovered(true); play({ id: 'initial' }) }}
        onPointerLeave={() => setHovered(false)}
        // @ts-ignore
        geometry={nodes.Star.geometry}
        material={material.yellow}
        rotation-z={rotation}
        scale={2.79}
      />
    </group>
  )
}

useGLTF.preload('/assets/gachapon_machine.gltf')
