import * as THREE from '@react-three/fiber'

export default function Scene(){
    return (
        <>
           <mesh> 
                <boxGeometry args={[2,2,2]}/>
                <meshPhongMaterial />
           </mesh>
           <ambientLight intensity={0.1}/>
           <directionalLight position={[0,0,5]} color="red"/>
        </>
    );
}