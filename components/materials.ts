import React, { useRef } from 'react'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three';
import * as materials from './materials';

export const glass = new THREE.MeshPhysicalMaterial({
  roughness: 0.1,
  transmission: 1,
  // thickness: 0.5, // Add refraction!
});

export const bubble = new THREE.MeshPhysicalMaterial({
  roughness: 0.3,
  color: 0x9494F4,
  opacity: 0.5,
  emissive: 0x9494F4,
  emissiveIntensity: 0.8,
});

export const bubble2 = new THREE.MeshPhysicalMaterial({
  roughness: 0.1,
  color: 0x9494F4,
  opacity: 0.1,
  // transmission: .2,  
  // transparent: true,
  emissive: 0xbf459f,
  emissiveIntensity: 0.8,
  specularIntensity: 1,
  blending: THREE.NormalBlending
});

export const bubble3 = new THREE.MeshPhysicalMaterial({
  roughness: 0.1,
  color: 0x8E6DEA,
  // opacity: 0.2,
  // transmission: .2,  
  // transparent: true,
  emissive: 0x8E6DEA,
  emissiveIntensity: 0.8,
  specularIntensity: 1,
  blending: THREE.NormalBlending
});

export const bluelight = new THREE.MeshPhysicalMaterial({
  roughness: 0.1,
  color: 0x7DD8C3,
  opacity: 0.1,
  // transmission: .2,  
  // transparent: true,
  // emissive: 0x7DD8C3,
  // emissiveIntensity: 0.8,
  specularIntensity: 1,
  blending: THREE.NormalBlending
});

export const yellow = new THREE.MeshStandardMaterial({
  roughness: 0.8,
  color: 0xF3EA48,
});

export const paleyellow = new THREE.MeshStandardMaterial({
  roughness: 0.8,
  color: 0xECEBC5,
});

export const pink = new THREE.MeshStandardMaterial({
  roughness: 0.8,
  color: 0xF99BBE,
});

export const gem = (color: number) => new THREE.MeshPhysicalMaterial({
  roughness: 0,
  metalness: .1,
  // transmission: 1,
  // opacity: 0.1,
  color: color,
  specularIntensity: 1,
  envMapIntensity: .9,
  emissive: color,
  emissiveIntensity: 0.2
  // thickness: 0.5, // Add refraction!
});