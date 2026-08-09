'use client'

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function Isohedron (){
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const container = containerRef.current;

        if (!container) return;
        
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            75,
            container.clientWidth/ container.clientHeight,
            0.1,
            1000
        );
        
        camera.position.set(0, 1.5, 3);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });

        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(0x000000, 0)
        
        container.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 2.0
        controls.enableZoom = false;

        const geometry = new THREE.IcosahedronGeometry(1, 0);

        const material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true,
            wireframeLinewidth: 5
        })

        const icosahedron = new THREE.Mesh(geometry, material);
        scene.add(icosahedron);

        let animationFrameId: number;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            controls.update();

            renderer.render(scene, camera)
        }
        animate();

        const handleResize = () => {
            if (!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }
        window.addEventListener('resize', handleResize)

        return ()=>{
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);

            geometry.dispose();
            material.dispose();
            controls.dispose();
            renderer.dispose();

            if (container.contains(renderer.domElement)){
                container.removeChild(renderer.domElement)
            }
        }

    }, [])
    
    return (
        <div
        ref={containerRef}
        style={{
            width: '100%',
            height: '500px'
        }}>
        
        </div>
    );
}