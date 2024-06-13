import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Canvas from './component/Canvas.jsx'
function App() {
  const draw = (context, count) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "grey";
    const delta  = count % 800;
    context.fillRect(10+ delta, 10, 100, 100);
  };
 const sketch = (context, count) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = "pink";
    const delta  = count % 700;
    context.fillRect(10+ delta, 10, 100, 100);
  };
  return <>
    <Canvas draw={draw} style={{border: '10px solid black'}} width="800" height="500" />
    <Canvas draw={sketch} style={{border: '10px solid black'}} width="100" height="100" />
  </>
}

export default App
