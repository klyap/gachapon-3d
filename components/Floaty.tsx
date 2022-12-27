import React, { useRef, useState } from 'react'
import { useGLTF, PerspectiveCamera, Sparkles } from '@react-three/drei'
import * as THREE from 'three';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { useSpring, animated, a, config } from "@react-spring/three";
import useSound from 'use-sound';
import { type Material } from 'three';

import * as material from './materials';

type PropsT = {
  position: [number, number, number],
  rotation: [number, number, number],
  scale: [number, number, number],
  material: Material,
  gltfNodeName: string
}

export function Floaty(props: PropsT) {
  const { nodes } = useGLTF('./assets/gachapon_machine.gltf')
  const ref = React.useRef(null);
  const randomness = Math.random() * 6 + 1;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    // @ts-ignore
    ref.current.rotation.z = Math.sin(t / randomness);
    // @ts-ignore
    ref.current.rotation.y = Math.sin(t / randomness);

    // @ts-ignore
    ref.current.position.x = Math.cos(t * randomness) / 4 + ref.current.position.x;
    // @ts-ignore
    ref.current.position.y = Math.sin(t * randomness) / 5 + ref.current.position.y;
    // @ts-ignore
    ref.current.position.z = Math.cos(t * randomness) / 2 + ref.current.position.z;
  })

  return (
    <group ref={ref} position={props.position} dispose={null} >
      <a.mesh
        // @ts-ignore
        geometry={nodes[props.gltfNodeName].geometry}
        material={props.material}
        rotation={props.rotation}
        scale={props.scale}
      />
      <Sparkles count={40} scale={80} size={5000} speed={200} />
    </group>
  )
}

useGLTF.preload('/assets/gachapon_machine.gltf')
