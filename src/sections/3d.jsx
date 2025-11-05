// // ThreeDScene.jsx
// import React, { useRef, useEffect, useState, useCallback } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { Stars, Text } from "@react-three/drei";
// import * as THREE from "three";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { useLoader } from "@react-three/fiber";
// import { a, useSpring } from "@react-spring/three";

// /*
//   Full cinematic scene component:
//   - Button nav (Tailwind)
//   - Camera curve + spotlight
//   - Billboard text (quaternion)
//   - Text fade+slide via react-spring/three
//   - Planet idle/orbit motion
//   - Keyboard nav + autoplay (pause on hover)
// */

// function EarthPlanet({ basePosition, scale = 12, rotationSpeed = 0.0025 }) {
//   const meshRef = useRef(); // Earth mesh
//   const cloudRef = useRef(); // Clouds mesh

//   const obj = useLoader(OBJLoader, "/earth.obj");

//   const [diffuse, normalMap, specularMap, nightMap, cloudMap] = useLoader(
//     THREE.TextureLoader,
//     [
//       "/Earth_Diffuse.jpg",
//       "/Earth_Normal.jpg",
//       "/Earth_Specular.jpg",
//       "/Earth_Night.jpg",
//       "/Earth_Cloud.jpg",
//     ]
//   );

//   useEffect(() => {
//     obj.traverse((child) => {
//       if (child.isMesh) {
//         child.material = new THREE.MeshStandardMaterial({
//           map: diffuse,
//           normalMap: normalMap,
//           metalness: 0.0,
//           roughness: 0.8,
//           emissiveMap: nightMap,
//           emissive: new THREE.Color(0x444444),
//         });
//         child.castShadow = true;
//         child.receiveShadow = true;
//       }
//     });
//   }, [obj, diffuse, normalMap, nightMap]);

//   useFrame(() => {
//     if (!meshRef.current) return;

//     // Rotate Earth in place only
//     meshRef.current.rotation.y += rotationSpeed;

//     // Rotate clouds slightly faster
//     if (cloudRef.current) {
//       cloudRef.current.rotation.y += rotationSpeed * 1.3;
//     }

//     // Keep Earth at base position (no bobbing or orbit)
//     meshRef.current.position.set(...basePosition);
//     meshRef.current.scale.set(scale, scale, scale);
//   });

//   return (
//     <>
//       <primitive ref={meshRef} object={obj} position={basePosition} />
//       <mesh ref={cloudRef} position={basePosition} scale={scale * 1.01}>
//         <sphereGeometry args={[1, 64, 64]} />
//         <meshBasicMaterial
//           map={cloudMap}
//           transparent
//           opacity={0.2}
//           side={THREE.DoubleSide}
//         />
//       </mesh>
//     </>
//   );
// }

// function ResponsiveScale({ children }) {
//   const { size } = useThree();
//   const isMobile = size.width < 768; // Tailwind "md" breakpoint

//   // Adjust both scale + Z distance on mobile for visibility
//   const scale = isMobile ? 0.6 : 1;
//   const positionZ = isMobile ? -55 : -75;

//   return (
//     <group scale={[scale, scale, scale]} position={[0, 0, positionZ]}>
//       {children}
//     </group>
//   );
// }
// // Stories / planets config
// const stories = [
//   {
//     title: "The Beginning — 1976",
//     text: "It was a risky yet promising opportunity courageously taken. In 1976, Prime Sales Inc. (PSI) began as a bold idea — a small team with big dreams to change the way supply chains worked.",
//     planetPosition: [5, 0, -60],
//     obj: "/model/Moon.obj",
//     texture: "/model/Diffuse.png",
//     bump: null,
//     scale: 2,
//   },
//   {
//     title: "Built on Trust",
//     text: "Guided by excellent salesmanship and genuine understanding of customers’ unique challenges, PSI grew into a trusted name in intralogistics and supply chain solutions.",
//     planetPosition: [-5, 0, -120],
//     obj: "/model/venus.obj",
//     texture: "/model/bumpv.png",
//     bump: "/model/difd.png",
//     scale: 12,
//   },
//   {
//     title: "Global Partnerships",
//     text: "Our reputation for quality opened doors to partnerships with global leaders like DEXION and DEMATIC, enhancing our ability to deliver world-class storage and material handling systems.",
//     planetPosition: [-5, 0, -240],
//     obj: "/model/mars_2k.obj",
//     texture: "/model/MarsD.png",
//     bump: "/model/Bump_2K.png",
//     scale: 2.5,
//   },
//   {
//     title: "Innovation & Expertise",
//     text: "With over four decades of experience, our engineers and managers continually refine their craft — mastering the art of designing efficient and intelligent supply chain systems.",
//     planetPosition: [-5, 0, -360],
//     obj: "/model/mer.obj",
//     texture: "/model/merbump.png",
//     bump: "/model/merdif.png",
//     scale: 20,
//   },
//   {
//     title: "Moving Forward",
//     text: "Today, PSI continues to innovate with strong partners, modern technology, and unwavering commitment to helping clients lead their markets.",
//     planetPosition: [-5, 0, -480],
//     obj: "/earth.obj", // keep for OBJPlanet but use EarthPlanet for rendering
//     scale: 12,
//     isEarth: true, // flag to differentiate
//   },
// ];

// /* ---------- Camera Controller (cinematic curve + spotlight) ---------- */
// function CameraController({ currentIndex, spotlightRef }) {
//   const { camera } = useThree();
//   // We store a "virtual" current camera position for smoother curves if needed
//   const tempVec = new THREE.Vector3();

//   useFrame((state, delta) => {
//     const [px, py, pz] = stories[currentIndex].planetPosition;

//     // camera target point slightly above planet to look at
//     const lookTarget = new THREE.Vector3(px, py + 0.5, pz);

//     // Create a cinematic target camera position using slight arc offsets:
//     // - If planet is far (pz large negative), put camera back
//     const targetZ = pz + 35;
//     const arcHeight = 8; // how high the camera arcs
//     // add a small x offset for variety (alternates left/right by index)
//     const xOffset = currentIndex % 2 === 0 ? -6 : 6;

//     const cinematicTarget = new THREE.Vector3(
//       xOffset * 0.25, // small x offset
//       arcHeight,
//       targetZ
//     );

//     // Smoothly move camera toward cinematicTarget (lerp)
//     tempVec.copy(camera.position).lerp(cinematicTarget, 0.05);
//     camera.position.copy(tempVec);

//     // Always look at the planet (immediate, prevents inverted text)
//     camera.lookAt(lookTarget);

//     // Spotlight smoothing (if provided)
//     if (spotlightRef && spotlightRef.current) {
//       // Move spotlight to slightly above & to the side of planet, and point to planet
//       const lightPos = new THREE.Vector3(px + 6, py + 6, pz + 15);
//       spotlightRef.current.position.lerp(lightPos, 0.08);

//       if (spotlightRef.current.target) {
//         spotlightRef.current.target.position.lerp(lookTarget, 0.1);
//         spotlightRef.current.target.updateMatrixWorld();
//       }
//     }
//   });

//   return null;
// }

// /* ---------- Story text (billboard + spring animation) ---------- */
// function StoryText({ story, active }) {
//   const titleRef = useRef();
//   const textRef = useRef();
//   const groupRef = useRef();
//   const { camera } = useThree();

//   // Spring for fade and slide: when active -> opacity 1, z offset 0, otherwise fade out and slide away
//   const spring = useSpring({
//     opacity: active ? 1 : 0,
//     // we animate a small x offset and y offset for slide-in feel
//     positionOffset: active ? [0, 0, 0] : [0, -2, 0],
//     config: { mass: 1, tension: 140, friction: 20 },
//   });

//   // Billboard: copy camera quaternion each frame so text faces camera exactly
//   useFrame(() => {
//     if (titleRef.current) titleRef.current.quaternion.copy(camera.quaternion);
//     if (textRef.current) textRef.current.quaternion.copy(camera.quaternion);
//   });

//   // We'll place the text near the planet with the group's base position
//   const basePos = [
//     story.planetPosition[0] + 15,
//     story.planetPosition[1] + 2,
//     story.planetPosition[2],
//   ];

//   return (
//     <a.group
//       ref={groupRef}
//       position={[
//         basePos[0] + spring.positionOffset.get()[0],
//         basePos[1] + spring.positionOffset.get()[1],
//         basePos[2] + spring.positionOffset.get()[2],
//       ]}
//     >
//       <a.group
//       // bind opacity via material on Text by setting color with alpha? three Text material doesn't directly expose opacity prop,
//       // but drei Text supports `material` props. Simpler: we use `a.group` and control children opacity via material color with alpha where supported.
//       >
//         <Text
//           ref={titleRef}
//           fontSize={1.5}
//           color={active ? "rgb(120,255,220)" : "rgba(255,255,255,0.85)"}
//           anchorX="left"
//           anchorY="top"
//           maxWidth={18}
//           position={[0, 2, 0]}
//         >
//           {story.title}
//         </Text>

//         <Text
//           ref={textRef}
//           fontSize={1}
//           color="white"
//           anchorX="left"
//           anchorY="top"
//           maxWidth={18}
//           position={[0, -1, 0]}
//         >
//           {story.text}
//         </Text>
//       </a.group>
//     </a.group>
//   );
// }

// /* ---------- OBJ Planet loader with idle orbit + highlight scale ---------- */
// function OBJPlanet({
//   objPath,
//   texturePath,
//   bumpPath,
//   bumpScale = 0.05,
//   basePosition,
//   scale = 1,
//   rotationSpeed = 0.0025,
//   active = false,
// }) {
//   const obj = useLoader(OBJLoader, objPath);

//   // Always load both textures in same order to satisfy hooks
//   const [texture, bumpTexture] = useLoader(THREE.TextureLoader, [
//     texturePath,
//     bumpPath ?? texturePath,
//   ]);

//   // Local ref for mesh transform
//   const meshRef = useRef();

//   useEffect(() => {
//     obj.traverse((child) => {
//       if (child.isMesh) {
//         child.material = new THREE.MeshStandardMaterial({
//           map: texture,
//           bumpMap: bumpPath ? bumpTexture : null,
//           bumpScale: bumpPath ? bumpScale : 0,
//           roughness: 0.9,
//           metalness: 0.1,
//         });
//         child.castShadow = true;
//         child.receiveShadow = true;
//       }
//     });
//   }, [obj, texture, bumpTexture, bumpPath, bumpScale]);

//   // Idle orbit: small circular path around its base pos when active, otherwise slow spin
//   useFrame((state) => {
//     const t = state.clock.elapsedTime;
//     if (!meshRef.current) return;

//     // slow rotation about Y always
//     meshRef.current.rotation.y += rotationSpeed;

//     if (active) {
//       // subtle bob + orbiting offset when active
//       const orbitRadius = Math.min(1.8, Math.max(0.6, scale * 0.6));
//       const bob = Math.sin(t * 1.2) * 0.6;
//       meshRef.current.position.x =
//         basePosition[0] + Math.cos(t * 0.6) * orbitRadius * 0.4;
//       meshRef.current.position.y = basePosition[1] + bob * 0.15;
//       meshRef.current.position.z =
//         basePosition[2] + Math.sin(t * 0.6) * orbitRadius * 0.2;
//       // slight scale pulse when active
//       const pulse = 1 + Math.sin(t * 2) * 0.015;
//       meshRef.current.scale.set(scale * pulse, scale * pulse, scale * pulse);
//     } else {
//       // ensure it's at base position and normal scale
//       meshRef.current.position.set(...basePosition);
//       meshRef.current.scale.set(scale, scale, scale);
//     }
//   });

//   return <primitive ref={meshRef} object={obj} position={basePosition} />;
// }

// /* ---------- Universe - builds the canvas scene ---------- */
// function Universe({ currentIndex }) {
//   // spotlight ref used by CameraController
//   const spotRef = useRef();
//   // create a dedicated target for the spotlight to follow
//   const spotTarget = useRef(new THREE.Object3D());

//   return (
//     <>
//       <Canvas
//         shadows
//         style={{
//           position: "relative",
//           top: 0,
//           left: 0,
//           width: "100vw",
//           height: "100vh",
//           background: "#101922",
//           zIndex: 0,
//         }}
//         camera={{ position: [0, 8, 50], fov: 60, near: 0.1, far: 2000 }}
//       >
//         <ambientLight intensity={0.35} />
//         <directionalLight
//           castShadow
//           intensity={0.6}
//           position={[10, 12, 8]}
//           shadow-mapSize-width={2048}
//           shadow-mapSize-height={2048}
//         />

//         {/* Stars */}
//         <Stars
//           radius={300}
//           depth={500}
//           count={40000}
//           factor={4}
//           fade
//           speed={1}
//         />

//         {/* Spotlight that will "highlight" the active planet */}
//         <spotLight
//           ref={spotRef}
//           intensity={1.8}
//           distance={220}
//           angle={0.6}
//           penumbra={0.7}
//           color={"#ffd6a5"}
//           castShadow={false}
//         />
//         {/* attach the target object to the scene so spotlight can lookAt it */}
//         <primitive object={spotTarget.current} />

//         {/* Camera controller (moves camera + controls spotlight target) */}
//         <CameraController
//           currentIndex={currentIndex}
//           spotlightRef={{ current: spotRef.current }}
//         />

//         {/* Story texts */}
//         <group position={[-12, 0, 0]}>
//           {/* Story texts */}
//           {stories.map((s, i) => (
//             <StoryText key={i} story={s} active={i === currentIndex} />
//           ))}

//           {/* Planets */}
//           {stories.map((s, i) =>
//             s.isEarth ? (
//               <EarthPlanet
//                 key={i}
//                 basePosition={s.planetPosition}
//                 scale={s.scale}
//                 active={i === currentIndex}
//               />
//             ) : (
//               <OBJPlanet
//                 key={i}
//                 objPath={s.obj}
//                 texturePath={s.texture}
//                 bumpPath={s.bump}
//                 bumpScale={0.05}
//                 basePosition={s.planetPosition}
//                 scale={s.scale}
//                 rotationSpeed={0.003 + i * 0.0005}
//                 active={i === currentIndex}
//               />
//             )
//           )}
//         </group>
//       </Canvas>
//     </>
//   );
// }

// /* ---------- Main Component with Controls (Tailwind UI) ---------- */
// export default function ThreeDScene() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const hoverRef = useRef(false);
//   const autoplayRef = useRef(null);

//   const goNext = useCallback(() => {
//     setCurrentIndex((p) => Math.min(p + 1, stories.length - 1));
//   }, []);

//   const goPrev = useCallback(() => {
//     setCurrentIndex((p) => Math.max(p - 1, 0));
//   }, []);

//   // Keyboard navigation
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "ArrowRight") goNext();
//       if (e.key === "ArrowLeft") goPrev();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [goNext, goPrev]);

//   // Autoplay (advance every 6s), pause on hover or when paused manually
//   useEffect(() => {
//     if (autoplayRef.current) clearInterval(autoplayRef.current);
//     if (!isPaused) {
//       autoplayRef.current = setInterval(() => {
//         setCurrentIndex((prev) => {
//           if (prev >= stories.length - 1) return 0;
//           return prev + 1;
//         });
//       }, 200000);
//     }
//     return () => {
//       if (autoplayRef.current) clearInterval(autoplayRef.current);
//     };
//   }, [isPaused]);

//   // Pause while the user hovers the controls area
//   const onMouseEnterControls = () => {
//     setIsPaused(true);
//     hoverRef.current = true;
//   };
//   const onMouseLeaveControls = () => {
//     hoverRef.current = false;
//     setIsPaused(false);
//   };

//   return (
//     <div className="relative w-screen h-screen overflow-hidden">
//       <Universe currentIndex={currentIndex} />

//       {/* Top-left title / optional overlay */}
//       <div className="absolute top-6 left-6 z-20 text-white/90">
//         <div className="text-2xl font-semibold">PSI — Timeline</div>
//         <div className="text-sm text-white/60 mt-1">Cinematic presentation</div>
//       </div>

//       {/* Center-left progress dots */}
//       <div className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-3">
//         {stories.map((s, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentIndex(i)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               i === currentIndex ? "bg-cyan-400 scale-125" : "bg-white/30"
//             }`}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>

//       {/* Bottom navigation buttons (Tailwind) */}
//       <div className="absolute bottom-8 w-full flex justify-center items-center gap-8 z-30">
//         <button
//           onClick={goPrev}
//           disabled={currentIndex === 0}
//           className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl
//             border-2 backdrop-blur-md transition-all duration-300
//             ${
//               currentIndex === 0
//                 ? "opacity-30 cursor-not-allowed border-white/20"
//                 : "cursor-pointer hover:scale-125 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.7)] border-white/30"
//             }`}
//           aria-label="Previous"
//         >
//           ❮
//         </button>

//         {/* Play / Pause */}

//         <button
//           onClick={goNext}
//           disabled={currentIndex === stories.length - 1}
//           className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-3xl
//             border-2 backdrop-blur-md transition-all duration-300
//             ${
//               currentIndex === stories.length - 1
//                 ? "opacity-30 cursor-not-allowed border-white/20"
//                 : "cursor-pointer hover:scale-125 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,255,0.7)] border-white/30"
//             }`}
//           aria-label="Next"
//         >
//           ❯
//         </button>
//       </div>

//       {/* Bottom-right small helper */}
//       <div className="absolute right-16 bottom-6 z-20 text-white/60 text-xs">
//         ← / → to navigate • Auto-advances every 6s
//       </div>
//     </div>
//   );
// }
