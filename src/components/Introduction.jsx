import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './introduction.css';
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const Container = styled.div`
  height: 100vh;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;
const Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding-left: 100px;
  min-width: 800px;
  margin-bottom: 150px;
`;
const Right = styled.div`
  position: relative;
  inset:0;
  pointer-events: none;
  margin-right: 100px;
  margin-bottom: 100px;
  min-width: 320px;
  margin-bottom: 150px;
`;
const Title = styled.h1`
  font-size: 74px;
  font-family: 'JetBrains Mono', monospace;
`;
const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.hr`
  width: 50px;
`;
const Subtitle = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;
const Desc = styled.div`
  font-size: 14px;
  width: 500px;
  margin-top: 20px;
`
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
`;
const Icons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
function Introduction() {
    // gltf file must be in public folder
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(30, -2.5, 300);
    
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
    
        const container = document.getElementById('container3D');
        if (container) {
            container.innerHTML = ''; // Clear existing content
            container.appendChild(renderer.domElement);
        }
    
        const loader = new GLTFLoader();
        loader.load(
            '/me.glb',
            (gltf) => {
                const photo = gltf.scene;
                photo.name = 'my3DObject'; // Assign a unique name
                scene.add(photo);
    
                const animate = () => {
                    requestAnimationFrame(animate);
                    photo.rotation.y += 0.01; // Example rotation animation
                    renderer.render(scene, camera);
                };
                animate();
            },
            undefined,
            (error) => {
                console.error('Error loading GLTF model:', error);
            }
        );
    }, []);
  return (
    <Section>
        <Container>
            <Left>
                <h2>Hello it's</h2>
                <Title>
                    Yutaka Shibata 
                </Title>
                <WhatIDo>
                    <Line/>
                    <Subtitle>
                        <h1>I am a software engineer</h1>
                    </Subtitle>
                </WhatIDo>
                    <Desc>
                        I am an undergraduate college student pursuing Artificial Intelligence. 
                        Aside from the fact that I am interested in the field of AI, I am also curious
                        about blockchain technology and how it is trying to solve the problem that 
                        current content creators are facing. The intersection between AI and web3 is 
                        also the area of my interests since I have created chatbot platforms using an API 
                        from open AI. 
                    </Desc>
                <Icons>
                    <div>
                        <a 
                            href="https://www.linkedin.com/in/yutaka-shibata-924947278/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='social-icon'
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                    <div>
                        <a 
                            href="https://github.com/makimakiver" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='social-icon'
                        >
                            <FaGithub />
                        </a>
                    </div>
                    <div>
                        <a 
                            href="https://www.instagram.com/yutaka3209/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='social-icon'
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </Icons>
            </Left>
            <Right>
                <div id='container3D'>
                </div>
                <script type='module'></script>
            </Right>
        </Container>
    </Section>
  )
}

export default Introduction