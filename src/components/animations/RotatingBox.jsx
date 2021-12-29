import React from 'react';

import { Canvas ,Stars } from '@react-three/fiber';

export default function RotatingBox() {


    return (
       
            <mesh>
             {/* <img src="images/LadyW_sword.png" alt="LadyW_sword"/> */}

            <boxBufferGeometry attach="geometry"/>
            <meshLambertMaterial attach="material" color='hotpink'>
            </meshLambertMaterial>

        </mesh>
        
    )
}
