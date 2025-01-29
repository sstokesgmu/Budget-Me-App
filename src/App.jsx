import {Routes, Route, Link} from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import User from './pages/User';
import Dashboard from './pages/Dashboard';
import Budget from './pages/Budget';
import NavBar from './components/Common/NavBar';

export default function App() {
return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/account' element={<User/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/budget' element={<Budget/>} />
      </Routes>
      {/* <Profile /> */}
      {/* <Canvas>
        <Scene />
      </Canvas>
      <Chart /> */}
    </>
  );
}