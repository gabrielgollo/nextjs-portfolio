import * as THREE from "three";
import { useLayoutEffect } from "react";

import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import { Box, Center } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
export const RubikCube = () => {
    const scene = new THREE.Scene();
    
    scene.background = new THREE.Color(0xdddddd);
    //const hlight = new THREE.AmbientLight(0xffffff, 10);
    //scene.add(hlight);
    useLayoutEffect(() => {
        
        const canvas = document.getElementById("threejs-art");
        const fov = 40;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        const renderer = new THREE.WebGLRenderer({canvas});
        renderer.setSize(400, 400);

        const loader = new GLTFLoader().setPath("models/gltf/rubikcube/");
        loader.load(
            "scene.gltf",
            (gltf) => {
                const model = gltf.scene;
                scene.add(model);
                model.position.set(0, 0, 0);
                model.scale.set(0.1, 0.1, 0.1);
                model.rotation.set(0, 0, 0);
                model.traverse((child) => {
                    if (child.isMesh) {
                        child.castShadow = true;
                        child.receiveShadow = true;
                    }
                }
                );
                const animate = () => {
                    requestAnimationFrame(animate);
                    renderer.render(scene, camera);
                }
                animate();
            },  
            undefined,
            (error) => {
                console.error(error);
            }
        );
    }, [])

    return(
        <Box style={{ marginTop: 0, marginBottom: 10 }}>
            <Center>
                <canvas id="threejs-art"></canvas>
            </Center>
        </Box>
    )
}