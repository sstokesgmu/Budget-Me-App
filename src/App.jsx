import { Canvas } from "@react-three/fiber";
import Chart from "./components/Chart/Chart.jsx";
import Scene from "./components/ThreeJs/Scene.jsx"
import Profile from "./components/Common/User.jsx"

export default function App() {
return (
    <>
      <Profile />
      {/* <Canvas>
        <Scene />
      </Canvas>
      <Chart /> */}
    </>
  );
}