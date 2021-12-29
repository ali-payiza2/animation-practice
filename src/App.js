import './App.css';
import RotatingBox from './components/animations/RotatingBox';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Stars,stars } from '@react-three/drei';
import Demo from './components/Demo';
import * as THREE from 'three';


function App() {
  return (
    <div className="App">
      <Demo />

      <div className='canvasMainDiv'>

      <Canvas >
           
      {/* <img src="images/LadyW_sword.png" alt="LadyW_sword"/> */}

{/* To enable movement from mouse */}
        <OrbitControls/>
        {/*  To add color. Higher the intensity lighter the color*/}
        <ambientLight intensity={0.5} />
        {/* To add light effect to see picture as 3D */}
        <spotLight position={[10, 15, 10]} angle={0.3} /> 
        {/* Adding background  */}
        <Stars />
        <RotatingBox/>         
     </Canvas>
      </div>

    </div>
  );
}

export default App;
