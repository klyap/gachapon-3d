import React, { useRef, useState } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { useSpring, animated, a, config } from "@react-spring/three";
import useSound from 'use-sound';
// import rattleSfx from '../public/sounds/rattle.mp3';

import * as material from './materials';

export function Gem() {
  const { nodes, materials } = useGLTF('./assets/gachapon_machine.gltf')
  const starKnobRef = React.useRef(null);
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);
  // const [play] = useSound(rattleSfx, {
  //   sprite: {
  //     initial: [5, 200],
  //     full: [0, 350],
  //   }
  // });

  const { rotation} = useSpring({
    rotation: (hovered && !active) ? Math.PI/6 : active ? Math.PI : 0,
    config: config.wobbly
  });

  // useFrame(({ clock }) => {
  //   const a = clock.getElapsedTime();
  //   starKnobRef.current.rotation.z = a;
  //   if (a % 10 == 1) setActive(!active)
  // });

  const downloadImage = () => {
    const a = document.createElement("a");
    a.href = "/gem.png";
    a.download = "prize.png";
    a.click();
  }
  return (
    //[-138.6, 333.34, 383.79]
    <group ref={starKnobRef} position={[-27.83, 30, -600]} dispose={null} >
        <a.mesh 
        onPointerDown={() => {setActive(true)}}
        // onPointerDown={() => {setActive(true); play({id: 'full'})}}
        onPointerUp={() => setActive(false)}
        onPointerEnter={() => {setHovered(true)}}
        // onPointerEnter={() => {setHovered(true); play({id: 'initial'})}}
        onPointerLeave={() => setHovered(false)}
        geometry={nodes.Star.geometry} 
        material={material.yellow}
        // position={[-27.83, 109.66, 518.23]}
        rotation-z={rotation}
        scale={2.79}
         />
    </group>
  )
}

useGLTF.preload('/assets/gachapon_machine.gltf')
