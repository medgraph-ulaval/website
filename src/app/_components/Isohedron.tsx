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

        const getSize = () => ({
            width: container.clientWidth,
            height: container.clientHeight,
        });

        const { width: initialWidth, height: initialHeight } = getSize();
        const aspect = initialHeight > 0 ? initialWidth / initialHeight : 1;

        const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
        
        camera.position.set(0, 0, 3);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });

        renderer.setSize(initialWidth || 1, initialHeight || 1, false);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(0x000000, 0)

        const canvas = renderer.domElement;
        canvas.style.position = 'absolute';
        canvas.style.inset = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.display = 'block';
        
        container.appendChild(canvas);

        const controls = new OrbitControls(camera, canvas);
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
            const { width, height } = getSize();
            if (width <= 0 || height <= 0) return;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height, false);
        }
        const observer = new ResizeObserver(handleResize);
        observer.observe(container);
        handleResize();

        return ()=>{
            observer.disconnect()

            cancelAnimationFrame(animationFrameId);

            geometry.dispose();
            material.dispose();
            controls.dispose();
            renderer.dispose();

            if (container.contains(canvas)){
                container.removeChild(canvas)
            }
        }

    }, [])
    
    return (
        <div
        ref={containerRef}
        style={{
            width: '100%',
            aspectRatio: '1/1',
            position: 'relative',
        }}>
        
        </div>
    );
}
