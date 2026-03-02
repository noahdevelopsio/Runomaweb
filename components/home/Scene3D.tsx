"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

function FloatingOrb({ position, color, speed, distort, size }: {
    position: [number, number, number];
    color: string;
    speed: number;
    distort: number;
    size: number;
}) {
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        mesh.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
        mesh.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
    });

    return (
        <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
            <Sphere ref={mesh} args={[size, 64, 64]} position={position}>
                <MeshDistortMaterial
                    color={color}
                    roughness={0.15}
                    metalness={0.8}
                    distort={distort}
                    speed={2}
                    transparent
                    opacity={0.7}
                />
            </Sphere>
        </Float>
    );
}

function FloatingRing({ position, color, speed }: {
    position: [number, number, number];
    color: string;
    speed: number;
}) {
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.5 + 0.5;
        mesh.current.rotation.z = state.clock.elapsedTime * speed * 0.15;
    });

    return (
        <Float speed={speed * 0.7} rotationIntensity={0.6} floatIntensity={1}>
            <Torus ref={mesh} args={[1.2, 0.05, 16, 100]} position={position}>
                <meshStandardMaterial
                    color={color}
                    roughness={0.2}
                    metalness={0.9}
                    transparent
                    opacity={0.4}
                />
            </Torus>
        </Float>
    );
}

function Particles({ count = 200 }) {
    const mesh = useRef<THREE.Points>(null!);
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
            mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#7CB49A"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: "transparent" }}
            >
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} color="#7CB49A" />
                <directionalLight position={[-5, -3, 3]} intensity={0.4} color="#A8C5DA" />
                <pointLight position={[0, 3, 4]} intensity={0.6} color="#7CB49A" />

                <FloatingOrb position={[3, 1.5, -1]} color="#7CB49A" speed={1.2} distort={0.4} size={1.2} />
                <FloatingOrb position={[-3.5, -1, -2]} color="#A8C5DA" speed={0.8} distort={0.3} size={0.9} />
                <FloatingOrb position={[1, -2.5, -1.5]} color="#4A9070" speed={1} distort={0.5} size={0.6} />

                <FloatingRing position={[-2, 2, -1]} color="#7CB49A" speed={1.5} />
                <FloatingRing position={[2.5, -1.5, -2]} color="#A8C5DA" speed={1} />

                <Particles count={300} />
            </Canvas>
        </div>
    );
}
