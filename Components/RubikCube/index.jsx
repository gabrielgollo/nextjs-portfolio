import * as THREE from "three";

import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import { Box, Center } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { createRef, useEffect, useState } from "react";
import {  } from "react";
import { loadGLTFModel } from "../../lib/model";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'



function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

export const RubikCube = () => {
    const [loading, setLoading] = useState(true)
    const ref = createRef()

    const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

    useEffect(() => {
        
        
        const canvas = ref.current
        const scH = canvas.clientHeight
        const scW = canvas.clientWidth

        const renderer = new THREE.WebGLRenderer({
            canvas, 
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(scW, scH)
        renderer.outputEncoding = THREE.sRGBEncoding
        const scene = new THREE.Scene()

        const target = new THREE.Vector3(-0.5, 1.2, 0)
        const initialCameraPosition = new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI)
        )

        const scale = scH * 0.0005 + 4.8
        const camera = new THREE.OrthographicCamera(
            -scale,
            scale,
            scale,
            -scale,
            0.01,
            50000
        )

        camera.position.copy(initialCameraPosition)
        camera.lookAt(target)

        const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
        scene.add(ambientLight)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.autoRotate = true
        controls.target = target
        scene.background = new THREE.Color( '#00000000' );
        loadGLTFModel(scene, '/rubik.glb', {
            receiveShadow: false,
            castShadow: true
          }).then(() => {
            animate()
            setLoading(false)
          })


        let req = null
        let frame = 0
        const animate = () => {
            req = requestAnimationFrame(animate)

            frame = frame <= 100 ? frame + 1 : frame

            if (frame <= 100) {
            const p = initialCameraPosition
            const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

            camera.position.y = 10
            camera.position.x =
                p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
            camera.position.z =
                p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
            camera.lookAt(target)
            } else {
            controls.update()
            }

            renderer.render(scene, camera)
        }
        
        return () => {
            cancelAnimationFrame(req)
            renderer.dispose()
          }
        
    }, [])

    return(
        <Box>
            <Center>
                <canvas 
                    ref={ref}
                    id="threejs-art"
                    width={400}
                    height={400}
                    style={{
                        background: useColorModeValue("white", "gray.800"),
                    }}
                />
            </Center>
        </Box>
    )
}