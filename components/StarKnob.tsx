import React, { useRef, useState } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { useSpring, animated, a, config } from "@react-spring/three";
import useSound from 'use-sound';

import * as material from './materials';

export function StarKnob() {
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

  const { rotation} = useSpring({
    rotation: (hovered && !active) ? Math.PI/6 : active ? Math.PI : 0,
    config: config.wobbly
  });

  const downloadImage = () => {
    // const a = document.createElement("a");
    // a.href = "../assets/gem.png";
    // a.download = "prize.png";
    // a.click();
  }
  return (
    <group ref={starKnobRef} position={[-27.83, -170, -690]} dispose={null} >
        <a.mesh 
        onPointerDown={() => {setActive(true); downloadImage(); play({id: 'full'})}}
        onPointerUp={() => setActive(false)}
        onPointerEnter={() => {setHovered(true); play({id: 'initial'})}}
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
