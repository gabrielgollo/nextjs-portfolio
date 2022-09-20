import * as THREE from "three";

import { Box, Center } from "@chakra-ui/layout";
import { createRef, useEffect, useState, useCallback } from "react";
import {  } from "react";
import { loadGLTFModel } from "../../lib/model";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'



function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

export const RubikCube = () => {
    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState(null);
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

      const handleWindowResize = useCallback(() => {
        const { current: canvas } = ref
        if (canvas && renderer) {
          const scW = canvas.clientWidth
          const scH = canvas.clientHeight
    
          renderer.setSize(scW, scH)
        }
      }, [])

    useEffect(() => {
        
        
        const canvas = ref.current
        const scH = canvas.clientHeight
        const scW = canvas.clientWidth

        const renderer = new THREE.WebGLRenderer({
            canvas, 
            antialias: true,
            alpha: true,
        });

        setRenderer(renderer)

        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(scW, scH)
        renderer.outputEncoding = THREE.sRGBEncoding
        const scene = new THREE.Scene()

        const target = new THREE.Vector3(-0.5, 1.5, 0)
        const initialCameraPosition = new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            -100,
            20 * Math.cos(0.2 * Math.PI)
        )

        const scale = scH * 0.005 +  1.1
        const camera = new THREE.OrthographicCamera(
            -scale,
            scale,
            scale,
            -scale,
            0.1,
            50000
        )

        camera.position.copy(initialCameraPosition)
        camera.lookAt(target)

        const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
        scene.add(ambientLight)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.autoRotate = true
        controls.target = target
        loadGLTFModel(scene, '/rubik.glb', {
            receiveShadow: false,
            castShadow: false
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

            camera.position.y = 100
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

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
          window.removeEventListener('resize', handleWindowResize, false)
        }
      }, [handleWindowResize])

    return(
        <Box>
            <Center>
                <canvas 
                    ref={ref}
                    id="threejs-art"
                    width={200}
                    height={200}
                />
            </Center>
        </Box>
    )
}