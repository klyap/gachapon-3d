import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei'
import {GachaponMachine} from './gachapon_machine';
import {StarKnob} from './StarKnob';
import * as material from '../components/materials';
import useSound from 'use-sound';
// import bgMusic from '../public/sounds/bg.mp3';

export const GachaponMachineCanvas = () => {  
  // const [play] = useSound(bgMusic);

  useEffect(() => {
    // play();
  })

  return (
    <Canvas dpr={1.5} camera={{ position: [0, -10, 50], near: 0.1, far: 1000 }}>
      <Suspense fallback={null}>
        <GachaponMachine 
          scale={1.2} 
          rotation={new THREE.Euler(0, 0, 0)} 
          position={new THREE.Vector3(0, -100, -1200)}/>
        <StarKnob />
        <Environment preset="sunset" />
        {/* <OrbitControls makeDefault /> */}
      </Suspense>
    </Canvas>)
}