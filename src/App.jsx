import { Canvas } from "@react-three/fiber";
import Chart from "./components/Chart.jsx";

export default function App() {
return (
    <>
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshPhongMaterial />
        </mesh>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} color="red" />
      </Canvas>

      <Chart />

    </>
);
}