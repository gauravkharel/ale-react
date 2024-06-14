import { useLayoutEffect, useState } from "react";
import "./App.css";
import rough from "roughjs/bundled/rough.esm";

// basically generate different stuffs
const generator = rough.generator();

// creates  a rough.js line element given the start(x1, y1) and, end with (x2, y2)
function createElement(x1, y1, x2, y2) {
  const roughElement = generator.line(x1, y1, x2, y2);
  return { x1, y1, x2, y2, roughElement };
}

function App() {
  // this state stores the list of drawn elements
  const [elements, setElements] = useState([]);
  //track drawing
  const [drawing, setDrawing] = useState(false);


  // draw elements whenever elements change
  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const roughCanvas = rough.canvas(canvas);

    elements.forEach(({ roughElement }) => roughCanvas.draw(roughElement));

    // const rect = generator.rectangle(10, 10, 100, 100);
    // const line = generator.line(10, 10, 110, 110);
    // const circle = generator.circle(100, 100, 100, 100);
    // roughCanvas.draw(rect);
    // roughCanvas.draw(line);
    // roughCanvas.draw(circle);
    // ctx.fillStyle= 'green'
    // ctx.fillRect(10,10,100,100)
    // ctx.strokeRect(200,200,100,100)
  }, [elements]);


  // Starts the drawing process by capturing the initial mouse position and creating the initial line element.
  const handleMouseDown = (event) => {
    setDrawing(true);
    const { clientX, clientY } = event;
    const element = createElement(clientX, clientY, clientX, clientY);
    setElements((prevState) => [...prevState, element]);
  };

  // Updates the line element as the mouse moves, providing real-time drawing feedback.
  const handleMouseMove = (event) => {
    if (!drawing) return;

    const { clientX, clientY } = event;
    const index = elements.length - 1;
    const { x1, y1 } = elements[index];
    const updatedElement = createElement(x1, y1, clientX, clientY);

    //making copy of existing elemenst
    const elementsCopy = [...elements];
    elementsCopy[index] = updatedElement;
    setElements(elementsCopy)
    console.log(clientX, clientY);
  };

  //Ends the drawing process
  const handleMouseUp = () => {
    setDrawing(false);
  };
  return (
    <canvas
      id="canvas"
      // style={{ backgroundColor: "cyan" }}
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      Canvas
    </canvas>
  );
}

export default App;
