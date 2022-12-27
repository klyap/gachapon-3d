import React, { useContext, useRef, useState } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { useSpring, animated, a, config } from "@react-spring/three";
import useSound from 'use-sound';
import * as material from './materials';
import { PrizeData } from '../types';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function StarKnob({ setPrize }: { setPrize: React.Dispatch<React.SetStateAction<PrizeData | null>> }) {
  const { nodes, materials } = useGLTF('./assets/gachapon_machine.gltf')
  const starKnobRef = React.useRef(null);
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [play] = useSound('./sounds/rattle.mp3', {
    sprite: {
      initial: [5, 200],
      full: [0, 350],
    }
  });

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
    setActive(true); downloadImage(); play({ id: 'full' })
    // const prizeData = await generateItem();
    const prizeData = await fetcher('/api/openai');
    // const prizeData = {name: "hihi", description: "hiieee", url: }
    setPrize(prizeData);
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
