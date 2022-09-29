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
    <Canvas dpr={1.5} linear camera={{ far:100000, near:5, fov:20, position:[-43.88, 218.96, 1766.62]}}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.7}/>
        <GachaponMachine
          // scale={1.2} 
          rotation={new THREE.Euler(0, 0, 0)}
          position={new THREE.Vector3(0, -300, -1200)}/>
        <StarKnob />
        <Environment preset="sunset" />
        {/* <OrbitControls makeDefault /> */}
      </Suspense>
    </Canvas>)
}