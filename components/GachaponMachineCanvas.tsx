import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei'
import useSound from 'use-sound';

import { GachaponMachine } from './gachapon_machine';
import { StarKnob } from './StarKnob';
import { Floaty } from './Floaty';
import * as material from './materials';
import { PrizeData } from '../types'

export const GachaponMachineCanvas = ({ setPrize }: { setPrize: React.Dispatch<React.SetStateAction<PrizeData | null>> }) => {
  const [play] = useSound('./sounds/bg.mp3', { volume: 0.3 });

  useEffect(() => {
    // play();
  })

  const PINK = 0xF6DE7E;
  const BLUE = 0xABDB90;

  return (
    <Canvas dpr={1.5} linear camera={{ far: 100000, near: 5, fov: 20, position: [-43.88, 218.96, 1766.62] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <GachaponMachine
          // scale={1.2} 
          rotation={new THREE.Euler(0, 0, 0)}
          position={new THREE.Vector3(45, -300, -1200)} />
        <StarKnob setPrize={setPrize} />
        <Floaty gltfNodeName='Icosahedron_3' material={material.gem(0xD998F6)} position={[-55, -60, -790]} rotation={[-1.38, 1.01, -0.06]} scale={[2.06, 2.79, 0.36]} />
        <Floaty gltfNodeName='Icosahedron_3_1' material={material.gem(0x77BBDA)} position={[115, -20, -890]} rotation={[0.15, 0.33, -0.61]} scale={[2.06, 2.79, 2.79]} />
        <Floaty gltfNodeName='Icosahedron' material={material.gem(BLUE)} position={[95, 160, -790]} rotation={[-0.13, 0.47, 0.46]} scale={[2.06, 2.79, 2.79]} />
        <Floaty gltfNodeName='Icosahedron_2' material={material.gem(PINK)} position={[-55, 100, -700]} rotation={[-0.99, -0.3, -0.51]} scale={[2.06, 2.79, 0.36]} />
        <Floaty gltfNodeName='Sphere_2' material={material.bluelight} position={[-55, 130, -850]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
        <Floaty gltfNodeName='Sphere_2' material={material.bluelight} position={[0, 100, -700]} rotation={[0, 0, 0]} scale={[1, 1, 1]} />
        <Floaty gltfNodeName='Sphere_2' material={material.bluelight} position={[100, 20, -720]} rotation={[0, 0, 0]} scale={[1.4, 1.4, 1.4]} />
        <Floaty gltfNodeName='Sphere_2' material={material.bluelight} position={[-50, 10, -780]} rotation={[0, 0, 0]} scale={[1.2, 1.2, 1.2]} />
        <Floaty gltfNodeName='ball_4' material={material.bubble} position={[-60, 30, -820]} rotation={[0, 0, 0]} scale={[3, 3, 3]} />
        <Floaty gltfNodeName='ball_4' material={material.bubble2} position={[90, 100, -880]} rotation={[0, 0, 0]} scale={[2.7, 2.7, 2.7]} />
        <Floaty gltfNodeName='ball_5' material={material.bubble3} position={[20, -30, -840]} rotation={[0, 0, 0]} scale={[2.9, 2.8, 2.7]} />

        <Environment preset="sunset" />
        {/* <OrbitControls makeDefault /> */}
      </Suspense>
    </Canvas>)
}